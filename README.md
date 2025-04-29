# Admin Dashboard

A modern, responsive **Admin Dashboard** built with **React**, **Tailwind CSS**, and **PWA** features. This dashboard includes a customizable theme (dark, light, blue), real-time charts, and a user-friendly interface for managing and visualizing data. This app is designed with the flexibility to be used in various real-world applications.

## Features

- **Themes**: Toggle between Dark, Light, and Blue themes
- **Charts**:
  - Line Chart: Displays sales data over time
  - Bar Chart: Shows user activity
- **Responsive Design**: Fully responsive across devices (mobile, tablet, desktop)
- **Progressive Web App (PWA)**: Supports offline mode and "Add to Home Screen" functionality
- **Mock Data**: Local state used for chart data and visual elements during development
- **Service Worker**: Automatically caches assets for offline use

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **PWA**: Service Worker, Web App Manifest
- **Charts**: Chart.js (for rendering line and bar charts)
- **State Management**: React Context API (for theme state and PWA service)
- **Design**: Tailwind CSS for utility-first styling and custom themes

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (or yarn)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/letswriteaprogram/admin-dashboard.git
   cd admin-dashboard
