# 🏀 getNbaLogos API

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://render.com/)

**getNbaLogos** is a specialized REST API that returns NBA team logos from different time periods. Deployed on Render, this API allows users to query historical branding based on the `teamName` and `teamYear`.

🔗 **API Endpoint:** [nbalogosapi-1.onrender.com](https://nbalogosapi-1.onrender.com)

---

## 📖 Table of Contents
* [Features](#-features)
* [API Usage](#-api-usage)
* [Tech Stack](#-tech-stack)
* [Getting Started](#-getting-started)
* [Project Structure](#-project-structure)

---

## ✨ Features
* **Historical Database:** Access logos from various NBA eras.
* **Smart Querying:** Filter results using specific parameters.
* **Middleware Integration:** Built-in sanitization and query validation.
* **Modular Logic:** Clean controller pattern to keep the main app file lightweight.

---

## 🛠️ Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Validation:** Custom Middleware
* **Deployment:** Render

---

## 🚀 Getting Started

### Prerequisites
* Node.js (Latest LTS)
* npm

### Installation
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Akiuui/getNbaLogos.git](https://github.com/Akiuui/getNbaLogos.git)
