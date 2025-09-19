# Basic Next.js App

This repository contains the starter project for **ALX 0x01**.  
The goal is to learn how to set up a **Next.js + TypeScript** application, add reusable components, and implement basic CRUD-like interactions using modals.

---

## Tech Stack

- [Next.js](https://nextjs.org/) – React framework for server-side rendering and static site generation.
- [TypeScript](https://www.typescriptlang.org/) – Static typing for JavaScript.
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for styling.
- JSONPlaceholder API – Free fake REST API for testing and prototyping.

---

## Project Structure

```alx-project-0x01/
├── components/
│ ├── common/
│ │ ├── Button.tsx
│ │ ├── PostCard.tsx
│ │ ├── PostModal.tsx
│ │ ├── UserCard.tsx
│ │ └── UserModal.tsx
│ └── layout/
│ ├── Header.tsx
│ └── Footer.tsx
├── interfaces/
│ └── index.ts
├── pages/
│ ├── index.tsx # Home page
│ ├── posts/
│ │ └── index.tsx # Posts page + Add Post Modal
│ └── users/
│ └── index.tsx # Users page + Add User Modal
├── public/
├── styles/
│ └── globals.css
└── tailwind.config.ts
```

---

## Features

- **Reusable Components**
  - `Button`, `PostCard`, `UserCard`, `Header`, `Footer`
- **Dynamic Interfaces**
  - TypeScript interfaces for `PostProps`, `UserProps`, `PostData`, `UserData`, and modal props
- **Posts**
  - Display posts fetched from JSONPlaceholder
  - Add a new post via `PostModal`
- **Users**
  - Display users fetched from JSONPlaceholder
  - Add a new user via `UserModal`
- **Navigation**
  - Header with links to **Home**, **Posts**, and **Users**
- **Styling**
  - Responsive, styled with TailwindCSS

---

## How to open the project

### 1. Clone the repository
```bash
git clone https://github.com/YOUR-USERNAME/alx-project-0x01-setup.git
cd alx-project-0x01-setup
npm install
npm run dev -- -p 3000
Visit http://localhost:3000
```

# Pages Overview

- / – Home page (welcome message)

- /posts – Shows list of posts + "Add Post" modal

- /users – Shows list of users + "Add User" modal

# Learnings

- Setting up a Next.js + TypeScript project from scratch

- Using Tailwind CSS for rapid UI development

- Creating and reusing components

- Defining and enforcing interfaces with TypeScript

- Using getStaticProps for static data fetching

- Implementing simple modals with React state

# Tasks Covered

- Project Setup with create-next-app

- Navigation Header with Next.js <Link>

- Posts Page with PostCard + PostModal

- Users Page with UserCard + UserModal

- Form Validation with HTML5 required attributes

- Styling with Tailwind CSS

# Notes


- The backend is mocked using JSONPlaceholder

- Newly added posts/users are kept only in memory (not persisted).
