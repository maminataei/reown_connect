# Reown Connect

web application built with React, TypeScript, and Vite for connecting and interacting with blockchain networks using the Reown AppKit.

## 🚀 Features

- React with TypeScript support
- Vite for fast development and building
- Integration with Reown AppKit for blockchain interactions
- Support for multiple Ethers adapters
- Form handling with React Hook Form and Yup validation
- State management with Zustand
- Data fetching with TanStack Query
- UI with Tailwind CSS
- Toast notifications with React Hot Toast
- Type-safe development environment

## 📋 Prerequisites

- Node.js (v16 or higher)
- Yarn package manager
- A modern web browser

## 🛠️ Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd reown_connect
```

2. Install dependencies:

```bash
yarn install
```

3. Create a `.env` file in the root directory and add necessary environment variables:

```env
VITE_PROJECT_NAME=reown_connect
VITE_PROJECT_DESCRIPTION=Reown Connect
VITE_PROJECT_URL=https://reown-connect.vercel.app
VITE_PROJECT_ICON=https://reown.com/icon.png
VITE_PROJECT_ID=71b5d4ca99c065608863bb5d9e06af98
```

## 🚀 Development

To start the development server:

```bash
yarn dev
```

The application will be available at `http://localhost:80`

## 🏗️ Building for Production

To create a production build:

```bash
yarn build
```

To preview the production build:

```bash
yarn preview
```

## 📁 Project Structure

```
reown_connect/
├── src/
│   ├── assets/         # Static assets (images, fonts, etc.)
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── providers/     # React context providers
│   ├── routes/        # Route configurations
│   ├── store/         # Zustand store configurations
│   ├── App.css        # Global styles
│   └── main.tsx       # Application entry point
├── public/            # Public static files
├── .env              # Environment variables
├── package.json      # Project dependencies and scripts
├── tsconfig.json     # TypeScript configuration
└── vite.config.ts    # Vite configuration
```

## 🛠️ Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Create production build
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint for code linting

## 🔧 Technologies Used

- React 19
- TypeScript
- Vite
- Reown AppKit
- Tailwind CSS
- React Hook Form
- Yup
- Zustand
- TanStack Query
- React Router
- React Hot Toast
