import { helper } from '@ember/component/helper';

function chars([string]) {
	let charCount;

	if (string === undefined) {
		charCount = 0;
	} else {
		charCount = string.length;
	}

	return `characters: ${charCount}`;
}

export default helper(chars);