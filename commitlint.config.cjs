
/**
 * This setup extends the base rules from Conventional Commits
 *
 * @see {@link https://www.conventionalcommits.org/}
 * @see {@link https://github.com/conventional-changelog/commitlint}
 */

/**
 * Commitlint configuration object.
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    /**
     * Set the maximum header length to 200 characters.
     */
    'header-max-length': [2, 'always', 200],
    /**
     * Allow unlimited line length in the body of the commit message.
     * Format: [level, applicable, value]
     */
    'body-max-line-length': [2, 'always', Infinity],    
  },
};