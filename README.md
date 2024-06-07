# Acmy Solutions Dashboard

## Project Overview

This project is a dashboard application built with React. It features a sidebar navigation, a header, and various components to display tasks, task priorities, and activity feeds. The layout is responsive and adjusts for different screen sizes.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [API Integration](#api-integration)
- [Running Tests](#running-tests)

## Installation

To set up and run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/SupuniJayasinghe/todo-dashboard-2024-Q2-SupuniJayasinghe
    cd todo-dashboard-2024-Q2-SupuniJayasinghe
    ```

2. **Install the dependencies:**
    ```bash
    npm install
    ```

3. **Start the development server:**
    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000` to see the application running.

## Usage

- **Navigation:** Use the sidebar to navigate between the Dashboard and other pages.
- **Responsive Design:** On small screens, the sidebar will move to the top of the screen as a top navigation with dropdown menu.
- **Tasks:** View and manage tasks in the Tasks section.

## Components

- **HeaderNavigation:** Displays the top header navigation.
- **SidebarNavigation:** Sidebar with navigation links.
- **ActivityFeed:** Displays recent activities.
- **TasksPriorities:** Shows task priorities.
- **Tasks:** Displays a list of tasks with pagination and tooltips.

## API Integration

The project fetches tasks from a mock API using Axios. The relevant code can be found in the `Dashboard.js` file:

## Running Tests

**Running the test files using:
    ```bash
    npm test 
    ```

