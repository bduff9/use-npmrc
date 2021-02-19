import fs from 'fs';

export const writeDotNpmrc = async (
	npmrc: string,
	workingDirectory: string,
): Promise<void> =>
	new Promise((resolve, reject) => {
		fs.writeFile(`${workingDirectory}/.npmrc`, npmrc, err => {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		});
	});
