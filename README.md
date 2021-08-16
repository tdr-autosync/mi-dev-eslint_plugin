# Motoinsight ESLint plugin

Maintainer: Serhii Petkun

This plugin includes:
1. A configuration, which helps following coding conventions.
2. A plugin to enforce `qa-...` classes on required HTML elements.

## Custom rules

### "require-qa-class" rule

This rule requires qa-\* CSS classes to be provided class on specific HTML elements and to follow [naming conventions](https://motocommerce.atlassian.net/wiki/spaces/QA/pages/1386971151/How+to+work+with+qa-+CSS+classes).

### Usage

This rule is not enabled by default. To use it you need to enable it manually, just update your ESLint configuration accordingly to the following example.

```json
"rules": {
  "@motoinsight/motoinsight/require-qa-class": [
    "error",
    {
      "elements": ["button", "input", "select", "textarea"],
    }
  ]
}
```

### Configuration options

| Name     | Type       | Default                                     | Description                         |
| -------- | ---------- | ------------------------------------------- | ----------------------------------- |
| elements | `string[]` | `["button", "input", "select", "textarea"]` | Sets the list of elements to check. |
