## .NET

### NuGet
```powershell
Install-Package KwaValidator
```

### .NET CLI
```bash
dotnet add package KwaValidator
```

---

# 🛠️ Usage

```typescript
import { BiValidator } from 'kwavalidator';

const validator = new BiValidator();
const result = validator.validate('123456789LA001');

if (!result.isValid) {
  console.error(result.errorMessage);
  process.exit(1);
}

console.log(`Valid BI - Province: ${result.province?.name}`);

```
