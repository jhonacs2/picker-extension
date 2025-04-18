# 🔥 Angular Chrome Extension Starter

This project is a **Google Chrome Extension** powered by **Angular**, designed to help developers quickly scaffold a real-world extension using familiar Angular tooling and architecture.

## 🚀 Features

- ✅ Built with Angular 18
- ✅ Chrome Manifest V3 support
- ✅ Popup UI with Angular components
- ✅ Background Service Worker
- ✅ Content Scripts support
- ✅ Message passing between components
- ✅ Permissions: `storage`, `tabs`, `scripting`, etc.
- ✅ Easy to build and publish

---

## 🧠 About the Project

This extension was created as part of a technical talk on **"Building Chrome Extensions with Angular"**. It demonstrates how to structure an Angular app to fit into Chrome's extension ecosystem while following security rules and best practices (CSP, permissions, etc.).

---

## 🗂️ Project Structure

```
src/
├── app/                 # Angular app components
├── background.js        # Service worker logic
├── content-script.js    # Logic injected into webpages
├── manifest.json        # Chrome extension manifest
├── index.html           # Popup UI
```

---

## 🛠️ Build & Run

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Build the project**
   ```bash
   ng build --configuration production
   ```

3. **Load into Chrome**
  - Open `chrome://extensions`
  - Enable **Developer Mode**
  - Click **Load unpacked**
  - Select the `dist/` folder that contains your compiled extension

---

## 🧩 Manifest Permissions Used

```json
"permissions": [
  "storage",
  "tabs",
  "scripting"
],
"host_permissions": [
  "<all_urls>"
]
```

> These permissions allow the extension to store data, read tab info, and inject scripts into pages.

---

## 💬 Communication (Message API)

- The popup communicates with the background and content scripts using `chrome.runtime.sendMessage()` and `chrome.runtime.onMessage`.
- Background scripts can relay or process requests and trigger responses back to the UI.

---

---

## 🧪 Want to contribute?

Feel free to fork this project, customize it, or use it as a boilerplate for your own Chrome extension projects!


---

## 🧠 Credits

Created by [Jhonacs]  
Talk: **"How to Build Chrome Extensions with Angular"**  
Feel free to reach out on [LinkedIn](https://www.linkedin.com/in/jhonasoto/) or contribute via GitHub.

---

## 📃 License

[MIT](LICENSE)
