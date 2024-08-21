import gql from 'graphql-tag';

const ListingsQuery = gql`
  query Listings {
    listings {
      id
      title
      description
      image
      address
      price
      numOfGuests
      numOfBeds
      numOfBaths
      rating
    }
  }
`;

export default ListingsQuery;
