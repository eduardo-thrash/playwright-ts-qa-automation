# Function and Method Naming Standard

This document defines the naming rules for TypeScript functions and methods in the project.

## General rules

- Use `lowerCamelCase` for functions, methods, parameters, and properties.
- Start function and method names with a verb that communicates their observable purpose.
- Prefer functional intent over framework or implementation details.
- Do not add an `Async` suffix. The return type already communicates asynchronous behavior.
- Avoid generic names such as `execute`, `perform`, `process`, `handle`, `runAction`, or `doAction`.
- Keep each method focused on one responsibility.

## Common UI actions

Common action methods describe one reusable UI interaction.

Use the following pattern:

```text
<interaction verb><optional preposition><target or condition>
```

Examples:

```ts
clickOn(locator);
doubleClickOn(locator);
rightClickOn(locator);
fillIn(locator, value);
selectOption(locator, option);
check(locator);
uncheck(locator);
hoverOver(locator);
dragTo(source, target);
pressKey(key);
navigateTo(path);
reloadPage();
scrollTo(locator);
uploadFile(locator, filePath);
waitForPath(path);
waitForVisibility(locator);
```

Prepositions communicate the relationship between the action and its argument:

- `clickOn`: interact with a target.
- `navigateTo`: move to a destination.
- `waitFor`: wait for an observable condition.
- `dragTo`: move a source to a destination.
- `fillIn`: enter content into a field.

## Functional actions

Functional action methods describe user or business intent and may orchestrate common actions.

Prefer:

```ts
openHomePage();
openOption(option);
authenticate(credentials);
submitPasswordRecovery(email);
uploadDocument(file);
```

Avoid names tied to implementation details:

```ts
clickLoginButton();
fillUsernameInput();
execute();
performAction();
```

## Validations

Methods that contain assertions and return `Promise<void>` must begin with `expect`.

Examples:

```ts
expectPageToBeDisplayed();
expectPathToBe(path);
expectCheckboxToBeChecked();
expectMessageToBeVisible();
expectDownloadToComplete();
```

Do not use predicate-style names for assertion methods:

```ts
// Incorrect: this suggests a boolean return value.
pageIsDisplayed();
```

Reserve `is`, `has`, and `can` for queries that return a boolean:

```ts
isModalVisible(): Promise<boolean>;
hasExpectedPath(): boolean;
canSubmitForm(): boolean;
```

Validation methods assert observable state only. They do not click, fill, navigate, or transform data.

## Helpers

Choose the helper prefix according to its contract:

| Prefix    | Contract                                      |
| --------- | --------------------------------------------- |
| `get`     | Returns an available value                    |
| `find`    | Searches and may return `undefined`           |
| `resolve` | Derives or selects a value from input         |
| `require` | Returns a value or throws when it is missing  |
| `create`  | Constructs a new value                        |
| `map`     | Transforms one structure into another         |

Examples:

```ts
requireHerokuappOptionConfig(option);
findUserByEmail(email);
resolveEnvironmentUrl(environment);
createUploadPayload(file);
```

## Page objects and locators

Locator properties and methods use a functional noun followed by the UI element type where useful.

Examples:

```ts
mainHeading;
examplesHeading;
submitButton;
emailInput;
countrySelect;
optionLink(href);
```

Avoid generic or numbered names such as `heading`, `button1`, `input2`, or `element` when a more specific purpose is known.

## Review checklist

- [ ] The name uses `lowerCamelCase`.
- [ ] The name starts with a precise verb when it performs work.
- [ ] Common actions identify the interaction and target or condition.
- [ ] Functional actions describe user intent rather than Playwright details.
- [ ] Assertion methods start with `expect`.
- [ ] `is`, `has`, and `can` return boolean values.
- [ ] Helper prefixes match their return and failure contracts.
- [ ] Locator names identify their functional role.
- [ ] Generic verbs such as `execute`, `perform`, `process`, and `handle` are absent.

