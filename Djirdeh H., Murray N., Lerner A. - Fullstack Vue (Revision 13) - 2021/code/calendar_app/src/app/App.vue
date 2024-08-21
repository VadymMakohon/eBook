<template>
  <div id="app">
    <div id="calendar-week" class="container">
      <div class="columns is-mobile">
        <div class="day column">
          <div class="day-banner has-text-white has-text-centered">Mon</div>
          <div class="day-details">
            <div class="day-number">1</div>
            <div class="day-event" style="background-color: rgb(153, 255, 153)">
              <div>
                <span class="has-text-centered details">Get Groceries</span> 
                <div class="has-text-centered icons"><i class="fa fa-pencil-square edit-icon"></i> 
                  <i class="fa fa-trash-o delete-icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="day column">
          <div class="day-banner has-text-white has-text-centered">Tue</div>
          <div class="day-details">
            <div class="day-number">2</div>
          </div>
        </div>
        <div class="day column">
          <div class="day-banner has-text-white has-text-centered">Wed</div>
          <div class="day-details">
            <div class="day-number">3</div>
          </div>
        </div>
        <div class="day column">
          <div class="day-banner has-text-white has-text-centered">Thu</div>
          <div class="day-details">
            <div class="day-number">4</div>
          </div>
        </div>
        <div class="day column">
          <div class="day-banner has-text-white has-text-centered">Fri</div>
          <div class="day-details">
            <div class="day-number">5</div>
            <div class="day-event" style="background-color: rgb(255, 153, 153)">
              <div>
                <span class="has-text-centered details">Friday dinner/drinks</span> 
                <div class="has-text-centered icons"><i class="fa fa-pencil-square edit-icon"></i> 
                  <i class="fa fa-trash-o delete-icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="day column">
          <div class="day-banner has-text-white has-text-centered">Sat</div>
          <div class="day-details">
            <div class="day-number">6</div>
          </div>
        </div>
        <div class="day column">
          <div class="day-banner has-text-white has-text-centered">Sun</div>
          <div class="day-details">
            <div class="day-number">7</div>
          </div>
        </div>
      </div>
    </div>
    <div id="calendar-entry">
      <div class="calendar-entry-note">
        <input type="text" placeholder="New Event" />
        <p class="calendar-entry-day">Day of event: <span class="bold">Monday</span></p>
        <a class="button is-primary is-small is-outlined">Submit</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
html, body, #app {
  height: 100%;
}

#app {
  background: #6e6e6e;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
}

#calendar-week {
  margin-bottom: 50px;
  .column {
    padding: 0 0 0 0;
  }

  .day {
    background-color: #4A4A4A;
    color: #FFF;
    border-left: 1px solid #8F8F8F;
    border-bottom: 1px solid #8F8F8F;
    font-size: 12px;
    cursor: pointer;

    &:hover {
      background: darken(#4A4A4A,3%);
    }

    .day-banner {
      background-color: #333333;
      color: #FFF;
      padding: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 12px;
      font-weight: 600;
    }

    .day-details {
      padding: 10px;

      .day-event {
        margin-top: 6px;
        margin-bottom: 6px;
        display: block;
        color: #4C4C4C;
        padding: 5px;

        .details {
          display: block;
        }

        .icons .fa {
          padding: 0 2px;
        }

        input {
          background: none;
          border: 0;
          border-bottom: 1px solid #FFF;
          width: 100%;

          &:focus {
            outline: none;
          }
        }
      }
    }

    &:last-child {
      border-right: 1px solid #8F8F8F;
    }
  }
}

#calendar-entry {
  background: #FFF;
  border: 1px solid #42b883;
  border-radius: 10px;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;

  .calendar-entry-note {
    input {
      width: 200px;
      font-weight: 600;
      border: 0;
      border-bottom: 1px solid #CCC;
      font-size: 15px;
      height: 30px;
      margin-bottom: 10px;

      &:focus {
        outline: none;
      }
    }

    .calendar-entry-day {
      color: #42b883;
      font-size: 12px;
      margin-bottom: 10px;
      padding-bottom: 5px;

      .bold {
        font-weight: 600;
      }
    }

    .submit {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
