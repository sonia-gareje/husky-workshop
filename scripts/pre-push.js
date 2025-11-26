/**
 * pre-push.js
 *
 * This script is executed by the Husky `pre-push` hook.
 *
 * The purpose of this script is to prevent code from being pushed if
 * required validation steps fail. This improves code quality and prevents
 * broken builds or failing tests from reaching the remote repository.
 *
 * In this example we run:
 *  - `npm test`  → to ensure all tests pass
 *  - `npm run build` → to ensure the project can be successfully built
 *
 * If any of those commands exit with a non-zero status, the push is blocked.
 */

import { execSync } from 'child_process';

/**
 * Executes a shell command synchronously and inherits stdio so that output
 * is printed directly to the terminal.
 *
 * @param {string} cmd - The command to execute.
 */
function run(cmd) {
  execSync(cmd, { stdio: 'inherit' });
}

try {
  run('npm test');
  run('npm run build');
} catch (err) {
  process.exit(1);
}
