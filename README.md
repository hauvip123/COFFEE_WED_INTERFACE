# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
PROJECT TEST GUIDE

This project runs inside Docker. Follow these steps:

1. Clone the repository:
   git clone https://github.com/hauvip123/COFFEE_WED_INTERFACE.git

2. Navigate to the project folder:
   cd COFFEE_WED_INTERFACE

3. Make sure Docker and Docker Compose are installed on your system.

4. Build and run the Docker containers:
   docker compose up --build

5. Once the container starts, open your browser and go to:
   http://localhost:3000
   (The left side of "3000:3000" in docker-compose.yml is the local port)

6. To stop the containers:
   docker compose down

NOTE:
- If you change the code, re-run the build command:
   docker compose up --build
- If you encounter a "non-fast-forward" error when pushing, run:
   git pull origin main --rebase
   git push origin main
