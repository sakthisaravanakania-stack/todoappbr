# 📝 Todo App

A simple and responsive *Todo Application* built using *React.js* ⚛️ with *Axios* and *useReducer*.

This project allows users to create, update, delete, and filter todos with data stored using a REST API. 🚀

---

## ✨ Features

- ➕ Add new todos
- ✏️ Edit existing todos
- 🗑️ Delete todos
- 🔄 Update todo status
- 🔍 Filter todos by status
- 💾 Store todos using REST API
- ⚡ Axios API integration
- 🧠 State management using useReducer
- 📱 Responsive design
- 🎨 Clean and simple UI

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| ⚛️ React.js | Frontend |
| 🧠 useReducer | State Management |
| 🎣 useState | Local State Management |
| 🌐 Axios | API Requests |
| 🗄️ JSON Server | REST API |
| 🎨 CSS | Styling |
| ⚡ Vite | Development Tool |
| 🧑‍💻 VS Code | Code Editor |

---

## 📂 Project Structure

```text
📦 Todo App
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📄 Header.jsx
 ┃ ┃ ┣ 📄 Main.jsx
 ┃ ┃ ┗ 📄 TodoCard.jsx
 ┃ ┣ 📂 reducers
 ┃ ┃ ┗ 📄 Reducer.jsx
 ┃ ┣ 📄 App.jsx
 ┃ ┣ 📄 App.css
 ┃ ┣ 📄 index.css
 ┃ ┗ 📄 main.jsx
 ┣ 📄 package.json
 ┣ 📄 vite.config.js
 ┗ 📄 README.md
🔥 Main Functionalities
➕ Add Todo
Users can add a new todo by entering:
📝 Todo Name
📄 Todo Description
New todos are created with the default status:
Not Completed
✏️ Edit Todo
Users can edit:
📝 Todo Name
📄 Todo Description
Click the Edit button, update the details, and click Update. 🔄
🔄 Update Status
Todo status can be changed between:
✅ Completed
⏳ Not Completed
🔍 Filter Todos
Users can filter todos using:
📋 All
✅ Completed
⏳ Not Completed
🗑️ Delete Todo
Users can remove a todo by clicking the:
🗑️ Delete
button.
🌐 API Operations
This project uses Axios to communicate with the REST API.
📥 Get Todos
axios.get("/users");
➕ Add Todo
axios.post("/users", todoData);
🔄 Update Todo
axios.put(/users/${todoId}, todoData);
🗑️ Delete Todo
axios.delete(/users/${todoId});
🧠 State Management
This project uses React's useReducer() for centralized state management.
Reducer actions include:
📥 GET_TODOS
➕ ADD_TODO
🔄 UPDATE_STATUS
✏️ EDIT_TODO
🗑️ DELETE_TODO
🔍 SET_FILTER
🚀 Getting Started
1️⃣ Clone the Repository
git clone YOUR_GITHUB_REPOSITORY_URL
2️⃣ Go to Project Folder
cd todo-app
3️⃣ Install Dependencies
npm install
4️⃣ Start JSON Server
npx json-server --watch db.json --port 3000
5️⃣ Start React Application
npm run dev
📱 Responsive Design
The Todo App is designed to work across different screen sizes:
💻 Desktop
📱 Mobile
📲 Tablet
🎯 Learning Outcomes
Through this project, I practiced:
⚛️ React Components
🎣 React Hooks
🧠 useReducer
📝 Form Handling
🔄 CRUD Operations
🌐 REST API Integration
📡 Axios
🔍 Filtering Data
📱 Responsive CSS
🗂️ Component-based Architecture
📸 Project Preview
Add your project screenshots here.
📝 Todo App
      ↓
➕ Add Todo
      ↓
📋 Todo List
      ↓
✏️ Edit | 🔄 Status | 🗑️ Delete
      ↓
🔍 Filter Todos
🚀 Future Improvements
Some features that can be added in the future:
🌙 Dark Mode
🔎 Search Todos
📅 Due Dates
🔔 Notifications
📊 Todo Statistics
👤 User Authentication
☁️ Cloud Database

💼 LinkedIn
👉 Connect with me :-https://www.linkedin.com/in/sakthi-saravanakani/
