import { helper } from '@ember/component/helper';

function lines([string]) {
	let linesCount;

	if (string === undefined || string === '') {
		linesCount = 0;
	} else {
		linesCount = string.split(/\r*\n/).length;
	}

	return `lines: ${linesCount}`;
}

export default helper(lines);