# Turmeric Restaurant Website

A modern, responsive restaurant website built with React, TypeScript, and Tailwind CSS. Features include multi-language support, online reservations, and a beautiful gallery showcasing the restaurant's atmosphere and cuisine.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Multi-language Support**: Built-in language switching functionality
- **Online Reservations**: Integrated booking system
- **Modern UI Components**: Beautiful, accessible components using shadcn/ui
- **TypeScript**: Full type safety throughout the application
- **Supabase Integration**: Backend services for data management

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **UI Components**: shadcn/ui
- **Backend**: Supabase
- **Icons**: Lucide React

## 📋 Prerequisites

- Node.js 18.0.0 or higher
- npm 8.0.0 or higher
- Git

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/turmeric-restaurant.git
cd turmeric-restaurant
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Fill in your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Start the development server

```bash
npm run dev
```

The application will open at [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```
turmeric/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── ...             # Custom components
├── contexts/            # React contexts (Language, Router)
├── pages/               # Page components
├── styles/              # Global styles and Tailwind config
├── supabase/            # Supabase functions and configuration
├── utils/               # Utility functions
├── App.tsx              # Main application component
└── main.tsx             # Application entry point
```

## 🏗️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🌐 Deployment

### GitHub Pages

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages using GitHub Actions or manually upload the `dist` folder.

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration and deploy

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 🔧 Configuration

### Tailwind CSS

The project uses Tailwind CSS with custom color schemes and typography. Configuration can be found in `tailwind.config.js`.

### Supabase

Ensure your Supabase project is properly configured with the necessary tables and functions for reservations and other features.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS framework
- [Vite](https://vitejs.dev/) for fast build tooling
- [Supabase](https://supabase.com/) for backend services

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the development team.
