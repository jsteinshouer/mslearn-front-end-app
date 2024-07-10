
## [Create SPA](https://learn.microsoft.com/en-us/training/modules/build-web-api-minimal-spa)

### Scaffold App

```
npm create vite@latest PizzaClient --template react
cd PizzaClient
npm install
```

### Design API

Mock data using `json-server`

```
npx json-server --watch db.json --host 0.0.0.0 --port 5100
```

Could not get the CORS support to work without the proxy. I think it had something to do with codespaces.

### [Design system](https://learn.microsoft.com/en-us/training/modules/build-web-api-minimal-spa/6-design-style)

Install dependencies

```
npm i @mui/material @emotion/react @emotion/styled @mui/icons-material
```