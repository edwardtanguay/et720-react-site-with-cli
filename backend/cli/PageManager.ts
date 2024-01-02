import * as tools from './tools';

export class PageManager {
	private idCode = '';
	private pageIdCode = '';

	constructor(idCode: string) {
		if (!idCode) {
			throw Error('invalid idCode');
		}

		this.idCode = tools.capitalizeFirstLetter(idCode);
		this.pageIdCode = `Page${this.idCode}`;

// const pageFileName = `Page${pageIdCode}.tsx`;
// const pathAndFileName = `src/pages/${pageFileName}`;

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
			pageIdCode: this.pageIdCode
		})
	}

}