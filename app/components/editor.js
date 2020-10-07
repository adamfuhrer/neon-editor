import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class EditorComponent extends Component {
    @tracked inputText;
    
    colors = ['red', 'green', 'blue']
    
    selectedColor = this.colors[0];
}
