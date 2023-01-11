import * as core from '@actions/core';

import { writeDotNpmrc } from './writeFile';

const run = async (): Promise<void> => {
	try {
		const workingDirectory = core.getInput('working-directory');
		const npmrc = core.getInput('dot-npmrc');

		core.debug(`Writing .npmrc to ${workingDirectory}`); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true

		await writeDotNpmrc(npmrc, workingDirectory);

		core.debug(`Wrote file ${workingDirectory}/.npmrc successfully!`);
	} catch (error) {
		if (error instanceof Error) {
			core.setFailed(error.message);
		} else {
			core.setFailed(`Unknown error occurred: ${error}`);
		}
	}
};

run();
