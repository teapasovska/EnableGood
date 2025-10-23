# EnableGood


## Overview

This repository contains a Next.js application located in the `my-app` directory. The project is designed as a modern web application with a focus on modularity, scalability, and maintainability.

## Project Structure

```

├── README.md                # Project overview (this file)
└── my-app/                  # Main Next.js application
	 ├── public/              # Static assets (images, svgs, etc.)
	 ├── src/                 # Source code
	 │   ├── components/      # React components (common, company, explore, etc.)
	 │   ├── context/         # React context providers
	 │   ├── pages/           # Next.js pages (routing)
	 │   └── styles/          # Global and component styles
	 ├── package.json         # Project dependencies and scripts
	 ├── next.config.ts       # Next.js configuration
	 └── ...                  # Other configuration and setup files
```

## Getting Started

1. **Install dependencies:**

   ```bash
   cd my-app
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Features

- Modular React components
- Next.js routing and SSR/SSG support
- Custom context providers
- Organized static assets
- TypeScript support

## Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm start` — Start the production server

## Folder Highlights

- **public/**: Images and static files used throughout the app
- **src/components/**: Reusable UI components grouped by feature
- **src/pages/**: Next.js pages for routing
- **src/context/**: Context providers for global state
- **src/styles/**: Global and modular CSS

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
