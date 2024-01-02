import { PageManager } from './PageManager';
import * as tools from './tools';

const pageIdCode = tools.getArgument(0);

try {
	const pageManager = new PageManager(pageIdCode)
	pageManager.createPage();
}
catch (e) {
	console.log(`
COMMAND: cp (create page)
Syntax: npm run cp <pageIdCode>
Example: npm run cp Reports	
`.trim());
}
