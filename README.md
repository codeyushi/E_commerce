# ShopFlow - E-Commerce Gallery

ShopFlow is a dynamic, high-performance e-commerce storefront built with React, focused on delivering a smooth and responsive user experience with advanced filtering and state management.

---

## Live Demo at Netlify

https://shopflow-commerce.netlify.app
---

## Tech Stack

* React with TypeScript
* CSS (Flexbox and Responsive Design)
* Framer Motion
* FakeStoreAPI
* React Router DOM
* Context API

---

## Installation

### Prerequisites

* Node.js (v18 or higher)
* npm or yarn

### Setup

```bash 
git clone https://github.com/codeyushi/E_commerce
cd E_Commerce
npm install
npm run dev
```

Application will run on:
http://localhost:5173

---

## Features

### Custom UI and Branding

* Designed and integrated a custom ShopFlow logo
* Responsive navbar with stable layout
* Filters remain accessible across screen sizes

---

### Cart Functionality

* Global cart implemented using Context API
* Real-time cart item count update
* Empty cart state with user guidance

---

### Filtering and Sorting

* Multi-category filtering using URL parameters
* Price sorting (Low to High / High to Low)
* Filter state persists on refresh using useSearchParams

---

### Animations

* Page transitions using Framer Motion
* Staggered product animations
* Hover effects on product cards

---

### Layout Optimization

* Flexbox-based responsive grid
* Equal-height product cards
* Consistent alignment of action buttons

---

## Technical Decisions

* API calls managed with useEffect
* Parallel fetching using Promise.all
* URL-based state management for filters
* Modular and scalable project structure

---


