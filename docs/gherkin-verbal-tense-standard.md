# Estándar de redacción y tiempos verbales en Gherkin

## 1. Objetivo

Este documento define las reglas de redacción para los steps de Gherkin con el fin de mantener escenarios claros, consistentes, funcionales y fáciles de reutilizar.

Las reglas aplican a archivos `.feature` escritos en inglés y cubren:

- Uso correcto de `Given`, `When` y `Then`.
- Tiempos verbales esperados.
- Uso de `And` y `But`.
- Separación entre precondiciones, acciones y resultados.
- Errores de redacción que deben detectarse durante un code review.

---

## 2. Principios generales

Los escenarios deben describir el comportamiento funcional del sistema desde la perspectiva del usuario o consumidor del servicio.

Cada keyword debe tener una responsabilidad específica:

| Keyword       | Responsabilidad                                              |
| ------------- | ------------------------------------------------------------ |
| `Given`       | Establecer una precondición o estado previo.                 |
| `When`        | Describir la acción principal ejecutada por el actor.        |
| `Then`        | Describir el resultado funcional observable.                 |
| `And` / `But` | Continuar la intención y el tiempo verbal del step anterior. |

Los steps no deben describir detalles internos del framework, acciones técnicas de validación ni implementación específica de Playwright, Cucumber o TypeScript.

---

## 3. Reglas para `Given`

### 3.1 Tiempo verbal

Los steps `Given` deben redactarse en **pasado** cuando expresen una condición previamente establecida.

```gherkin
Given a user was logged in with the "QA" role
Given a national shipment was created
Given the address template was available
```

### 3.2 Intención

`Given` debe describir:

- Estado inicial.
- Datos existentes.
- Configuración previa.
- Permisos asignados.
- Recursos creados antes de la acción principal.

### 3.3 Ejemplos incorrectos

```gherkin
Given a user logs in with the "QA" role
Given the user creates a national shipment
Given the test opens the shipments page
```

Problemas:

- Usa presente en lugar de pasado.
- Describe una acción que posiblemente pertenece a `When`.
- Expone detalles técnicos del test.

---

## 4. Reglas para `When`

### 4.1 Tiempo verbal

Los steps `When` deben redactarse en **presente** para expresar la acción ejecutada por el actor.

```gherkin
When the user creates a national shipment
When the user submits the address template
When the user selects the "Both" address type
```

### 4.2 Intención

`When` debe describir:

- La acción principal del escenario.
- Una interacción funcional relevante.
- El evento que provoca el resultado esperado.

Un escenario debería tener una acción principal claramente identificable. Las acciones secundarias relacionadas pueden agregarse mediante `And`.

### 4.3 Ejemplos incorrectos

```gherkin
When the user created a national shipment
When the shipment has been submitted
When the test clicks the submit button
```

Problemas:

- Usa pasado o presente perfecto en lugar de presente.
- Describe un resultado en lugar de una acción.
- Expone una implementación técnica.

---

## 5. Reglas para `Then`

### 5.1 Tiempo verbal

Los steps `Then` deben expresar un resultado observable mediante:

- **Presente perfecto**, cuando describen un resultado producido por la acción.
- **Presente simple**, cuando describen un estado, valor, visibilidad o condición actual del sistema.

### 5.2 Presente perfecto para resultados producidos

```gherkin
Then the shipment has been created successfully
Then the address template has been saved
Then the order has been updated
```

### 5.3 Presente simple para estados observables

```gherkin
Then the shipment status is "Created"
Then the confirmation message is visible
Then the response status is 200
Then the address appears in the list
```

### 5.4 Intención

`Then` debe describir:

- Resultado funcional.
- Estado esperado.
- Cambio persistido.
- Respuesta visible.
- Contrato o valor verificable.

`Then` no debe describir la acción técnica de comprobar el resultado.

### 5.5 Ejemplos incorrectos

```gherkin
Then the user checks if the shipment was created
Then validates the confirmation message
Then the test verifies the response status
```

Problemas:

- Describe la validación realizada por el test, no el comportamiento esperado.
- Omite el resultado funcional.
- Usa un sujeto técnico o implícito.

