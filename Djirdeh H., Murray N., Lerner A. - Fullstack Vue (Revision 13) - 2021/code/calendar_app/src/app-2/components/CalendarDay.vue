<template>
  <div class="day column">
    <div class="day-banner has-text-centered">{{ day.abbvTitle }}</div>
    <div class="day-details">
      <div class="day-number">{{ day.id }}</div>
      <div class="day-event" style="background-color: rgb(153, 255, 153)">
        <div>
          <span class="has-text-centered details">Get Groceries</span> 
          <div class="has-text-centered icons">
            <i class="fa fa-pencil-square edit-icon"></i>
            <i class="fa fa-trash-o delete-icon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarDay',
  props: ['day']
}
</script>

<style lang="scss" scoped>
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
  }

  &:last-child {
    border-right: 1px solid #8F8F8F;
  }

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
</style>
