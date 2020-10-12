import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EditorComponent extends Component {
    @service('editor') editor;

    @action setInputValue(event) {
        if (event.key && event.key.toLowerCase() === 'tab') {
            // insert tab character into textarea and prevent default
            this.editor.setText(event.target.value + `\t`)
            event.preventDefault();
        } else {
            this.editor.setText(event.target.value)
        }
    }

    @action onClearClicked() {
        this.editor.clearText();
    }

    @action setSelectedColor(color) {
        this.editor.setColor(color);
    }

    @action toggleFullScreen() {
        this.editor.toggleFullScreen();
    }
}
