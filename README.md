# TypeScript + Bun Template

A minimal, robust TypeScript template using Bun with modern best practices.

## Features

- TypeScript with strict mode enabled
- Bun runtime and package manager
- ESLint with TypeScript support
- Prettier for code formatting
- Built-in testing with Bun
- Pre-commit hooks
- Task automation with Taskfile

## Prerequisites

- [Bun](https://bun.sh) >= 1.0.0
- [Task](https://taskfile.dev) (optional, for task automation)
- [pre-commit](https://pre-commit.com) (optional, for git hooks)

## Getting Started

### Install dependencies

```bash
bun install
```

### Development

Run in development mode with hot reload:

```bash
bun run dev
# or
task dev
```

### Build

Build the project:

```bash
bun run build
# or
task build
```

### Run

Run the built project:

```bash
bun run start
# or
task start
```

## Testing

Run tests:

```bash
bun test
# or
task test
```

Run tests in watch mode:

```bash
bun test --watch
# or
task test:watch
```

## Code Quality

### Linting

```bash
bun run lint
# or
task lint
```

Auto-fix issues:

```bash
bun run lint:fix
# or
task lint:fix
```

### Formatting

Format code:

```bash
bun run format
# or
task format
```

Check formatting:

```bash
bun run format:check
# or
task format:check
```

### Type Checking

```bash
bun run typecheck
# or
task typecheck
```

### Run All Checks

```bash
task check
```

## Pre-commit Hooks

Install pre-commit hooks:

```bash
pre-commit install
# or
task setup
```

The hooks will automatically run:
- Prettier formatting check
- ESLint
- TypeScript type checking
- Tests

## Project Structure

```
.
├── src/              # Source files
│   └── index.ts      # Entry point
├── tests/            # Test files
│   └── index.test.ts # Example tests
├── dist/             # Build output (generated)
├── .gitignore        # Git ignore rules
├── .prettierrc       # Prettier configuration
├── eslint.config.js  # ESLint configuration
├── tsconfig.json     # TypeScript configuration
├── package.json      # Project dependencies and scripts
├── Taskfile.yml      # Task automation
└── .pre-commit-config.yaml  # Pre-commit hooks
```

## Scripts

- `bun run dev` - Run in development mode with watch
- `bun run build` - Build the project
- `bun run start` - Run the built project
- `bun test` - Run tests
- `bun test --watch` - Run tests in watch mode
- `bun run lint` - Run ESLint
- `bun run lint:fix` - Fix ESLint issues
- `bun run format` - Format code with Prettier
- `bun run format:check` - Check code formatting
- `bun run typecheck` - Run TypeScript type checking

## Configuration

### TypeScript

The `tsconfig.json` is configured with:
- Strict mode enabled
- Modern ESNext target
- Bundler module resolution
- Additional safety checks (noUnusedLocals, noUncheckedIndexedAccess, etc.)

### ESLint

Uses the flat config format with TypeScript support and recommended rules.

### Prettier

Configured with sensible defaults for consistent code formatting.

## License

MIT