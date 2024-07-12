# Tips

- Binarios:
  - `npx`: mesmo que executar algum binario da pasta `node_modules/.bin/`

- TypeScript:
```sh
# @@ Save development depencencies @@
npm [--save-dev | -D]

# @@ Typescript Environment @@

# Install TS.
npm i typescript @types/node -D
# Config TS file.
npx tsc --init
# Transpile.
npm i tsx -D
```

- Technologies:

- Prisma:
```sh
# Create SQLite DB.
npx prisma init --datasource-provider SQLite
# Execute migration.
npx prisma migrate dev
# Open online visualizer.
npx prisma studio
```

- Others:
```sh
# Ethereal mail sender (fake SMTP server).
npm i nodemailer
npm i --save-dev @types/nodemailer
# Date handling.
npm i dayjs
# Schema Validation.
npm i fastify-type-provider-zod
```

- ESLint:
```js
# Install Packages.
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin typescript

// .eslintrc.js @ [config file]
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'no-console': 'error'
  }
};
```
