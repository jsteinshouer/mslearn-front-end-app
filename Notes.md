
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