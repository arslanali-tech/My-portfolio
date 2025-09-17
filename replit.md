# Overview

This is a personal portfolio website for Arslan Ali, a Computer Science student and full-stack developer specializing in AI integration, Bubble.io development, and Python applications. The project showcases his skills, projects, and professional experience through a modern, responsive web interface. Built as a full-stack application with React frontend and Express backend, the portfolio demonstrates expertise in web scraping, AI-powered chatbots, competitive intelligence tools, and modern web development practices.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React SPA**: Built with React 18+ using TypeScript for type safety
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and caching
- **Theme System**: Custom theme provider supporting light/dark modes with CSS variables
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Express Server**: Node.js with Express framework using TypeScript
- **API Structure**: RESTful API design with `/api` prefix for all endpoints
- **Middleware**: Custom logging, JSON parsing, and error handling middleware
- **Development Setup**: Hot reload with Vite middleware integration for seamless development experience
- **Storage Interface**: Abstracted storage layer with in-memory implementation (ready for database integration)

## Component Architecture
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives
- **Layout Components**: Modular sections (Hero, About, Skills, Projects, Timeline, Contact, Footer)
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Accessibility**: ARIA labels and semantic HTML structure throughout

## Data Layer
- **Database Schema**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **User Model**: Basic user schema with username/password fields and UUID primary keys
- **Migrations**: Drizzle-kit for database schema management and migrations
- **Type Safety**: Zod validation schemas generated from Drizzle schemas

## Development Environment
- **TypeScript**: Strict configuration with path mapping for clean imports
- **ESM**: Full ES modules support throughout the application
- **Build Process**: Separate client and server builds with esbuild for server bundling
- **Hot Reload**: Vite development server with Express middleware integration

# External Dependencies

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Radix UI**: Unstyled, accessible component primitives (@radix-ui/react-*)
- **shadcn/ui**: Pre-built component library with consistent design system
- **class-variance-authority**: For component variant management
- **Lucide React**: Icon library for consistent iconography

## Database and ORM
- **Drizzle ORM**: Type-safe SQL query builder and ORM
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database
- **Drizzle Zod**: Integration between Drizzle schemas and Zod validation

## Development Tools
- **Vite**: Build tool and development server
- **esbuild**: Fast JavaScript bundler for server builds
- **tsx**: TypeScript execution for development
- **@replit/vite-plugin-***: Replit-specific development plugins

## State Management and Data Fetching
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form state management with validation
- **@hookform/resolvers**: Validation resolvers for React Hook Form

## Additional Libraries
- **date-fns**: Date manipulation and formatting
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel/slider functionality
- **wouter**: Lightweight React router
- **nanoid**: Unique ID generation

## Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions (configured but not actively used in current implementation)