/* eslint-disable no-param-reassign */
const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');
const path = require('path');

const app = express();

const LISTINGS_DATA_FILE = path.join(__dirname, 'server-listings-data.json');
const LISTINGS_ORIGINAL_DATA_FILE = path.join(__dirname, 'server-listings-original.json');

app.set("port", 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/listings", (_req, res) => {
  setTimeout(() => {
    fs.readFile(LISTINGS_DATA_FILE, (err, data) => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(JSON.parse(data));
    });
  }, 1000);
});

app.post("/listings/delete", (req, res) => {
  fs.readFile(LISTINGS_DATA_FILE, (err, data) => {
    const id = req.body.id;
    let listingProducts = JSON.parse(data);

    for (let i = 0; i < listingProducts.length; i++) {
      if (listingProducts[i].id === id) {
        listingProducts.splice(i, 1)[0];
      }
    }

    fs.writeFile(LISTINGS_DATA_FILE, JSON.stringify(listingProducts, null, 3), () => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(listingProducts);
    });
  });
});

app.post("/listings/reset", (req, res) => {
  fs.readFile(LISTINGS_ORIGINAL_DATA_FILE, (err, data) => {
    let listingProducts = JSON.parse(data);

    fs.writeFile(LISTINGS_DATA_FILE, JSON.stringify(listingProducts, null, 3), () => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(listingProducts);
    });
  });
});

app.listen(app.get("port"), () => {
  console.log( // eslint-disable-line no-console
    `Find the server at: http://localhost:${app.get(
      "port"
    )}/`
  );
});
