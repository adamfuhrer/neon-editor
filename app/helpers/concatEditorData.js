import { helper } from '@ember/component/helper';

function concatEditorData([string]) {
	let wordsCount;
	let charCount;
	let linesCount;

	if (string === undefined || string === '') {
		wordsCount = 0;
		charCount = 0;
		linesCount = 0;
	} else {
		wordsCount = string.trim().split(/\s+/).length;
		charCount = string.length;
		linesCount = string.split(/\r*\n/).length;
	}

	return `w:${wordsCount} / c:${charCount} / l:${linesCount}`;
}

export default helper(concatEditorData);