# UI Architecture and Layer Responsibilities

Short guide for naming and responsibility separation in UI.

## Suffixes

- `.page.ts`: main screen or route.
- `.view.ts`: functional subsection of a page.
- `.component.ts`: reusable block (drawer, modal, widget).
- `.section.ts`: fixed layout structure (sidebar, navbar).

## Folders and Responsibility

- `actions/`: interactions (click, fill, select, navigate).
- `helpers/`: read or get data with no asserts.
- `validations/`: asserts and checks (`expect`).
- `utils/`: pure TypeScript logic with no DOM dependency.

## Expected Structure

```txt
src/ui/skydropx-pro/
  actions/
  helpers/
  validations/
  utils/
  pages/
  views/
  components/
  sections/
```

## Operating Rules

- Steps: delegate to higher layers; avoid raw Playwright in step-definitions.
- Steps may instantiate page, section, or action classes with `new` when used only for light orchestration.
- Treat repeated or complex `new` chains in steps as a refactor signal; move wiring to fixtures or dedicated action classes.
- `ctx` belongs only to orchestration layers (`step-definitions`, `fixtures`).
- Do not pass `ctx` into `actions/helpers/validations/pages/views/components/sections`; pass explicit typed parameters instead.
- `pages/views`: orchestrate `components/sections` and can use `actions/helpers`.
- `components`: encapsulated, with no coupling to unrelated pages.
- Keep one responsibility per file or class.

## Related Documents

- `docs/standards/code-style-guide.md`
- `docs/standards/solid-implementation-practices.md`
