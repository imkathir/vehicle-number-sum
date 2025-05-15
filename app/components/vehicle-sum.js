import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class VehicleSumComponent extends Component {
  @tracked input = '';
  @tracked result = null;

  getCharValue(char) {
    const mapping = {
      1: ['A', 'I', 'J', 'Q', 'Y'],
      2: ['B', 'K', 'R'],
      3: ['C', 'G', 'L', 'S'],
      4: ['D', 'M', 'T'],
      5: ['E', 'H', 'N', 'X'],
      6: ['U', 'V', 'W'],
      7: ['O', 'Z'],
      8: ['F', 'P']
    };

    char = char.toUpperCase();
    if (/\d/.test(char)) return parseInt(char, 10);

    for (let [value, letters] of Object.entries(mapping)) {
      if (letters.includes(char)) return parseInt(value, 10);
    }
    return 0;
  }

  @action
  calculateSum() {
    const sum = this.input
      .toUpperCase()
      .split('')
      .reduce((total, ch) => total + this.getCharValue(ch), 0);
    this.result = sum;
  }

  @action
  updateInput(event) {
    this.input = event.target.value;
  }
}
