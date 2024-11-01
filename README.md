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
git clone project
```

2. Setup frontend
```bash
cd frontend
npm i
npm run dev
```

3. Setup backend
```bash
cd backend
npm i
npm run dev
```

4. Add the .gitignore file to the root of your project
