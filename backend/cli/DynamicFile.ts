import * as tools from './tools';

export class DynamicFile {
	private pathAndFileName = '';
	private content = '';
	private lines: string[] = [];

	constructor(pathAndFileName: string) {
		this.pathAndFileName = pathAndFileName;
		this.content = tools.readContentOfFile(this.pathAndFileName);
		this.lines = tools.convertStringBlockToLines(this.content);
	}

	public debug() {
		console.table({
			pathAndFileName: this.pathAndFileName,
			numberOfLines: this.lines.length
		});
		console.log(`
CONTENT OF FILE:
----------------------------------------------------
${this.content.trim()}
----------------------------------------------------
LINES OF FILE:
----------------------------------------------------
${this.lines.map((m, index) => index + ': ' + m + '\n').join('')}
----------------------------------------------------
`.trim());
	}
}