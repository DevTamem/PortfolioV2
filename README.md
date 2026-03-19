# Personal Portfolio Website

A warm, inviting personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Warm, creamy beige color palette
- Smooth scroll animations with Framer Motion
- Responsive design
- Multiple sections: Hero, About, Skills, Projects, Contact
- Featured project showcase (Projecty)
- Optimized performance with Next.js 14

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Sora (headings) + Inter (body)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                    # Next.js app router
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   ├── sections/          # Page sections
│   ├── layout/            # Layout components
│   └── shared/            # Shared components
├── lib/
│   ├── utils.ts           # Utility functions
│   └── data.ts            # Site data and content
└── public/
    └── images/            # Static images
```

## Customization

### Update Personal Information

Edit `lib/data.ts` to update:
- Your name
- Bio and about text
- Email and social links
- Skills list
- Project details

### Add Your Profile Picture

1. Add your image to `public/images/profile.jpg`
2. Uncomment the Image component in `components/sections/Hero.tsx` (line 104-110)
3. Remove or comment out the placeholder initials div

### Color Palette

The warm color palette is defined in `tailwind.config.ts`. You can adjust the colors to match your preference while maintaining the warm, inviting feel.

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Deploy easily on Vercel:
- Connect your GitHub repository to Vercel
- Vercel will automatically detect Next.js and configure the build settings

## License

MIT
