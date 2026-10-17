# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# ShopEase 🛍️

ShopEase is a simple, responsive mini e-commerce application built with React and Tailwind CSS.

## Features

- Product listing
- Product search
- Category filtering
- Shopping cart
- Quantity controls
- Automatic total price calculation
- Cart persistence using localStorage
- Responsive design

## Technologies

- React
- JavaScript
- Tailwind CSS
- Vite
- Git and GitHub

## Getting Started

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the local URL displayed in your terminal.

## Project Structure

src/
├── components/ Reusable UI components
├── data/ Product data
├── pages/ Page-level components
├── App.jsx State and cart logic
└── main.jsx App entry point

## Learning Objectives

This project demonstrates component-based development, props passing, state management, list rendering, filtering, local storage, and appropriate use of React hooks.
