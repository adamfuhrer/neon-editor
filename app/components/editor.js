import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class EditorComponent extends Component {
    @service('editor') editor;

    @action setInputValue(event) {
        this.editor.setText(event.target.value)
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
