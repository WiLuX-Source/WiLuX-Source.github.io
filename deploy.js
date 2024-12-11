import fs from "node:fs/promises";
const srcDir = "src/";
const distDir = "dist/";
const fileList = [];
const dirPromise = fs.readdir(srcDir);
const distPromise = fs.mkdir(distDir);

const files = await dirPromise;
for (const file of files) {
  if (file !== "input.css") {
    fileList.push(file);
  }
}
try {
  await distPromise;
} catch (err) {}
for (const file of fileList) {
  await fs.copyFile(srcDir + file, distDir + file);
}
