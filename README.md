# 🥷 Minimalist Zen Portfolio

A high-performance, aesthetically-driven portfolio built with a focus on motion design, precision, and a "Zen Samurai" aesthetic. This project showcases the intersection of minimalist UI and complex, custom-built animations.

## 🏮 Design Philosophy

The portfolio follows a "Midnight Glass" and "Japanese Traditional" aesthetic, combining dark, moody backgrounds with vibrant gold and crimson accents. The user experience is centered around immersion, featuring environmental effects that bring the digital space to life.

## ⚔️ Animation Suite

This portfolio avoids heavy animation libraries, instead utilizing low-level browser APIs for maximum performance and artistic control.

### 📜 Samurai Cursor
- **Precise Reticle Tracking**: A custom-built SVG cursor that responds with distinct physics.
- **Kanji Bursts (斬, 武, 勝)**: Contextual ink-ripple effects and Kanji eruptions when interacting with elements.
- **Orbital Wisps**: Smoothly rotating orbs that react to mouse velocity and hover states.

### 🌸 Environmental Effects
- **Cherry Blossom (Sakura) Fall**: An organic, non-linear petal falling system with randomized drift, sway, and spin.
- **Dynamic Backgrounds**: Context-aware backgrounds including "Wind Effects", "Snow Fall", and "Floating Kanji" patterns.
- **Scroll Synchronization**: Subtle parallax and progress-linked animations.

### 🗡️ Interactive Components
- **Sword Draw Button**: A unique haptic-style interaction featuring a "shudder" on press, a "blade extension" progress bar, and spark particles.
- **Hanging Lamp Toggles**: Smooth, physics-based UI transitions.
- **Wipe & Slide Transitions**: Custom easing curves for seamless navigation between sections.

## 🛠️ Technology Stack

- **Core**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) for type-safe interaction logic.
- **Motion**: Custom `requestAnimationFrame` hooks and CSS Keyframes.
- **Styling**: Pure CSS and React inline styles for fine-grained control over dynamic properties.
- **Icons**: Custom SVGs and thematic iconography.

## 🚀 Setup & Development

To run the project locally:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

---
*Crafted with precision and spirit.*
