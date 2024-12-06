import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: { 
      globals: { ...globals.browser, ...globals.node } 
    },
  },
  pluginJs.configs.recommended,
  {
    settings: {
      'import/resolver': {
        alias: {
          map: [
            ['@src', './src'],
            ['@components', './src/components'],
            ['@utils', './src/utils'],
          ],
          extensions: ['.js', '.jsx'],
        },
      },
    },
  },
];
