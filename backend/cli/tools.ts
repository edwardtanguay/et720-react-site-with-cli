import fs from 'fs';

export const getArgument = (index = 0) => {
	return process.argv[index + 2];
}

export const createFile = (pathAndFileName: string, content: string) => {
	fs.writeFileSync(pathAndFileName, content.trim());
}