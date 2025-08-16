import jsdoc from "eslint-plugin-jsdoc";
import googleAppsScript from "eslint-plugin-googleappsscript";
import { defineConfig } from "eslint/config";

export default defineConfig([
  jsdoc.configs["flat/recommended"],
  {
    files: ["**/*.js", "**/*.gs"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "script",
      globals: googleAppsScript.environments.googleappsscript.globals,
    },
  },
]);
