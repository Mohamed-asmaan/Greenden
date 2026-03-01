# Greenden

A responsive plant shop website built with HTML and Tailwind CSS. Features indoor plants, outdoor plants, and artificial flowers with a clean, nature-inspired design.

## Features

- **Home** – Hero section, about us, best sellers, customer reviews, newsletter signup
- **Products** – Product catalog with search and plant cards
- **Contact** – Contact form with plant interest and inquiry type options

## Tech Stack

- HTML5
- [Tailwind CSS](https://tailwindcss.com/) v4

## Project Structure

```
├── index.html          # Homepage
├── product.html        # Product catalog
├── contact.html        # Contact page
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

| Page       | Description                          |
| ---------- | ------------------------------------ |
| index.html | Homepage with hero, about, best sellers, reviews |
| product.html | Product grid with 8 plant varieties |
| contact.html | Contact form with banner and industry-specific fields |

## License

MIT
