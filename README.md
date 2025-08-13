# Turmeric حلال Pakistani & Indian Restaurant Website

A modern, responsive website for Turmeric Restaurant in Porto, Portugal. Built with React, TypeScript, Tailwind CSS, and deployed as a static site on GitHub Pages.

## 🌟 Features

- **Bilingual Support**: English and Portuguese
- **Responsive Design**: Mobile-first approach with elegant animations
- **Modern UI**: Beautiful design with botanical elements and luxury feel
- **Interactive Components**: Smooth animations and hover effects
- **Contact Forms**: Integrated with Formspree for reservation handling
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Optimized images and efficient code splitting

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Local Development

1. Clone the repository:

```bash
git clone https://github.com/Nathgouvea/Turmeric.git
cd Turmeric
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow that automatically deploys the site when you push to the main branch.

1. **Enable GitHub Pages**:

   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"

2. **Update the base URL**:

   - Open `vite.config.ts`
   - Update the `base` property to match your repository name:

   ```typescript
   base: "/your-repository-name/";
   ```

3. **Update the homepage URL**:

   - Open `package.json`
   - Update the `homepage` field:

   ```json
   "homepage": "https://yourusername.github.io/your-repository-name"
   ```

4. **Push to main branch**:

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

The site will be automatically built and deployed! 🎉

### Manual Deployment

If you prefer manual deployment:

```bash
npm run build
npm run deploy
```

## 🛠️ Built With

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Tailwind CSS v4** - Styling
- **Motion** - Animations
- **Vite** - Build Tool
- **Lucide React** - Icons
- **Radix UI** - Accessible Components

## 📁 Project Structure

```
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   └── figma/           # Figma-specific components
├── contexts/            # React contexts
├── pages/               # Page components
├── styles/              # CSS files
├── public/              # Static assets
└── utils/               # Utility functions
```

## 🎨 Customization

### Colors

The primary brand color is defined in the CSS variables:

- Primary Gold: `#e0aa22`
- Update in `styles/globals.css` if needed

### Fonts

Using Google Fonts:

- **Great Vibes** - For elegant headings
- **Inter** - For body text

### Content

Update content by modifying the translation files in the language context or directly in components.

## 📧 Contact Form

The reservation form uses [Formspree](https://formspree.io/) for handling submissions. To update:

1. Create a Formspree account
2. Get your form endpoint
3. Update the endpoint in `components/Reservations.tsx`

## 🔧 Configuration

### Environment Variables

No environment variables are needed for the static build. All configuration is done through the codebase.

### SEO

Update meta tags in `index.html` for your specific deployment:

- Title tags
- Meta descriptions
- Open Graph tags
- Favicon

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern restaurant websites
- Images from Unsplash
- Icons from Lucide React
- UI components from Radix UI

---

**Turmeric Restaurant** - R. Formosa 429, 4000-253 Porto, Portugal  
📞 +351 22 208 6926 | 🕒 Daily 15:00–23:00
