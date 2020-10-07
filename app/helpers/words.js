import { helper } from '@ember/component/helper';

function words([string]) {
	let wordsCount;

	if (string === undefined || string === '') {
		wordsCount = 0;
	} else {
		wordsCount = string.trim().split(/\s+/).length;
	}

	return `words: ${wordsCount}`;
}

export default helper(words);