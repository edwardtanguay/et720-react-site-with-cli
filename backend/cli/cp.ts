import { PageManager } from './PageManager';
import * as tools from './tools';

const pageIdCode = tools.getArgument(0);

try {
	const pageManager = new PageManager(pageIdCode)
	pageManager.debug();
	// pageManager.createPage();
}
catch (e) {
	console.log(`
COMMAND: cp (create page)
Syntax: npm run cp <pageIdCode>
Example: npm run cp Reports	
`.trim());
}


// // const option = tools.getArgument(1);

// console.log(`Creating ${pageFileName}...`);


/*
process.argv 
---------------------------
0: ...node.exe
1: ...cp.ts
2: Reports
3: flat

*/