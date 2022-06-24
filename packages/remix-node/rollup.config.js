const { getBuildInfo, index } = require("../../rollup.utils");
const { name: packageName } = require("./package.json");

// Re-export everything from this package that is available in `remix`
const magicExports = {
  values: {
    "@remix-run/node": [
      "createCookie",
      "createCookieSessionStorage",
      "createFileSessionStorage",
      "createMemorySessionStorage",
      "createSessionStorage",
      "unstable_createFileUploadHandler",
      "unstable_createMemoryUploadHandler",
      "unstable_parseMultipartFormData",
    ],
  },
  types: {
    "@remix-run/node": ["UploadHandler", "UploadHandlerPart"],
  },
};

/** @returns {import("rollup").RollupOptions[]} */
module.exports = function rollup() {
  let buildInfo = getBuildInfo(packageName);
  return [index({ format: "cjs", magicExports, ...buildInfo })];
};
