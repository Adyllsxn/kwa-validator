<div align="center">

<img src="./docs/assets/logotipo.svg" alt="KwaValidator Logo" width="30%" />

</br>

<h3> Cross-platform validation library for Angolan documents</h3>

[![NuGet Version](https://img.shields.io/nuget/v/KwaValidator.svg)](https://www.nuget.org/packages/KwaValidator)
[![NuGet Downloads](https://img.shields.io/nuget/dt/KwaValidator.svg)](https://www.nuget.org/packages/KwaValidator)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

</div>

---


> KwaValidator is a modern and extensible validation library focused on Angolan documents.

> Built to be lightweight, fast and framework-independent, allowing integration across multiple ecosystems and programming languages.

### Currently Supported

- 🇦🇴 Bilhete de Identidade (BI)

### Planned Support

- NIF
- Passport
- Driver License

---

# 🚀 FEATURES

- ⚡ Fast validation engine
- 🌍 Cross-platform architecture
- 🧩 Extensible document system
- 🔒 Framework independent
- 🧼 Clean and minimal API
- 📦 Multi-ecosystem support
- ❌ No forced exceptions
- 🔧 Easy integration

---

# 📦 ECOSYSTEM

| Platform | Package |
|----------|----------|
| .NET | `KwaValidator` |
| Node.js | `kwavalidator` |

---

# 📥 INSTALLATION

## Choose your platform:

| Platform | Installation Guide |
|----------|-------------------|
| .NET | [Installation Guide](./docs/INSTALLATION-DOTNET.md) |
| Node.js | [Installation Guide](./docs/INSTALLATION-NODE.md) |

---

### Quick Examples

**.NET**
```csharp
using KwaValidator.Services;

var validator = new BiValidator();
var result = validator.Validate("123456789LA001");
```

**Node.js**
```javascript
import { validateBI } from '@adyllsxn/kwavalidator';
const result = validateBI('123456789LA001');

```

---

# 📄 PHILOSOPHY

KwaValidator does not enforce:

- Exceptions
- HTTP status codes
- Frameworks
- Specific return patterns

You decide how validation should behave inside your application.

---

# 📜 LICENSE

> Licensed under the MIT License.
