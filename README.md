# Greenden

A responsive plant shop website built with HTML and Tailwind CSS. Greenden offers a clean, modern user interface that introduces students to real-world website layout practices, focusing on Tailwind's utility-first classes to build attractive and flexible designs.

## Features

### Website Structure
- **Navigation Bar** – Well-structured nav with three key pages (Home, Products, Contact)
- **Home Page** – Eye-catching hero layout with brief introduction to Greenden, About Us, Best Sellers, Customer Reviews, Newsletter signup
- **Products Page** – Collection of green-themed/plant-related products in a neat grid with card layout
- **Contact Page** – Styled contact information (email, phone, address) and organized contact form for user interaction

### Responsive Design
- Layout adapts seamlessly to all screen sizes (mobile, tablet, desktop)
- Built using Tailwind CSS responsive classes (`sm:`, `md:`, `lg:`) for smooth viewport handling
- Professional spacing, alignment, and typography across breakpoints

## Learning Objectives
- Structure a multi-page responsive website using Tailwind CSS
- Work with flexbox, grid, spacing, and text utilities in real-world layouts
- Write clean and maintainable HTML and Tailwind classes
- Create aesthetic and accessible user interfaces

## Tech Stack

- HTML5
- [Tailwind CSS](https://tailwindcss.com/) v4

## Project Structure

```
├── index.html          # Homepage (/)
├── product/
│   └── index.html      # Product catalog (/product)
├── contact/
│   └── index.html      # Contact page (/contact)
├── src/
│   ├── input.css       # Tailwind source
│   ├── output.css      # Compiled CSS
│   └── images/         # Image assets
├── package.json
└── README.md
```

## Setup

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Build Tailwind CSS (if you modify `src/input.css`):

   ```bash
   npx tailwindcss -i ./src/input.css -o ./src/output.css
   ```

4. Open `index.html` in a browser or use a local server

## Pages

| Page       | URL      | Description                          |
| ---------- | -------- | ------------------------------------ |
| index.html | /        | Homepage with hero, about, best sellers, reviews |
| product/   | /product | Product grid with 8 plant varieties |
| contact/   | /contact | Contact form with banner and industry-specific fields |

## Outcome
By completing the Greenden project, you will have built a responsive, multi-page website using HTML and Tailwind CSS. You gain experience in designing modern, user-friendly layouts that work across devices, enhancing your portfolio with a polished, professional web project.

## License

MIT
