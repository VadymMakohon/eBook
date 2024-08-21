import Vue from 'vue';

export const store = {
  state: {
    numbers: [1, 2, 3]
  },
  pushNewNumber(newNumberString) {
    this.state.numbers.push(Number(newNumberString));
  }
}
