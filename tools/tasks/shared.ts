import { cleanUp, createDirs } from "../util/util";
import buildConfig from "../buildConfig";

export async function setup(): Promise<void> {
	await cleanUp(buildConfig.buildDestinationDirectory);
	await createDirs(buildConfig.buildDestinationDirectory);
}