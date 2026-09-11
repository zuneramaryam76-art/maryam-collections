# The Maryam Collection - Fine Jewellery & Atelier Management System
### 3rd Year B.Tech Computer Science / Information Technology Mini Project Report

---

## 📌 Project Overview
**The Maryam Collection** is an online luxury fine jewellery shopping & inventory management system built completely with **Vanilla Web Technologies (HTML5, CSS3, and ES6 JavaScript)** without external JavaScript frameworks or backend databases.

---

## 🛠️ Technology Stack
1. **Frontend Structure**: Semantic HTML5 (`index.html`)
2. **Styling & Design**: Vanilla CSS3 Custom Properties, Glassmorphism, CSS Grid & Flexbox (`style.css`)
3. **Behavior & Logic**: ES6+ JavaScript, DOM Manipulation, Event Listeners, LocalStorage API (`script.js`)
4. **Icons & Fonts**: FontAwesome 6, Google Fonts (`Cormorant Garamond` & `Outfit`)

---

## 🛍️ Customer View Modules
1. **Collections & Shop**: Dynamic catalog rendering with live category pills, metal filters, and real-time search autocomplete.
2. **Laser Customizer Studio**: Metal purity selection (18K Gold, Rose Gold, Platinum) with dynamic price calculation and live laser text rendering inside ring bands.
3. **Shopping Bag & Authentic Certificate**: Itemized cart management, promo discount application, and printable **Certificate of Authenticity & Purchase Receipt Modal**.
4. **Track Order**: Real-time customer order tracking timeline lookup.

---

## ⚙️ Atelier Manager Portal (Admin Mode)
- Accessible via the top-right `Admin Portal` toggle button.
- Includes **Stock Registry (CRUD)** to add new jewellery, edit stock levels inline, and manage orders CRM.

---

## 🎓 Viva Voce Questions & Answers (For B.Tech Exam)

**Q1: How is data stored without a backend database like MySQL or MongoDB?**  
*Answer:* The application uses the HTML5 `localStorage` Web Storage API (`localStorage.setItem()` and `localStorage.getItem()`). Data is stored as JSON strings in the client's browser and persists across browser refreshes.

**Q2: How does the live laser inscription engine work?**  
*Answer:* The text input triggers an `input` event listener in JavaScript (`oninput`), which immediately updates the inner text (`textContent`) of a styled CSS preview band container with real-time text shadow & Garamond typography.

**Q3: How does the category filtering work dynamically?**  
*Answer:* Products are stored in an array of JavaScript objects. When a user selects a category pill or types in the search bar, `Array.prototype.filter()` filters the array in real-time and re-renders the DOM grid using `.map().join('')`.

**Q4: Is the layout responsive for mobile devices?**  
*Answer:* Yes, using CSS3 Media Queries (`@media (max-width: 900px)`), CSS Grid (`minmax(280px, 1fr)`), and Flexbox, the UI seamlessly adapts to screens of all sizes.
