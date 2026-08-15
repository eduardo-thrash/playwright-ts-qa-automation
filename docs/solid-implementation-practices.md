# SOLID Implementation Practices

Short design and maintainability guide for the project.

It does not redefine layers. For folder structure and responsibilities, see:

- `docs/standards/api-data-layers-guide.md`

## Objective

- Keep flows readable
- Reduce fragility
- Avoid mixing responsibilities

## Base Rules

- `step-definitions` orchestrate; they do not hold heavy logic
- `actions` interact
- `helpers` read, resolve, or transform; they do not assert
- `validations` verify; they do not navigate or fill forms
- `ctx` stays in `step-definitions` and `fixtures`
- Lower layers receive explicit parameters, not `ctx`

## Applied SOLID

### S - Single Responsibility

- A file should have one reason to change
- Bad signal: the same method clicks, parses, and asserts

### O - Open/Closed

- Extend without breaking stable flows
- Prefer new reusable pieces over growing conditionals

### L - Liskov

- If two classes are used through the same contract, they must be interchangeable
- If one validation expects `.page`, any class passed in must provide it

### I - Interface Segregation

- Avoid giant contracts
- Split helpers and capabilities by domain

### D - Dependency Inversion

- Orchestration should not build deep chains with `new`
- `new` in steps is acceptable when it is short, explicit, and not repeated
- It becomes a problem when coupling, duplication, or noise grows

## Anti-Patterns

- long steps with direct Playwright usage
- asserts outside `validations`
- helpers with `expect`
- validations with `click` or `fill`
- passing `ctx` to lower layers
- duplicating locators
- god object style classes
- `waitForTimeout` instead of observable conditions

## Quick Checklist

- Is the responsibility in the correct layer?
- Are asserts only in `validations`?
- Is grouped data placed in a DTO when needed?
- Is existing UI reused before duplicating it?
- Are dependencies explicit?

## References

- `docs/standards/code-style-guide.md`
- `docs/standards/ui-naming-and-structure-guide.md`
- `docs/standards/locator-naming-conventions.md`
