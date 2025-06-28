# 🌍 Elemental AIM – Education with Global Impact

**Elemental AIM** is a web-based educational platform built to bridge the gap between high-quality learning resources and access to education globally. This platform enables users to explore curated K–12 content, support grassroots schools, and participate in meaningful educational impact.

---

## 🚀 Features

- 🔐 **Authentication System** – Login, signup, demo fallback
- 🌗 **Theme Switching** – Light/Dark mode support
- 🔍 **Smart Resource Filtering** – By subject, type, and rating
- 🧭 **Framer Motion Routing** – Smooth page transitions
- 🗺️ **Interactive Map** – Glowing markers for global partner schools
- 📽️ **Embedded Film & Video Pages** – Educational documentaries
- 🧑‍🏫 **Educator & Individual Flows** – Tailored pathways
- 💬 **Ask a Question** – Integrated student support form
- 📊 **Live Statistics** – Animated counters and global impact stats
- 💸 **Stripe Integration (Test)** – Donation support system
- 🔔 **Toast Alerts** – User feedback for actions and errors

---

## 🧱 Tech Stack

| Layer         | Technology                          |
|---------------|--------------------------------------|
| Frontend      | React + Vite                        |
| Styling       | TailwindCSS + Custom Variables      |
| Animations    | Framer Motion                       |
| UI Framework  | Radix UI Components                 |
| Routing       | React Router DOM v6                 |
| Maps          | Leaflet + React Leaflet             |
| Icons         | Lucide React Icons                  |
| State Mgmt    | React Context (Auth & Theme)        |

---

## 📁 Folder Structure

```
src/
  ├── assets/              # Static images/icons
  ├── components/          # UI and layout components
  ├── contexts/            # Theme & Auth providers
  ├── data/                # Static JS datasets (e.g., resources)
  ├── lib/                 # Utility functions
  ├── pages/               # Route-level pages
public/
  ├── images/              # All static images
  └── videos/              # Local videos (ignored in Git)
```

---

## 📦 Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/Awkward-turtleness/ElementalAim.git
cd ElementalAim/frontend
npm install  # or yarn
```

### 2. Run the Development Server

```bash
npm run dev  # or yarn dev
```

> The app runs at: `http://localhost:5173`

---

## 🔒 Demo Login Fallback

If the backend (`http://localhost:5000/api`) is not running, you can still access the platform using demo credentials:

```
Email:    1234@gmail.com
Password: 1234
```

This allows you to explore core features without backend dependencies.

---

## 📽️ Local Video Files (Optional)

These are excluded via `.gitignore`. To use them locally:

```
Place your videos here:

/public/videos/homepage.mp4
/public/videos/thinking_futures.mp4
```

You may download these separately or replace them with placeholders.

---

## 🛠️ Scripts

| Script      | Description                  |
|-------------|------------------------------|
| `npm run dev` | Run local dev server          |


---

## 📜 License

This project is for **educational purposes only** and is not licensed for commercial distribution.

---

## 🙋 About

This project was developed by Imantha Karunarathna as part of the final submission for the Elemental AIM platform backend. It demonstrates Express-based REST APIs, MySQL data handling, and dynamic frontend feedback.

---

© 2025 Imantha Karunarathna – All rights reserved. Elemental AIM Project.

---

> Thank you for reviewing this project 🙏