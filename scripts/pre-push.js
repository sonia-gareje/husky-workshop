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
import chalk from 'chalk';
import figlet from 'figlet';

/**
 * Executes a shell command synchronously and inherits stdio so that output
 * is printed directly to the terminal.
 *
 * @param {string} cmd - The command to execute.
 */
function run(cmd) {
  execSync(cmd, { stdio: 'inherit' });
}

function fetchJoke() {
    const res = execSync(
    'curl -s "https://v2.jokeapi.dev/joke/Programming?lang=es"'
  ).toString();

  const json = JSON.parse(res);

  if (json.type === 'twopart') {
    return `${json.setup} — ${json.delivery}`;
  }
  return json.joke;
}

try {
  run('npm test');
  run('npm run build');

  // eslint-disable-next-line no-console
  console.log(
    chalk.green(
      figlet.textSync('Ya era hora!!!', { font: 'Standard' })
    )
  );

} catch {
  let user = execSync('git config user.name').toString().trim();

  const husky =
`   /^-----^\\
  V  ಠ   ಠ  V
   |   ▾   |
   |  ===  |
  /         \\
 |  ⛔  STOP  |
  \\  || ||  /
   \\_oo__oo_/###o
`;

  // eslint-disable-next-line no-console
  console.log(chalk.red(husky)); 

  const name = user.split('-')[0];
  // eslint-disable-next-line no-console
  console.log(
    chalk.red(
      figlet.textSync(`${name} lo has roto todo!!!`, { font: 'Standard' })
    )
  );

  // eslint-disable-next-line no-console
  console.log('Te dejo un chiste para que te repongas del disgusto...')

  const joke = fetchJoke();
  const line = '─'.repeat(joke.length + 2)

  // eslint-disable-next-line no-console
  console.log(chalk.yellow(`┌${line}┐`));
  // eslint-disable-next-line no-console
  console.log(chalk.yellow(`│ ${joke} │`));
  // eslint-disable-next-line no-console
  console.log(chalk.yellow(`└${line}┘`));

  process.exit(1);
}
