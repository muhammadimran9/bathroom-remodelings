# Bathroom Remodeling Website

A modern, responsive website for bathroom remodeling services built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Quick Deploy

### Deploy to Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/your-repo)

1. Click the deploy button above
2. Connect your GitHub account
3. Configure environment variables (optional)
4. Deploy!

### Deploy to Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/your-username/your-repo)

1. Click the deploy button above
2. Connect your GitHub account
3. Site will auto-deploy on every push to main branch

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd remodeling

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
├── components/            # Reusable React components
│   ├── home/             # Homepage components
│   ├── layout/           # Layout components
│   ├── services/         # Service-related components
│   └── ui/               # UI components (shadcn/ui)
├── lib/                  # Utility functions and configurations
├── public/               # Static assets
├── styles/               # Global styles
└── types/                # TypeScript type definitions
```

## 🎨 Features

- ✅ **Responsive Design** - Works on all devices
- ✅ **SEO Optimized** - Meta tags, schema markup, sitemap
- ✅ **Performance** - Optimized images, lazy loading
- ✅ **Accessibility** - WCAG compliant
- ✅ **Modern UI** - Tailwind CSS, Framer Motion animations
- ✅ **Type Safe** - Full TypeScript support
- ✅ **Admin Dashboard** - Content management
- ✅ **Contact Forms** - Lead generation
- ✅ **Blog System** - Content marketing
- ✅ **Gallery** - Project showcase

## 🔧 Configuration

### Environment Variables
Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

### Site Configuration
Edit `lib/site-config.ts` to customize:
- Business information
- Contact details
- Service areas
- Social media links

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Build the project
npm run build

# Deploy to Netlify (using Netlify CLI)
npm i -g netlify-cli
netlify deploy --prod --dir=.next
```

## 🔍 SEO Features

- **Meta Tags** - Dynamic meta descriptions and titles
- **Open Graph** - Social media sharing optimization
- **Schema Markup** - Local business and FAQ schemas
- **Sitemap** - Auto-generated XML sitemap
- **Robots.txt** - Search engine crawling instructions

## 🎯 Performance

- **Core Web Vitals** - Optimized for Google's performance metrics
- **Image Optimization** - Next.js Image component with WebP/AVIF
- **Code Splitting** - Automatic route-based code splitting
- **Caching** - Optimized caching strategies

## 📱 Pages Included

- **Homepage** - Hero, services, testimonials, CTA
- **Service Pages** - Detailed service descriptions
- **About** - Company information
- **Gallery** - Project showcase
- **Blog** - Content marketing
- **Contact** - Contact form and information
- **Admin Dashboard** - Content management

## 🛡️ Security

- **Headers** - Security headers configured
- **HTTPS** - SSL/TLS encryption
- **Input Validation** - Form validation and sanitization
- **Environment Variables** - Sensitive data protection

## 📞 Support

For deployment issues or questions:
1. Check the deployment logs
2. Verify environment variables
3. Ensure all dependencies are installed
4. Check the build output for errors

## 📄 License

This project is licensed under the MIT License.

---

**Ready to deploy!** 🚀 Choose your preferred platform and get your bathroom remodeling website live in minutes.