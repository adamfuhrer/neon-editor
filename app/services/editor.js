import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class EditorService extends Service {
	@tracked text = 'Some placeholder text';
	colors = ['red', 'green', 'blue'];

	setText(text) {
		this.text = text;
	}

	getText() {
		return this.text;
	}

	clearText() {
		this.text = '';
	}
}
