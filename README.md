# DevCraft Studio

A modern, minimalist web development studio website built with React, TypeScript, and Tailwind CSS.

## Overview

DevCraft Studio is a full-cycle web development studio based in Minsk, specializing in web applications, mobile applications, and enterprise systems. This project is a clean, professional prototype (Variant A) featuring a minimal design system with proper spacing, consistent components, and responsive layout.

## Features

- **Modern Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Responsive Design**: Fully adaptive layout for desktop (1440px) and mobile (375px)
- **Clean Design System**: Minimalist approach with consistent colors, typography, and components
- **5 Main Pages**:
  - Home - Hero section, services overview, technologies, and CTA form
  - Services - Detailed service offerings and work process
  - Portfolio - Project showcase with filtering and modal views
  - About - Company information, team, values, and tech stack
  - Contacts - Contact information and inquiry form

## Design System

### Colors
- Background: `#FFFFFF`
- Surface: `#F7F8FA`
- Text Primary: `#111827`
- Text Secondary: `#6B7280`
- Border: `#E5E7EB`
- Accent: `#1D4ED8`

### Typography
- Font Family: Inter
- Desktop H1: 40px/48px, Semibold
- Desktop H2: 32px/40px, Semibold
- Desktop H3: 24px/32px, Semibold
- Body: 16px/24px, Regular
- Mobile: Responsive scaling

### Layout
- Container: max-width 1200px, centered
- Desktop padding: 120px
- Mobile padding: 16px
- Section spacing: 72-80px (desktop), 48px (mobile)

## Project Structure

```
devcraft_studio_v1/
├── src/
│   ├── components/
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── About.tsx
│   │   ├── Contacts.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ui/
│   │       ├── container.tsx
│   │       ├── section.tsx
│   │       ├── card-component.tsx
│   │       └── button-component.tsx
│   ├── App.tsx
│   └── main.tsx
├── styles/
│   └── globals.css
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd devcraft_studio_v1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## Key Components

### Container
Centralized container component with responsive padding (120px desktop, 16px mobile).

### Section
Section wrapper with optional background surface color and consistent vertical spacing.

### Card
Simple card component with border, rounded corners, and consistent padding.

### Button
Three variants: primary (blue), secondary (white with border), and ghost (text only).

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)