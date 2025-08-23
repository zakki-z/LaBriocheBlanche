import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    rules: {
      // Allow unused variables as warnings instead of errors during development
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "caughtErrorsIgnorePattern": "^_"
        }
      ],
      // Disable explicit any warnings for this project - can be re-enabled later
      "@typescript-eslint/no-explicit-any": "off",
      // Allow img elements with warning instead of error (since we're migrating to Image)
      "@next/next/no-img-element": "warn",
      // Console rules - allow in development, warn in production
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      // React hooks rules
      "react-hooks/exhaustive-deps": "warn",
      // Prefer const over let when possible
      "prefer-const": "error",
      // React specific rules
      "react/no-unescaped-entities": ["error", {
        "forbid": ["&", "<", ">", '"', "{", "}"]  // Allow apostrophes
      }],
      // No unused imports
      "no-unused-imports": "off" // We'll handle this with TypeScript
    },
  },
];

export default eslintConfig;
