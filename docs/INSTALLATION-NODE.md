# 📥 Node.js Installation Guide

Comprehensive guide to install, configure, and integrate `@adyllsxn/kwavalidator` into your Node.js applications using JavaScript or TypeScript.

---

## 💾 Installation

Choose your preferred package manager to add the library to your project:

### npm
```bash
npm install @adyllsxn/kwavalidator
```

### yarn
```bash
yarn add @adyllsxn/kwavalidator
```

### pnpm
```bash
pnpm add @adyllsxn/kwavalidator
```

---

## 🛠️ Usage

This library supports both the modern **Functional Approach** (recommended for quick checks) and the **Object-Oriented Approach** (matching the .NET architecture).

### 1. Functional Approach (Quick & Simple)

```typescript
import { validateBI } from '@adyllsxn/kwavalidator';

const result = validateBI('123456789LA001');

if (!result.isValid) {
  console.error(`Validation Failed: ${result.errorMessage}`);
  process.exit(1);
}

console.log(`Valid BI! Province: ${result.province.name}`);
```

### 2. Object-Oriented Approach (Advanced)

```typescript
import { BiValidator } from '@adyllsxn/kwavalidator';

const validator = new BiValidator();
const result = validator.validate('123456789LA001');

if (!result.isValid) {
  console.error(`Validation Failed: ${result.errorMessage} (Code: ${result.errorCode})`);
  process.exit(1);
}

console.log(`Valid BI! Province: ${result.province?.name} [${result.province?.code}]`);
```

---

## ⚙️ Environment Configuration

### For TypeScript Projects
Ensure your `tsconfig.json` is configured to support modern ESM (ECMAScript Modules) dependency resolution:

```json
{
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "target": "ES2022"
  }
}
```

### For Pure JavaScript Projects (Node.js)
To use `import` syntax instead of `require`, add the module type definition to your root `package.json`:

```json
{
  "type": "module"
}
```
