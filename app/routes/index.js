import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
	@service('editor') editor;

	constructor() {
		super(...arguments);
		const text = localStorage.getItem("text");
		const color = localStorage.getItem("color");
		const isFullScreen = JSON.parse(localStorage.getItem("isFullScreen"));

		if (text) {
			this.editor.setText(text)
		}

		if (color) {
			this.editor.setColor(color)
		}

		if (isFullScreen !== null) {
			this.editor.isFullScreen = isFullScreen;
		}
	}

	model() {
		return this.editor;
	}
}