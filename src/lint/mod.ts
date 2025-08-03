/**
 * Lint plugin with new rules for Deno.
 *
 * @example
 * ```json
 * {
 *   "lint": {
 *     "plugins": ["@csvn/jsr-test/lint"]
 *   }
 * }
 * ```
 *
 * @module
 */

/** `csvn` linting plugin (for testing) */
const plugin: Deno.lint.Plugin = {
  name: "csvn",
  rules: {
    test: {
      create(ctx) {
        const bannedVarName = "test";
        const selector =
          `VariableDeclaration > VariableDeclarator > Identifier[name="${bannedVarName}"]`;

        return {
          [selector](node: Deno.lint.Identifier) {
            ctx.report({
              message: `Do not use '${bannedVarName}' as a variable name.`,
              node,
              range: node.range,
            });
          },
        };
      },
    }
  },
};

export default plugin;
