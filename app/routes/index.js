import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
	@service('editor') editor;

	constructor() {
		super(...arguments);
		const text = localStorage.getItem("text");
		if (text) {
			this.editor.setText(text)
		}
	}

	model() {
		let editor = this.editor;

		return {
			get text() {
				return editor.text;
			}
		}
	}
}