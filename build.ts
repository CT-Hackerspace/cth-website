import * as fs from "node:fs/promises";
import * as path from "node:path";
import { $ } from "bun";

process.chdir("/home/tenner/projects/cth-website");

await $`git pull origin master`;
await $`bun install`
await $`bunx astro build`;

const allFilesGlob = new Bun.Glob("./**/*");
const builtFolder = "./dist";
const siteFolder = "/var/www/html";

const built = allFilesGlob.scan({
  cwd: builtFolder,
});
const site = allFilesGlob.scan({
  cwd: siteFolder,
});

const builtPromise = (async () => {
  const builtSet = new Set<string>();
  for await (const source of built) {
    builtSet.add(source);
  }
  return builtSet;
})();

const sitePromise = (async () => {
  const siteSet = new Set<string>();
  for await (const existing of site) {
    siteSet.add(existing);
  }
  return siteSet;
})();

const [builtSet, siteSet] = await Promise.all([builtPromise, sitePromise]);

for (const built of builtSet) {
  const targetSiteLocation = path.join(siteFolder, built);
  const targetFile = Bun.file(targetSiteLocation);
  const sourceFileLocation = path.join(builtFolder, built);
  const sourceFile = Bun.file(sourceFileLocation);
  await Bun.write(targetFile, sourceFile);
  console.log(`Wrote ${sourceFileLocation} to ${targetSiteLocation}`);
}

for (const existing of siteSet) {
  if (!builtSet.has(existing)) {
    const targetSiteLocation = path.join(siteFolder, existing);
    await fs.rm(targetSiteLocation);
    console.log(`Removed ${targetSiteLocation}`);
  }
}
