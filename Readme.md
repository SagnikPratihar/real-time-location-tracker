# 🌍 Real-Time Location Tracker

A web app that tracks live GPS locations across multiple users in **real-time** using  
**Node.js, Express, Socket.IO, and Leaflet.js**.

---

## 🚀 Features
- 📍 Tracks live user GPS locations
- 🔄 Updates positions in real-time across all connected users
- 🗺️ Interactive map powered by [Leaflet.js](https://leafletjs.com/)
- 🔌 Built with **Socket.IO** for real-time update
- 🎨 Simple and responsive UI

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express, Socket.IO  
- **Frontend:** HTML, CSS, JavaScript, Leaflet.js  
- **Templating Engine:** EJS  
---

## 📂 Project Structure
```

real-time-location-tracker/
│── app.js              # Main server file
│── package.json        # Project dependencies
│── views/
│   └── index.ejs       # Main UI template
│── public/
│   ├── script.js       # Frontend socket & map logic
│   └── style.css       # Styles 
└── README.md           # Project documentation
```

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/SagnikPratihar/real-time-location-tracker.git
   cd real-time-location-tracker
    ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the server**

   ```bash
   node app.js
   ```

   Server will start at 👉 `http://localhost:3000`

4. **Open in Browser**

   * Visit: `http://localhost:3000`
   * Allow **location access** in the browser
   * Open in multiple tabs/devices to see real-time tracking

---

## 🎯 Usage

* Each connected user shares their **live GPS location**
* All users appear on the **same map** in real-time
* When a user disconnects, their marker is removed












