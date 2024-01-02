import * as tools from './tools';

export class PageManager {
	private idCode = '';
	private pageIdCode = '';
	private pageFileName = '';
	private pagePathAndFileName = '';

	constructor(idCode: string) {
		if (!idCode) {
			throw Error('invalid idCode');
		}

		this.idCode = tools.capitalizeFirstLetter(idCode);
		this.pageIdCode = `Page${this.idCode}`;
		this.pageFileName = `${this.pageIdCode}.tsx`;
		this.pagePathAndFileName = `src/pages/${this.pageFileName}`;

	}

// 	public createPage() {
// 		tools.createFile(pathAndFileName, `
// export const Page${pageIdCode} = () => {
// 	return (
// 		<p>This is the ${pageIdCode} page.</p>
// 	)
// }
// `);
// 	}

	debug() {
		// console.log(`idCode = ${this.idCode}`);
		// console.log(`pageIdCode = ${this.pageIdCode}`);
		console.table({
			idCode: this.idCode,
			pageIdCode: this.pageIdCode,
			pageFileName: this.pageFileName,
			pagePathAndFileName: this.pagePathAndFileName
		})
	}

}