import * as tools from './tools';

const pageIdCode = tools.getArgument(0);
// const option = tools.getArgument(1);

const pageFileName = `Page${pageIdCode}.tsx`;
const pathAndFileName = `src/pages/${pageFileName}`;

console.log(`Creating ${pageFileName}...`);

tools.createFile(pathAndFileName, `
export const Page${pageIdCode} = () => {
	return (
		<p>This is the ${pageIdCode.toLowerCase()} page.</p>
	)
}
`);

/*
process.argv 
---------------------------
0: ...node.exe
1: ...cp.ts
2: Reports
3: flat

*/