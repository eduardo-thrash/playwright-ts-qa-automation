# Code Quality Thresholds

This document defines the maximum tolerated limits for the project's code quality rules.

The goal is to use them as an operational reference for static analysis, technical review, and quality configuration.

## Maximum Tolerated Thresholds

| Rule                               | Maximum tolerated |
| ---------------------------------- | ----------------: |
| Parameters per function            |                 5 |
| Cognitive complexity               |                25 |
| Cyclomatic complexity              |                15 |
| Lines per function                 |               100 |
| Lines per class                    |               700 |
| Lines per file                     |              1000 |
| Nesting depth                      |                 5 |
| Consecutive `if/else` blocks       |                 6 |
| Code duplication                   |            `<10%` |
| Functions per file                 |                30 |
| Unused imports                     |                 0 |
| Unused variables                   |                 0 |
| Use of `any`                       |         temporary |
| `console.log`                      |      not in merge |
| Magic numbers/strings              |     if documented |
| Empty `try/catch`                  |                 0 |
| Methods with many responsibilities |   not in new code |
| Very long conditions               | required refactor |

## Interpretation Rules

- These values represent the highest tolerated limit, not the ideal target.
- If a new change exceeds one of these limits, it must be refactored before merge.
- If a legacy case already exceeds the limit, it must not get worse and should be identified for future refactoring.
- When a rule is not purely numeric, apply conservative technical judgment in review.

## Notes

### Use of `any`

- In TypeScript, `any` is tolerated only as a temporary solution.
- It must be justified and limited.
- It must not become a repeated pattern.

### `console.log`

- It can exist during local debugging.
- It must not reach merge.
- For allowed logging, review `docs/standards/console-and-throw-guide.md`.

### Magic Numbers and Magic Strings

- They are tolerated only if documented or if the intent is obvious and local.
- If a value is reused or affects behavior, it must be extracted to a constant, enum, or data structure.

### Methods with Many Responsibilities

- They are not accepted in new code.
- In legacy code, any change should move them toward separation by responsibility.

### Very Long Conditions

- If the condition loses readability, extract it into a named function or an intermediate variable.
- If it keeps growing, refactoring is required.