### 5.6 Corrección recomendada

```gherkin
Then the shipment has been created successfully
And the confirmation message is visible
And the response status is 200
```

---

## 6. Reglas para `And` y `But`

`And` y `But` deben conservar la intención y el tiempo verbal de la keyword principal a la que pertenecen.

### 6.1 Después de `Given`

Deben continuar describiendo precondiciones en pasado.

```gherkin
Given a user was logged in with the "QA" role
And a valid address template was available
And the shipment feature was enabled
```

### 6.2 Después de `When`

Deben continuar describiendo acciones en presente.

```gherkin
When the user completes the shipment form
And selects an available carrier
And submits the shipment
```

### 6.3 Después de `Then`

Deben continuar describiendo resultados mediante presente perfecto o presente simple, según corresponda.

```gherkin
Then the shipment has been created successfully
And the shipment status is "Created"
And the confirmation message is visible
```

### 6.4 Uso de `But`

`But` debe expresar una excepción, contraste o condición negativa dentro del mismo contexto.

```gherkin
Given a user was logged in
But the user was not authorized to access Corporate
```

```gherkin
Then the shipment is listed
But the label download button is not visible
```

---

## 7. Estructura verbal esperada

La estructura recomendada es:

```gherkin
Given <precondición en pasado>
When <acción en presente>
Then <resultado en presente perfecto o estado en presente simple>
```

Ejemplo completo:

```gherkin
Scenario: Create a national shipment successfully
  Given a user was logged in with the "QA" role
  And valid shipper and recipient addresses were available
  When the user creates a national shipment with valid data
  Then the shipment has been created successfully
  And the shipment status is "Created"
  And the confirmation message is visible
```

---

## 8. Intención de cada keyword

Además del tiempo verbal, debe validarse que cada step corresponda a la intención de su keyword.

### 8.1 Acción incorrectamente ubicada en `Given`

Incorrecto:

```gherkin
Given the user creates an address
```

Correcto como acción:

```gherkin
When the user creates an address
```

Correcto como precondición:

```gherkin
Given an address was created
```

### 8.2 Resultado incorrectamente ubicado en `When`

Incorrecto:

```gherkin
When the shipment has been created
```

Correcto:

```gherkin
Then the shipment has been created successfully
```

### 8.3 Validación técnica incorrectamente ubicada en `Then`

Incorrecto:

```gherkin
Then the user validates that the address exists
```

Correcto:

```gherkin
Then the address appears in the list
```

---

## 9. Reglas de redacción funcional

### 9.1 Usar lenguaje de negocio

Preferir:

```gherkin
When the user submits the shipment
```

Evitar:

```gherkin
When the test clicks the submit shipment button
```

### 9.2 Evitar detalles técnicos

Los steps no deben mencionar:

- Locators.
- Selectores CSS o XPath.
- Métodos de Playwright.
- Page Objects.
- Fixtures.
- Esperas técnicas.
- Assertions internas.

Incorrecto:

```gherkin
When Playwright clicks the element with data-test-id "submit-button"
```

Correcto:

```gherkin
When the user submits the shipment
```

### 9.3 Usar un sujeto claro

Preferir:

```gherkin
When the user creates a shipment
```

Evitar:

```gherkin
When creates a shipment
```

### 9.4 Evitar acciones de validación

No usar como resultado:

- `checks`
- `validates`
- `verifies`
- `confirms whether`
- `checks if`

Estas expresiones describen lo que hace el test, no el estado del sistema.

Incorrecto:

```gherkin
Then the user checks if the shipment was created
```

Correcto:

```gherkin
Then the shipment has been created successfully
```

---

## 10. Reutilización de steps

Los steps deben ser reutilizables sin volverse ambiguos o excesivamente genéricos.

Preferir:

```gherkin
When the user creates a national shipment with valid data
```

Evitar:

```gherkin
When the user performs the action
```

También debe evitarse crear múltiples steps que expresen exactamente la misma intención con pequeñas diferencias de redacción.

Ejemplo de duplicación conceptual:

```gherkin
When the user creates a shipment
When a shipment is created by the user
When the user proceeds to create the shipment
```

