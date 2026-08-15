# Locator Naming Conventions

| Suffix                  | Example                    | Use                     |
| ----------------------- | -------------------------- | ----------------------- |
| `Button`                | `submitButton`             | Click actions           |
| `Link`                  | `helpCenterLink`           | Navigation              |
| `Input` / `Field`       | `emailInput`               | Form entry              |
| `Select` / `Dropdown`   | `countrySelect`            | Option selection        |
| `Checkbox`              | `termsCheckbox`            | Binary toggle           |
| `Radio`                 | `genderRadio`              | Single-choice option    |
| `Label`                 | `quoteResultsLabel`        | Static text             |
| `Message`               | `quoteResultsMessage`      | Dynamic feedback        |
| `Card`                  | `shipmentResultCard`       | Result or info block    |
| `Table`                 | `ratesTable`               | Tabular data            |
| `Modal` / `Dialog`      | `confirmDeleteModal`       | Popup container         |
| `Drawer`                | `createShipmentDrawer`     | Side panel              |
| `Tooltip`               | `statusTooltip`            | Hover or focus hint     |
| `Badge`                 | `statusBadge`              | Small status indicator  |
| `Icon`                  | `editIcon`                 | Icon element            |
| `Container` / `Section` | `shipmentDetailsContainer` | Scoped UI group         |
| `Banner`                | `errorBanner`              | Global alert or message |
| `Tab`                   | `detailsTab`               | Tab navigation          |
| `Stepper` / `Progress`  | `checkoutStepper`          | Multi-step progress     |

## Naming Rules

- Use functional names, not generic names like `button1`, `icon1`, or `checkbox1`.
- Use `Dropdown` for custom components and `Select` for native `<select>`.
- Use `Field` only when the control wraps more than one input concern.
- Use specific names for radio options and tabs.
- Use container names to define a stable locator scope.

## `data-test-id` Syntax

Use a simple syntax inspired by BEM:

```text
block
block__element
block--modifier
block__element--modifier
```

### Meaning

- `block`: main component
- `__element`: internal part of the component
- `--modifier`: type, variant, or state

### Examples

```text
toast
toast__container
toast__container--success

shipment-status
shipment-status__badge
shipment-status__badge--created

button
button--primary
button__icon
button__icon--small
```

### Quick Rule

| Symbol | Meaning                    |
| ------ | -------------------------- |
| `__`   | Internal part of the block |
| `--`   | Type, variant, or state    |
