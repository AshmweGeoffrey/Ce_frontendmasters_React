# Ce_frontendmasters_React

A full-stack React application built while learning React fundamentals through Frontend Masters. This project implements a pizza shop ordering system with both client and server components.

## Project Structure

```
📦 Ce_frontendmasters_React
├── 0x00-Base/                 # Basic React concepts
├── 0x01-config/               # Project configuration
├── 0x02-jsx/                  # JSX fundamentals
├── 0x03-Hooks/                # React Hooks implementation
├── 0x04-Custom-Hooks/         # Custom Hooks development
├── 0x05-Handling-User_input/  # Form handling and user input
├── 0x06-Context/              # React Context implementation
├── 0x07-TanStack/             # TanStack Query integration
├── 0x08-Error_boundaries/     # Error handling
├── 0x09-uncontrolled-forms/   # Uncontrolled form components
└── Deploy/                    # Production-ready application
    ├── pizzas-client-app/     # Frontend React application
    └── pizzas-server-app/     # Backend server
```

## Features

- Interactive pizza ordering system
- Shopping cart functionality
- Pizza of the day feature
- Custom currency handling
- Error boundary implementation
- Modal components
- RESTful API integration
- Responsive header and navigation
- Form handling with both controlled and uncontrolled components

## Tech Stack

- React
- Vite
- TanStack Query
- Node.js (Server)
- SQLite (Database)
- Custom Hooks
- React Context
- Error Boundaries

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Ce_frontendmasters_React
```

2. Install and start the server:
```bash
cd Deploy/pizzas-server-app
npm install
npm start
```

3. Install and start the client:
```bash
cd ../pizzas-client-app
npm install
npm run dev
```

### Building for Production

To create a production build:

```bash
cd Deploy/pizzas-client-app
npm run build
```

The built files will be in the `dist` directory.

## Project Components

- `App.jsx`: Main application component
- `Header.jsx`: Navigation and header component
- `Pizza.jsx`: Pizza item display component
- `Cart.jsx`: Shopping cart implementation
- `Modal.jsx`: Reusable modal component
- `ErrorBoundary.jsx`: Error handling wrapper
- `PizzaOfTheDay.jsx`: Featured pizza component
- `contexts.jsx`: React context definitions
- `useCurrency.jsx`: Custom currency hook
- `usePizzaOfTheDay.jsx`: Pizza of the day hook

## API Structure

The server provides endpoints for:
- Fetching available pizzas
- Managing orders
- Handling pizza of the day
- Processing cart operations

## Learning Outcomes

This project covers:
- React fundamentals
- Component lifecycle
- State management
- Custom hooks
- Context API
- Error handling
- Form management
- API integration
- Build and deployment processes

## License

This project is created for learning purposes through Frontend Masters courses.

## Acknowledgments

- Frontend Masters for the course content
- React documentation
- TanStack Query team
