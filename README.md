# 💫 Harshada Talele — Personal Portfolio

A responsive, single-page personal portfolio website built from scratch with **HTML5, CSS3 and vanilla JavaScript** — no frameworks, no build step.

🔗 **Live Demo:** _add your GitHub Pages link here_

---

## ✨ Features

- **Fully responsive** — works on mobile, tablet and desktop
- **Dark / light mode** with a toggle that remembers your choice (`localStorage`)
- **Typing animation** in the hero section
- **Scroll reveal animations** using the Intersection Observer API
- **Active-link highlighting** as you scroll through sections
- **Mobile hamburger menu**
- **Contact form** with client-side validation
- **Downloadable resume** (PDF)
- Accessible: keyboard-friendly, respects `prefers-reduced-motion`

---

## 🛠️ Built With

| Tech | Used for |
|------|----------|
| HTML5 | Semantic page structure |
| CSS3 | Custom properties, Grid, Flexbox, animations |
| JavaScript (ES6) | Theme toggle, typing effect, scroll reveal, form validation |
| Google Fonts | Fraunces + Inter |

---

## 📂 Project Structure

```
harshada-portfolio/
├── index.html                     # Page structure & content
├── style.css                      # All styling + theme tokens
├── script.js                      # Interactivity
├── README.md
└── assets/
    └── Harshada-Talele-Resume.pdf
```

---

## 🚀 Run It Locally

```bash
git clone https://github.com/<your-username>/harshada-portfolio.git
cd harshada-portfolio
```

Then just open `index.html` in a browser — or serve it:

```bash
python -m http.server 8000
# visit http://localhost:8000
```

---

## 🌐 Deploy on GitHub Pages

1. Push this folder to a new GitHub repository
2. Go to **Settings → Pages**
3. Under *Source*, pick branch `main` and folder `/ (root)`
4. Save — your site goes live at `https://<your-username>.github.io/harshada-portfolio/`

---

## ✏️ Customising

| What to change | Where |
|----------------|-------|
| Name, text, sections | `index.html` |
| Colours & theme | `:root` variables at the top of `style.css` |
| Typing-effect phrases | `words` array in `script.js` |
| Project cards | `<section id="projects">` in `index.html` |
| Contact form emails | set `ENDPOINT` in `script.js` to a [Formspree](https://formspree.io) URL |

---

## 📬 Contact

- **Email:** harshadatalele2706@gmail.com
- **Phone:** +91 90048 72057
- **LinkedIn:** [Harshada Talele](https://www.linkedin.com/in/harshada-talele)
- **Location:** Kalyan East, Maharashtra, India

---

<p align="center">Made with ❤️ and a lot of coffee.</p>
