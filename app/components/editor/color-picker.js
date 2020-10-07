import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class EditorColorPickerComponent extends Component {
    @tracked colors = ['red', 'green', 'blue'];


    // @action onColorClick(color) {
    //     if (color !== this.selectedColor) {
    //         this.selectedColor = color;
    //         console.log(color)

    //     }
    // }
}
