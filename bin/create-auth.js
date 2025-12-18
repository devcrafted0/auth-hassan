#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const source = path.resolve(__dirname, "../auth");
const target = path.resolve(process.cwd(), "auth");

const force = process.argv.includes("--force");

if (fs.existsSync(target) && !force) {
  console.error("auth folder already exists. Use --force to overwrite.");
  process.exit(1);
}

fs.cpSync(source, target, { recursive: true, force });
console.log("✅ Auth folder added to project root");
