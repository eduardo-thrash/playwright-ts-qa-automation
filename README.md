# playwright-ts-qa-automation

Scalable Web and API test automation architecture built with Playwright and TypeScript, featuring BDD, reusable fixtures, test data builders, parallel execution, Allure reporting and CI/CD integration.

# Playwright TypeScript QA Automation

Scalable test automation architecture for Web and API testing using Playwright and TypeScript.

The project provides a maintainable foundation for automated testing with clear separation between test scenarios, business actions, application interfaces, test data, validations, and execution infrastructure.

## Technical Objectives

- Web and API test automation
- Scalable test architecture
- Reusable Page Objects and components
- Business-level action abstractions
- BDD scenarios with Gherkin
- API-assisted test setup and validation
- Test data builders
- Multi-environment configuration
- Cross-browser execution
- Parallel execution
- Smoke, Sanity and Regression suites
- Automated reporting and diagnostics
- CI/CD quality gates

## Tech Stack

| Area         | Technology                   |
| ------------ | ---------------------------- |
| Language     | TypeScript                   |
| Runtime      | Node.js                      |
| Automation   | Playwright                   |
| API Testing  | Playwright APIRequestContext |
| BDD          | Cucumber / playwright-bdd    |
| Test Data    | Faker                        |
| Reporting    | Allure                       |
| Validation   | Zod / JSON Schema            |
| CI/CD        | GitHub Actions               |
| Containers   | Docker                       |
| Code Quality | ESLint / Prettier            |

## Architecture

```text
src/
├── ui/
│   ├── features/
│   ├── steps/
│   ├── pages/
│   ├── components/
│   ├── actions/
│   └── validations/
├── api/
│   ├── clients/
│   ├── builders/
│   ├── schemas/
│   └── validations/
├── fixtures/
├── builders/
├── helpers/
├── utils/
└── config/

docs/
.github/workflows/
```

## Execution Model

```text
Test Scenario
      ↓
Business Actions
      ↓
UI / API Layer
      ↓
Application
      ↓
Validation
      ↓
Allure Report
```

The architecture prioritizes test independence, reusable abstractions, deterministic test data, execution stability and maintainability.
