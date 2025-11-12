# Kenneth Frencher - Professional Portfolio

A modern, responsive portfolio website built with Astro and Tailwind CSS, showcasing professional experience, projects, and technical papers.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Mobile-first design that looks great on all devices
- **Fast Performance**: Built with Astro for optimal loading speeds
- **Easy Content Management**: Simple structure for updating projects and papers
- **GitHub Pages Ready**: Automated deployment with GitHub Actions

## 📂 Project Structure

```
bio-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/                     # Static assets
├── src/
│   ├── components/
│   │   ├── ProjectCard.astro   # Reusable project card component
│   │   └── PaperCard.astro     # Reusable paper card component
│   ├── layouts/
│   │   └── BaseLayout.astro    # Main layout with navbar and footer
│   ├── pages/
│   │   ├── index.astro         # Landing page
│   │   ├── about.astro         # About page
│   │   ├── projects.astro      # Projects showcase
│   │   ├── papers.astro        # Technical papers
│   │   └── contact.astro       # Contact information
├── astro.config.mjs            # Astro configuration
├── tailwind.config.mjs         # Tailwind CSS configuration
└── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kfrencher/kfrencer-bio-site.git
cd kfrencer-bio-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321`

## 📝 Development Commands

| Command           | Action                                       |
|-------------------|----------------------------------------------|
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start local dev server at `localhost:4321`   |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview your build locally before deploying  |

## 🚢 Deployment to GitHub Pages

This site is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Create a new GitHub repository** (if you haven't already)

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" in the sidebar
   - Under "Build and deployment", set Source to "GitHub Actions"

3. **Update the site URL** in `astro.config.mjs`:
   ```js
   export default defineConfig({
     site: 'https://yourusername.github.io',
     // If using a custom domain:
     // site: 'https://yourdomain.com',
   });
   ```

4. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/bio-website.git
   git push -u origin main
   ```

5. **Automatic Deployment**: 
   - Every push to the `main` branch triggers automatic deployment
   - View deployment status in the "Actions" tab of your repository
   - Your site will be live at `https://yourusername.github.io/bio-website/`

## ✏️ Customization

### Adding Projects

Edit `src/pages/projects.astro` and add your project to the `projects` array:

```js
{
  title: "Project Name",
  description: "Project description...",
  tech: ["Technology1", "Technology2"],
  github: "https://github.com/yourusername/project",
  type: "Library" // or "Tool", "Component", etc.
}
```

### Adding Papers

Edit `src/pages/papers.astro` and add your paper to the `papers` array:

```js
{
  title: "Paper Title",
  description: "Paper description...",
  date: "2024",
  tags: ["Tag1", "Tag2"],
  link: "https://link-to-paper.com"
}
```

### Updating Contact Information

Edit `src/pages/contact.astro` and update the contact links and information.

### Changing Colors and Styling

Modify `tailwind.config.mjs` to customize the color scheme and styling to match your personal brand.

## 🎨 Technologies Used

- **[Astro](https://astro.build)** - Modern static site generator
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[GitHub Pages](https://pages.github.com)** - Free hosting
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD automation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Kenneth Frencher - [kfrencher@triviumsoftware.com](mailto:kfrencher@triviumsoftware.com)

Project Link: [https://github.com/kfrencher/kfrencer-bio-site](https://github.com/kfrencher/kfrencer-bio-site)
