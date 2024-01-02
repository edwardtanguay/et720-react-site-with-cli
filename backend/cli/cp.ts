import * as tools from './tools';

const pageIdCode = tools.getArgument(0);
const option = tools.getArgument(1);

const pageFileName = `Page${pageIdCode}.tsx`;

console.log(`Creating ${pageFileName} with option ${option}...`);

/*
process.argv 
---------------------------
0: ...node.exe
1: ...cp.ts
2: Reports
3: flat

*/