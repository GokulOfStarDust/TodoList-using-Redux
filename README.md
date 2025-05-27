# 📝 Todo List PWA

A lightweight, offline-capable Todo List Progressive Web App (PWA) built with **React**, **Redux Toolkit**, and **Tailwind CSS**. Powered by **Vite** for fast development and builds, this app allows users to manage tasks with persistence using `localStorage`.

## 🚀 Features

- **Task Management**: Add, toggle completion, and remove tasks.
- **Persistent Storage**: Tasks are saved to `localStorage` for persistence across sessions.
- **Responsive Design**: Clean, mobile-friendly UI styled with Tailwind CSS.
- **State Management**: Efficient task handling with Redux Toolkit.
- **PWA Support**: Installable and offline-ready (requires Vite PWA plugin configuration).
- **Fast Development**: Built with Vite for quick builds and hot module replacement.

## 🛠️ Tech Stack

- **React**: Frontend library for building the UI.
- **Redux Toolkit**: Simplified state management for todos.
- **Tailwind CSS**: Utility-first CSS for responsive styling.
- **Vite**: Next-generation build tool for fast development.
- **localStorage**: For persistent task storage.

## 🗂️ Project Structure

```plaintext
src/
├── feature/
│   ├── TodoSlice.jsx   # Redux slice for todo logic
│   └── TodoView.jsx    # Main UI component
├── store/
│   └── Store.jsx       # Redux store configuration
```

## 📦 Setup & Installation

### Prerequisites
- **Node.js** (v14 or higher) and **npm**.
- A modern web browser (e.g., Chrome, Firefox).

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-list-pwa.git
   cd todo-list-pwa
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

4. (Optional) Build for production:
   ```bash
   npm run build
   npm run preview
   ```

## 🧩 PWA Configuration
To enable full PWA functionality (installability, offline support), configure the `vite-plugin-pwa` plugin in `vite.config.js` and add a `manifest.webmanifest`. Refer to the [Vite PWA Plugin documentation](https://vite-plugin-pwa.netlify.app/) for setup details.

## 💾 LocalStorage Persistence
The `feature/TodoSlice.jsx` file includes logic to save and retrieve todos from `localStorage`, ensuring tasks persist across page reloads. The Redux slice handles:
- `addTodo`: Adds a new task with a unique ID.
- `toggleTodo`: Toggles task completion status.
- `removeTodo`: Deletes a task by ID.

## 🎨 UI Features
- **Input Field**: Add tasks with a clean, Tailwind-styled input and a "+" button.
- **Task List**: Displays tasks with checkboxes for toggling completion and trash icons for deletion.
- **Visual Feedback**: Completed tasks are styled with a green background and strikethrough text.
- **Responsive Layout**: Adapts to mobile and desktop screens using Tailwind's utility classes.

Ensure HTTPS is enabled for service worker and PWA functionality.

## 🧑‍💻 Contributing
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit changes: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request with a clear description.

## 📜 License
[MIT License](LICENSE)

---

Built with ☕ and a love for simplicity.
