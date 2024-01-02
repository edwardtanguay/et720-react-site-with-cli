import { DynamicFile } from './DynamicFile';
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

	public createPage() {
		this.createPageFile();
		this.addBlockToNavFile();
	}

	private createPageFile() {
		tools.createFile(this.pagePathAndFileName, `
export const Page${this.pageIdCode} = () => {
	return (
		<p>This is the ${this.pageIdCode} page.</p>
	)
}
`);
	}

	private addBlockToNavFile() {
		const dynamicFile = new DynamicFile('src/components/Nav.tsx');
		dynamicFile.addStringBlockBeforeMarker('</ul>', `\t\t\t<li><NavLink to="/${this.idCode}">${this.idCode}</NavLink></li>`);
		dynamicFile.save();
	}



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