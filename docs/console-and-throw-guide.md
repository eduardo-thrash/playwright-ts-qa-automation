# Console and Throw Usage Guide

This guide defines when to use each `console.*` method and when to use `throw new Error(...)`.

For maximum tolerated code quality thresholds, see `docs/standards/code-quality-thresholds.md`.

## Base Rules

- `console.log`:

  - Generic.
  - Allowed only for local debugging.
  - Must not reach merge in application code.
  - `[FileName] message`.

- `console.info`:

  - Functional console log.
  - Required opening format:
  - `[ModuleName.FeatureName.Action] message`.

- `console.trace`:

  - Technical console log.
  - Required opening format:
  - `[FileOrClass.FunctionOrMethod] message`.

- `console.debug`:

  - Use it to log request, response, technical details, and parsed DataTable data.
  - `[ModuleName.TechnicalTopic] message`.

- `console.warn`:

  - Use it to log flaky or potentially flaky behavior.
  - Unexpected but expected event.
  - `[FeatureName] message`.

- `console.error`:

  - Failure with a functional message before `throw new Error`.
  - `[Error] message`.

- `throw new Error`:
  - Direct failure.

## Recommended Formats

### `console.log`

```ts
console.info('[generate-scenarios-coverage] Coverage CSV generated');
```

### `console.info`

```ts
console.info('[UI.ShipmentsFilter.Apply] Date filter applied successfully');
```

### `console.trace`

```ts
console.trace(
  '[AddressTemplatesValidations.validateAddressTemplatesModuleLoaded] message Call executed from filter validation',
);
```

### `console.debug`

```ts
console.debug('[API.Request] request:', requestBody);
console.debug('[API.Response] response:', responseBody);
console.debug('[UI.DataTable] Parsed DataTable:', parsedDataTable);
```

### `console.warn`

```ts
console.warn('[ShipmentsCreate] Status did not update on first attempt, retrying');
```

### `console.error` + `throw new Error`

```ts
console.error('[Error] Could not apply date filter');
throw new Error('Failed to apply date filter');
```

## Quick Decision Rule

- If it is a generic log and only for local support: `console.log`.
- If it is a functional flow event: `console.info`.
- If it is technical call or method tracing: `console.trace`.
- If it is request/response or technical detail logging: `console.debug`.
- If it is abnormal but expected behavior (flaky or potentially flaky): `console.warn`.
- If there is a failure and you want to log functional context before failing: `console.error` and then `throw new Error`.
- If it must fail immediately: `throw new Error`.

## Scope Rules (By Path)

- `src/**`:

  - `console.log` is not allowed.
  - Use `console.info`, `console.trace`, `console.debug`, `console.warn`, `console.error`, and `throw new Error` according to this guide.

- Outside `src/**` (for example `scripts/**`, CLI utilities, tooling):
  - `console.log` is allowed only for operational command output that is intended to stay after merge.
  - Prefer consistent prefixes like `[Script.Module.Action] message`.

## Exceptions

- External libraries (for example `node_modules/**`):

  - Do not apply this rule set.
  - Do not modify vendor code just to enforce this standard.

- Auto-generated files (build artifacts or generated code):
  - Do not apply this rule set directly.
  - Changes should be made in the generator or source template, not in generated output.
