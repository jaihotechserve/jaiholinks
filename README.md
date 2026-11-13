# Jaiho Links

**One ecosystem. Every connection.**

Jaiho Links is a simple, responsive directory that brings together the websites and social media links of companies, products, and projects across the Jaiho ecosystem.

🌐 **Live Website:** https://jaiholinks.vercel.app/

---

## About

Jaiho Links makes it easy to discover and access the official online presence of Jaiho companies and their products.

The project is intentionally lightweight. It uses HTML, CSS, and JavaScript without requiring a backend, database, login system, or complicated setup.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Lucide / inline SVG icons
- Vercel for deployment

## Project Structure

```text
jaiho-links/
│
├── index.html
├── style.css
├── script.js
│
├── jlc/
│   ├── jaihodigital.html
│   ├── jaiholabs.html
│   ├── jaihotechserve.html
│   ├── jaihoaimedia.html
│   ├── jaihoedge.html
│   └── jaihokernel.html
│
└── jlp/
    ├── aimicrostories.html
    ├── truepostive.html
    ├── falsenegative.html
    ├── keejpop.html
    └── visioai.html
```

### Folder Guide

| File / Folder | Purpose |
|---|---|
| `index.html` | Main directory page |
| `style.css` | Shared homepage styling |
| `script.js` | Directory entries and homepage functionality |
| `jlc/` | Jaiho company profile pages |
| `jlp/` | Jaiho product profile pages |

---

## Getting Started

You don't need to install any dependencies.

1. Clone the repository:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Open the project folder:

   ```bash
   cd jaiho-links
   ```

3. Open `index.html` in your browser.

That's it! You can also use VS Code with the Live Server extension for local development.

---

## How to Contribute

Contributions are welcome! You can help by adding new company pages, product pages, social media links, or fixing existing information.

### 1. Fork the Repository

Fork the Jaiho Links repository to your GitHub account.

### 2. Clone Your Fork

```bash
git clone YOUR_FORKED_REPOSITORY_URL
```

### 3. Create a New Branch

```bash
git checkout -b add-new-profile
```

### 4. Add a New Profile Page

Choose the appropriate folder:

- `jlc/` for a Jaiho company.
- `jlp/` for a Jaiho product.

Create a new HTML file using a simple, lowercase filename.

For example:

```text
jlp/newproduct.html
```

Use an existing profile page as a reference and follow its layout.

**Profile page guidelines:**

- Keep the design consistent with existing pages.
- Make sure the page is responsive on mobile and desktop.
- Add the official website and social media links.
- Use working URLs.
- Keep the page simple and lightweight.
- Use inline SVG icons following the existing implementation.
- Include a link back to the main Jaiho Links directory.

### 5. Add the Profile to the Directory

Open `script.js` and find the `JAIHO_DIRECTORY` array.

Add your new profile entry using the same object structure and conventions as the existing entries.

Make sure the page path is correct.

For example, a product page would use a path similar to:

```text
jlp/newproduct.html
```

Without this step, your page may exist in the repository but won't appear in the main directory.

### 6. Test Your Changes

Before submitting your contribution, check:

- The homepage loads correctly.
- Your new profile appears in the directory.
- All links open the correct websites.
- Icons are visible.
- The page works on mobile and desktop.
- There are no broken paths or missing files.

### 7. Commit and Push

```bash
git add .
git commit -m "Add new product profile"
git push origin add-new-profile
```

### 8. Submit a Pull Request

Open your fork on GitHub and create a Pull Request against the main Jaiho Links repository.

Include a short description of what you added or changed.

Your contribution will be reviewed before it is merged.

---

## Important Guidelines

1. Do not add unnecessary frameworks, libraries, or dependencies.
2. Do not introduce a backend, database, or authentication system.
3. Do not add JSON-based configuration files. Directory entries belong in `script.js`.
4. Keep the existing folder structure intact.
5. Avoid changing unrelated pages or styles.
6. Use official company and product links wherever possible.
7. Keep the website fast, accessible, and responsive.

---

## Deployment

Jaiho Links is hosted on Vercel.

Once approved changes are merged into the configured deployment branch, Vercel can automatically build and deploy the updated website.

No manual server setup is required.

---

## Maintained By

**Jaiho TechServe**  
Part of **Jaiho Digital**

*Tech for Earth. Tech for All.*

---

## License

Add the project's chosen license here before distributing or reusing the source code.