Debe conservarse una única forma canónica.

---

## 11. Atomicidad de escenarios

Cada Scenario debe validar un comportamiento principal.

Un step con múltiples acciones independientes puede indicar que el escenario debe dividirse.

Ejemplo potencialmente no atómico:

```gherkin
When the user creates, edits, pauses and deletes a shipping link
```

Separación recomendada:

```gherkin
Scenario: Create a shipping link
Scenario: Edit a shipping link
Scenario: Pause a shipping link
Scenario: Delete a shipping link
```

Las acciones pueden permanecer juntas cuando forman parte inseparable del mismo flujo funcional.

---

## 12. Criterios para code review

Durante el review de archivos `.feature`, se debe validar:

- `Given` utiliza pasado para precondiciones previamente establecidas.
- `When` utiliza presente para acciones del actor.
- `Then` utiliza presente perfecto para resultados producidos o presente simple para estados observables.
- `And` y `But` conservan el tiempo verbal y la intención de la keyword anterior.
- Cada step corresponde a la responsabilidad de su keyword.
- Los resultados no se redactan como acciones de validación.
- No existen referencias a implementación técnica.
- Los steps tienen un sujeto claro.
- La redacción utiliza lenguaje funcional y de negocio.
- No existen steps duplicados con la misma intención.
- Los escenarios mantienen una responsabilidad funcional principal.

---

## 13. Clasificación de hallazgos

Los incumplimientos deben reportarse como `Naming` o `Code Smell`, según su impacto.

| Hallazgo                                               | Categoría sugerida | Riesgo sugerido |
| ------------------------------------------------------ | ------------------ | --------------- |
| Tiempo verbal incorrecto                               | Naming             | Low             |
| Keyword usada con intención incorrecta                 | Code Smell         | Medium          |
| Step describe implementación técnica                   | Code Smell         | Medium          |
| Resultado redactado como acción de validación          | Naming             | Low             |
| Duplicación de steps                                   | Code Smell         | Medium          |
| Escenario con múltiples comportamientos independientes | Code Smell         | Medium          |
| Ambigüedad que puede ejecutar un step incorrecto       | Bug                | High            |

El nivel puede aumentar cuando el problema genere ambigüedad, bindings duplicados, ejecución incorrecta o mantenimiento riesgoso.

---

## 14. Formato recomendado para reportar un hallazgo

````markdown
Change #N — [Principio SOLID: N/A] — [Estándar: gherkin-verbal-tense-standard.md]
Ubicación: [ruta:línea](ruta#Llínea)
Categoría: Naming
Riesgo: Low
Problema: El step `When the user created a shipment` utiliza pasado. Los steps `When` deben
expresar la acción del actor en presente.
Cómo corregir:

```gherkin
# Antes
When the user created a shipment

# Después
When the user creates a shipment
```
````

PR Comment:

> Issue: `When` uses past tense. | Impact: Breaks the project's Gherkin wording convention. | Fix: Use present tense: `When the user creates a shipment`.

````

---

## 15. Checklist resumido

```markdown
- [ ] `Given` describe una precondición en pasado.
- [ ] `When` describe una acción en presente.
- [ ] `Then` describe un resultado en presente perfecto o un estado en presente simple.
- [ ] `And` y `But` conservan la intención y el tiempo verbal del step anterior.
- [ ] Cada step corresponde a la responsabilidad de su keyword.
- [ ] Los resultados no utilizan `checks`, `validates` o `verifies`.
- [ ] Los steps utilizan lenguaje funcional y no detalles técnicos.
- [ ] Cada step tiene un sujeto claro.
- [ ] No existen steps funcionalmente duplicados.
- [ ] Cada Scenario cubre un comportamiento principal.
````

---

## 16. Ejemplo final recomendado

```gherkin
@ui
@address-templates
Feature: Address template management

  @baseline
  Scenario: Create a Both address template in Colombia
    Given a user was logged in with the "QA" role
    And the user was on the address template page
    When the user creates a "Both" address with valid data
    And submits the address template
    Then the address template has been created successfully
    And the new address appears in the address template list
```
