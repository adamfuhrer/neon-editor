import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class EditorService extends Service {
	colors = ['pink', 'green', 'blue', 'orange'];
	@tracked text = '';
	@tracked selectedColor = this.colors[0];
	@tracked isFullScreen;

	setText(text) {
		this.text = text;
		localStorage.setItem("text", text);
	}

	clearText() {
		this.text = '';
		localStorage.setItem("text", "");
	}

	setColor(color) {
		this.selectedColor = color;
		localStorage.setItem("color", color);
	}

	toggleFullScreen() {
		this.isFullScreen = !this.isFullScreen;
		localStorage.setItem("isFullScreen", this.isFullScreen);
	}
}
