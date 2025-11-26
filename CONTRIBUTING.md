# 🚀 Branch Naming Convention

All branches must follow the structure:

```text
 <type>/<scope>/<jira task ID>_<description>
```

### 🏗️ Type

#### 🏠 Main branches (long-lived)

These branches are permanent and part of the main development flow:

- **main**: Production-ready code.
- **develop**: Integration branch for new features and fixes.

#### ⚙️ Feature branches (short-lived)

Branches created for specific tasks or fixes:

- **feature**: New feature development.
- **fix**: Bug fixes.
- **release**: Preparation for a release.
- **hotfix**: Quick fix on production.

### 📦 Scope

The scope indicates the module affected (e.g., `api`, `models`, `components`).

### 📝 Jira Task ID

The ID of the related Jira task (if applicable).

### ✍️ Short Description

A brief description follows the Jira ID, separated by an underscore `_`. Use hyphens `-` to separate words.

# 📝 Commit Message Guidelines

This project follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

A commit message consists of a **header** and optional **body** and **footer**.

```text
<type>(<optional scope>): <description>

[optional body]

[optional footer(s)]
```

**Limit all lines to 200 characters or less.**

### 🔧 Type

Use one of the following types:

- **feat**: A new feature.
- **fix**: A bug fix.
- **docs**: Documentation only changes.
- **style**: Code style changes (formatting, missing semicolons, etc) without affecting code logic.
- **refactor**: Code changes that neither fix a bug nor add a feature.
- **perf**: Code changes that improve performance.
- **test**: Adding or fixing tests.
- **build**: Changes affecting build system or dependencies.
- **ci**: Changes to CI configuration or scripts.
- **chore**: Other changes that do not modify source or test files.

### 📍 Scope

Scope should be a noun describing the affected section of code, wrapped in parentheses, e.g. `(api)`.

Scope is optional but recommended when it adds clarity.

### ✏️ Description

A short summary of the changes:

- Use imperative, present tense: _“fix bug”_, not _“fixed”_ or _“fixes”_.
- Start with a lowercase letter.
- Do not end with a period.

### 📝 Body (optional)

Use the body to explain _what_ and _why_, not _how_. Separate from the header by one blank line.

### 🛠️ Footer (optional)

Used for referencing issues and breaking changes.

- To reference issues or Jira tasks, use `Closes #issue` or `Closes JIRA-123`.
- For breaking changes, start with:

```text
BREAKING CHANGE: <description>
```

### 🔄 Revert Commits

When reverting a commit, start the message with `revert:` followed by the original commit header.

Include a body line like:

```text
This reverts commit <commit-hash>.
```
