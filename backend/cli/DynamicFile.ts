export class DynamicFile {
	private pathAndFileName = '';

	constructor(pathAndFileName: string) {
		this.pathAndFileName = pathAndFileName;
	}

	debug() {
		console.table({
			pathAndFileName: this.pathAndFileName
		})
	}
}