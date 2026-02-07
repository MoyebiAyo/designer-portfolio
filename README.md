# Graphic Designer Portfolio Website

A modern, visually striking portfolio website for a graphic designer built with Next.js 14, TypeScript, and Tailwind CSS. Integrated with Sanity CMS for dynamic content management and GitHub for version control.

## Features

✨ **Modern Design**
- Clean, minimal layout with generous white space
- Bold typography with Space Grotesk and Inter fonts
- Smooth CSS animations and hover effects
- Dark mode support with easy toggle

🎨 **Sections**
- **Hero**: Bold introduction with call-to-action
- **Portfolio Gallery**: Filterable grid showcasing projects
- **Case Studies**: Detailed project pages with process breakdown
- **About**: Personal bio with skills showcase
- **Services**: Grid of offered design services
- **Testimonials**: Client feedback cards
- **Contact**: Form and social media links

📱 **Fully Responsive**
- Mobile-first design
- Optimized for all screen sizes
- Touch-friendly interactions

⚡ **Performance Optimized**
- Next.js Image optimization
- Static generation for fast loading
- SEO-friendly metadata
- Lighthouse score optimized

## Getting Started

### Prerequisites

Make sure you have Node.js installed (v18 or higher recommended):
- Download from: https://nodejs.org/

### Installation

1. Open a new terminal/PowerShell window (important: close and reopen after installing Node.js)

2. Navigate to the project directory:
```bash
cd path\to\designer-portfolio
```

3. Install dependencies:
```bash
npm install
```

4. Run the development server:
```bash
npm run dev
```

5. Open your browser and visit:
```
http://localhost:3000
```

## Project Structure

```
designer-portfolio/
├── app/
│   ├── components/         # React components
│   │   ├── Navigation.tsx  # Sticky nav with dark mode toggle
│   │   ├── Hero.tsx        # Hero section
│   │   ├── PortfolioGallery.tsx  # Project grid
│   │   ├── ProjectCard.tsx       # Individual project card
│   │   ├── About.tsx       # About section
│   │   ├── Services.tsx    # Services grid
│   │   ├── Testimonials.tsx  # Client testimonials
│   │   ├── Contact.tsx     # Contact form
│   │   ├── Footer.tsx      # Site footer
│   │   └── ThemeProvider.tsx  # Dark mode provider
│   ├── data/              # Content data
│   │   ├── projects.ts    # Portfolio projects
│   │   ├── testimonials.ts  # Client testimonials
│   │   └── content.ts     # Site content
│   ├── types/             # TypeScript interfaces
│   │   └── index.ts
│   ├── projects/          # Dynamic project pages
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── public/                # Static assets
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies

```

## Customization

### Update Content

1. **Personal Information** (`app/data/content.ts`):
   - Edit hero headline and tagline
   - Update about section (name, bio, skills)
   - Change contact email and social links

2. **Projects** (`app/data/projects.ts`):
   - Replace sample projects with your work
   - Update project images (use your own or Unsplash URLs)
   - Customize project descriptions and case studies

3. **Testimonials** (`app/data/testimonials.ts`):
   - Add real client testimonials
   - Include client avatars

4. **Services** (`app/data/content.ts`):
   - Customize service offerings
   - Update descriptions

### Replace Images

Replace placeholder images with your own:
- Use the `public/` folder for local images
- Or use external image URLs (already configured for Unsplash)

### Color Scheme

Edit colors in `tailwind.config.ts`:
```typescript
colors: {
  accent: {
    sage: "#8B9D83",  // Change accent colors
    beige: "#D4C5B9",
    charcoal: "#2D2D2D",
  },
}
```

### Fonts

Change fonts in `app/layout.tsx`:
```typescript
import { YourFont, AnotherFont } from "next/font/google";
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Other Platforms

- **Netlify**: Drag and drop the `.next` folder
- **AWS/GCP**: Use Next.js standalone output
- **Any hosting**: Run `npm run build` and deploy the `.next` folder

## Contact Form Setup

The contact form is currently simulated. To make it functional:

1. **Option 1 - Web3Forms** (Easy):
   - Sign up at [web3forms.com](https://web3forms.com)
   - Get your access key
   - Update the form submission in `app/components/Contact.tsx`

2. **Option 2 - Email Service**:
   - Use services like SendGrid, Mailgun, or Resend
   - Add API route in `app/api/contact/route.ts`

3. **Option 3 - Formspree**:
   - Sign up at [formspree.io](https://formspree.io)
   - Update form action

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **next-themes** - Dark mode support
- **Google Fonts** - Inter & Space Grotesk

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.

## Support

For issues or questions:
- Check the Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind CSS docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

**Note**: All sample images are from Unsplash. Replace them with your own work before deploying to production.

Enjoy building your portfolio! 🎨
