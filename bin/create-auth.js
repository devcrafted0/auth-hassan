#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "../auth");
const target = path.join(process.cwd(), "auth");

if (fs.existsSync(target)) {
  console.error("auth folder already exists");
  process.exit(1);
}

fs.cpSync(source, target, { recursive: true });
console.log("✅ Auth folder added to project root");
