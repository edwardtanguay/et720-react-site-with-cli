import * as tools from './tools';

export class DynamicFile {
	private pathAndFileName = '';
	private content = '';

	constructor(pathAndFileName: string) {
		this.pathAndFileName = pathAndFileName;
		this.content = tools.readContentOfFile(this.pathAndFileName);
	}

	public debug() {
		console.table({
			pathAndFileName: this.pathAndFileName
		});
		console.log(`
CONTENT OF FILE:
----------------------------------------------------
${this.content.trim()}
----------------------------------------------------
`.trim());
	}
}