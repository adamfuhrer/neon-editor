import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
	@service('editor') editor;

	model() {
		let editor = this.editor;

		return {
			get text() {
				return editor.text;
			}
		}
	}
}