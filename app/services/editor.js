import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class EditorService extends Service {
	@tracked text = '';
	colors = ['pink', 'green', 'blue'];

	setText(text) {
		this.text = text;
		localStorage.setItem("text", text);
	}

	clearText() {
		this.text = '';
		localStorage.setItem("text", "");
	}
}
