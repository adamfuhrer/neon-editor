import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EditorComponent extends Component {
    @service('editor') editor;

    @tracked selectedColor = this.editor.colors[0];

    @action setInputValue(event) {
        this.editor.setText(event.target.value)
    }

    @action onClearClicked() {
        this.editor.clearText();
    }

    @action setSelectedColor(color) {
        this.selectedColor = color;
    }
}
