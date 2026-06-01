import eslintPluginAstro from "eslint-plugin-astro";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default [
  // Astro: usa su propio parser interno, no sobreescribir
  ...eslintPluginAstro.configs.recommended,

  // TypeScript solo para archivos .ts/.tsx (no .astro)
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },

  // Reglas generales para JS/TS y frontmatter de .astro
  {
    files: ["**/*.{js,ts,astro}"],
    rules: {
      "prefer-const": "error",
      "no-var": "error",
      "no-console": "warn",
    },
  },

  // Ignorar carpetas generadas
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**"],
  },
];
