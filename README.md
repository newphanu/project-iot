# Full-stack Nuxt + Express Project Structure

## Project Layout
```
my-fullstack-project/
│
├── frontend/             # Nuxt.js Frontend
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── nuxt.config.js
│   └── package.json
│
├── backend/              # Express.js Backend
│    ├─── src 
│    │     ├── controllers/
│    │     ├── config.js
│    │     ├── routes.js
│    │     ├── index.js
│    └── package.json
│
├── .gitignore            # Global gitignore
└── README.md
```

## Recommended Setup

1. Create project directory
```bash
mkdir my-fullstack-project
cd my-fullstack-project
```

2. Setup frontend
```bash
npx create-nuxt-app frontend
```

3. Setup backend
```bash
mkdir backend
cd backend
npm init -y
npm install express cors
```

4. Add the .gitignore file to the root of your project
