# Playwright TypeScript QA Automation

Scalable UI and API test automation architecture built with Playwright, TypeScript, and Gherkin.

The project separates functional scenarios, step definitions, business actions, page objects, validations, fixtures, and shared helpers to keep automated tests reusable and maintainable.

## Project status

| Capability                                                | Status      |
| --------------------------------------------------------- | ----------- |
| UI automation with Playwright                             | Implemented |
| BDD scenarios with Gherkin and `playwright-bdd`           | Implemented |
| Page Objects, business actions, fixtures, and validations | Implemented |
| Chromium, Firefox, and WebKit projects                    | Implemented |
| Parallel execution                                        | Implemented |
| Allure reporting and failure artifacts                    | Implemented |
| Environment configuration with `.env`                     | Implemented |
| Prettier and Gherkin formatting                           | Implemented |
| API testing with `APIRequestContext`                      | TODO        |
| API-assisted setup and validation                         | TODO        |
| Test data builders and Faker                              | TODO        |
| Contract validation with Zod or JSON Schema               | TODO        |
| Reusable UI components                                    | TODO        |
| Smoke, sanity, and regression suite commands              | TODO        |
| ESLint rules and lint command                             | TODO        |
| GitHub Actions quality gates                              | TODO        |
| Docker execution                                          | TODO        |

## Tech stack

| Area                | Technology                           | Status      |
| ------------------- | ------------------------------------ | ----------- |
| Language            | TypeScript                           | Implemented |
| Runtime             | Node.js                              | Implemented |
| UI automation       | Playwright                           | Implemented |
| BDD                 | Gherkin / `playwright-bdd`           | Implemented |
| Reporting           | Allure                               | Implemented |
| Formatting          | Prettier / `prettier-plugin-gherkin` | Implemented |
| API testing         | Playwright `APIRequestContext`       | TODO        |
| Test data           | Faker                                | TODO        |
| Contract validation | Zod / JSON Schema                    | TODO        |
| Code quality        | ESLint                               | TODO        |
| CI/CD               | GitHub Actions                       | TODO        |
| Containers          | Docker                               | TODO        |

## Project structure

```text
src/
├── fixtures/                 # Shared Playwright BDD fixtures
├── ui/
│   ├── actions/              # Business and reusable UI actions
│   ├── features/             # Gherkin scenarios
│   ├── helpers/              # UI-specific mappings and helpers
│   ├── pages/                # Page Objects and locators
│   ├── steps/                # Gherkin step definitions
│   └── validations/          # UI assertions
└── utils/                    # Cross-cutting utilities

docs/                         # Project standards and documentation
src/api/                      # TODO: API clients, schemas, and validations
src/builders/                 # TODO: deterministic test data builders
.github/workflows/            # TODO: CI/CD quality gates
Dockerfile                    # TODO: containerized execution
```

## Getting started from a clean clone

### Prerequisites

- Node.js 22 or a compatible active LTS version.
- npm.
- Java 8 or newer to generate and open Allure reports.

### 1. Install project dependencies

Use `npm ci` when cloning the repository because the lockfile is versioned:

```bash
npm ci
```

Use `npm install` only when dependencies need to be added or updated.

### 2. Install Playwright browsers

```bash
npx playwright install
```

On a Linux CI agent that also needs operating-system dependencies:

```bash
npx playwright install --with-deps
```

### 3. Create the local environment file

PowerShell:

```powershell
Copy-Item .env.example .env
```

macOS or Linux:

```bash
cp .env.example .env
```

Update the values in `.env` when the target environment or credentials are different.

### 4. Validate the installation

```bash
npm run typecheck
npm run bddgen
npm run format:check
```

### 5. Run the tests

Run the complete cross-browser suite:

```bash
npm test
```

Run an individual browser project:

```bash
npm run test:chromium
npm run test:firefox
npm run test:webkit
```

Other execution modes:

```bash
npm run test:headed
npm run test:debug
```

## Reports

Generate an Allure report after running tests:

```bash
npm run allure:generate
```

Open the generated report:

```bash
npm run allure:open
```

Generate and open it in one command:

```bash
npm run report
```

## Formatting

Check formatting without modifying files:

```bash
npm run format:check
```

Apply the configured formatting rules:

```bash
npm run format
```

## Standards

- [Gherkin wording and verb-tense standard](docs/gherkin-verbal-tense-standard.md)

Additional architecture, TypeScript, Playwright, selector, assertion, and test-data standards remain TODO under `docs/standards/`.

## Execution model

```text
Test scenario
      ↓
Step definition
      ↓
Business action
      ↓
Page Object / application interface
      ↓
Validation
      ↓
Allure report
```

The architecture prioritizes test independence, reusable abstractions, deterministic execution, stability, and maintainability.
