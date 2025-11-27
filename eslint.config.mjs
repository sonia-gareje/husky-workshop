export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        console: "readonly" ,
        process: "readonly"
      }
    },
    rules: {
      "no-console": "error", // console.log
      "no-constant-condition": "warn", // dead code
      "no-undef": "error", // undeclared variables
      "no-unused-vars": ["warn", { "vars": "all" }], // unused vars
      "no-empty": ["error", { "allowEmptyCatch": false }],
    }
  }
];












import { ESLintUtils } from "@typescript-eslint/utils";

// const noSecretsRule = ESLintUtils.RuleCreator(() => "")({
//   name: "no-secrets",
//   meta: {
//     type: "problem",
//     docs: { description: "Detect secrets in code" },
//     schema: [],
//     messages: { secretFound: "Possible secret detected: {{value}}" }
//   },
//   defaultOptions: [],
//   create(context) {
//     return {
//       Literal(node) {
//         if (typeof node.value === "string" && /SECRET_KEY|PASSWORD|TOKEN/.test(node.value)) {
//           context.report({ node, messageId: "secretFound", data: { value: node.value } });
//         }
//       }
//     };
//   }
// });
