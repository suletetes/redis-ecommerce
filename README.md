# Redis-Powered Svelte E-commerce Platform

rbay is a full-stack e-commerce web application built with SvelteKit, TypeScript, TailwindCSS, and Redis. It features
real-time auctions, user authentication, item bidding, and analytics, all powered by a high-performance Redis backend.

## Features

- Real-time auction listings with live updates
- User authentication and sessions
- Item bidding, likes, and views tracking
- Dashboard for managing items
- Data seeding and CLI utilities
- Background worker for async jobs
- Responsive UI with SvelteKit and TailwindCSS

## Tech Stack

- **Frontend:** SvelteKit, TypeScript, TailwindCSS
- **Backend:** Node.js, SvelteKit endpoints
- **Database:** Redis (via ioredis)
- **Other:** Luxon (dates), Chart.js (analytics), dotenv (env management)

## Folder Structure

- `src/` - Main application source code
    - `routes/` - SvelteKit routes (pages, API endpoints)
    - `lib/components/` - Reusable Svelte components (cards, carousels, etc.)
    - `lib/util/` - Utility functions
    - `services/` - Redis queries, authentication, and middleware
- `seeds/` - Scripts and data for seeding the Redis database
- `worker/` - Background job processing (e.g., item removal)
- `cli/` - Command-line utilities
- `sandbox/` - Experimental scripts
- `static/` - Static assets (favicon, etc.)

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- Redis server

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/suletetes/redis-ecommerce
   cd redis-ecommerce
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file for Redis configuration:
   - Copy the example file and edit it:
     ```bash
     cp .env.example .env
     # Edit .env to add your Redis credentials (e.g., REDIS_HOST, REDIS_PORT, REDIS_PW)
     ```
   - **Note:** The application requires a valid `.env` file with your Redis connection details to function properly.

### Development

Start the development server:

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) (or as indicated in the terminal).

### Seeding the Database

To populate Redis with sample data:

```bash
npm run seed
```

### Running the Worker

For background job processing:

```bash
npm run worker
```

### CLI Utilities

Run custom CLI commands:

```bash
npm run cli
```

## Scripts

- `dev` - Start dev server
- `build` - Build for production
- `preview` - Preview production build
- `seed` - Seed the database
- `worker` - Run background worker
- `cli` - Run CLI utilities
- `sandbox` - Run sandbox scripts
