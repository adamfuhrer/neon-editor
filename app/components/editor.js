import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class EditorComponent extends Component {
	@service('editor') editor;
	@tracked isTransitioningSize = false;
	transitionDuration = 300;

	@action onKeyUp(event) {
		this.editor.setText(event.target.value);
	}

	@action onKeyDown(event) {
		if (event.key && event.key.toLowerCase() === 'tab') {
			// insert tab character into textarea and prevent default behaviour
			this.editor.setText(event.target.value + '\t');
			event.preventDefault();
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

		// Only animate the transiton (top, bottom, left, right properties) when toggling. This avoids animating those properties when resizing browser
		// TODO: figure out more graceful way to do this 
		this.isTransitioningSize = true;
		setTimeout(() => {
			this.isTransitioningSize = false;
		}, this.transitionDuration);
	}
}
