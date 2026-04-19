# obys_agency
import ds_python_interpreter

# Creating the README.md content based on the user's specific tech stack and challenges.
readme_content = """# Obys Agency Concept 🚀

A high-end, award-winning inspired front-end development project. This project is a pixel-perfect recreation of the **Obys Agency** website, built to demonstrate advanced capabilities in modern CSS, DOM manipulation, and GSAP motion design.

## 🛠 Tech Stack
* **Core:** HTML5, Advanced CSS3 (Flexbox/Grid), JavaScript (ES6+)
* **Animation Engine:** GSAP (GreenSock Animation Platform)
* **Aesthetics:** Editorial Design, High-Contrast Typography

## ✨ Key Features
* **Immersive Typography:** Blending serif and sans-serif fonts with distinct italic accents to achieve a luxury brand feel.
* **Custom Cursor System:** A smooth, lag-following cursor that interacts with different sections of the page.
* **GSAP Powered Reveals:** Sophisticated entry animations for text and images using GSAP timelines.
* **Responsive Editorial Layout:** A dark-mode aesthetic that maintains visual integrity across all screen sizes.

## 🧠 Technical Challenges & Solutions

### 1. Mastering GSAP & DOM Integration
Linking GSAP with a multi-section HTML structure was a significant hurdle. I moved beyond basic transitions to create complex **Timelines**, ensuring that animations like the "01, 02..." numbering and the headers synced perfectly with the user's scroll position.

### 2. Advanced Text Masking
To achieve the iconic Obys "reveal" effect, I implemented text masking by wrapping headings in overflow-hidden containers. By manipulating the `y` and `skew` properties of the inner text through GSAP, I created a professional "sliding-in" look that is common in award-winning portfolios.

### 3. Smooth Custom Cursor
The challenge was making the cursor feel fluid rather than "stiff." By using JavaScript to track mouse coordinates and applying a GSAP-based delay, I achieved a "weighty" cursor movement that enhances the premium feel of the site.

### 4. Visual Asset Curation
Finding imagery that matched the high-fashion/editorial vibe was difficult. I focused on monochrome and high-contrast photography to ensure the "Vogue-style" layout (as seen in Section 02) felt authentic and high-end.



---
Developed with ❤️ by SHUBH
"""

with open('README.md', 'w') as f:
    f.write(readme_content)