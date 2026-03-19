# Quick Start Guide

## Your Portfolio is Ready!

### Run Development Server
```bash
npm run dev
```
Then visit http://localhost:3000 (or 3001 if 3000 is in use)

### Build for Production
```bash
npm run build
npm start
```

## Customize Your Portfolio

### 1. Update Personal Info
Edit `lib/data.ts` and replace:
- `name: 'Your Name'` → your actual name
- `email: 'your.email@example.com'` → your email
- `github: '#'` → your GitHub URL (e.g., 'https://github.com/yourusername')
- `linkedin: '#'` → your LinkedIn URL

### 2. Add Your Profile Picture
1. Save your photo as `public/images/profile.jpg`
2. Open `components/sections/Hero.tsx`
3. Go to lines 104-110 and **uncomment** the Image component
4. Delete or comment out the placeholder div above it (lines 97-102)

### 3. Update Project Links
In `lib/data.ts`, update the Projecty project links:
- `github: '#'` → your actual GitHub repo URL
- `live: '#'` → your deployed project URL

### 4. Add More Projects
In `lib/data.ts`, add more projects to the `projects` array following the same structure as Projecty.

## File Structure

**Main sections**: `components/sections/`
- Hero.tsx
- About.tsx
- Skills.tsx
- Projects.tsx
- Contact.tsx

**Data**: `lib/data.ts` - All your personal info, skills, projects

**Styling**: `tailwind.config.ts` - Color palette and theme

## Deploy

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Other Platforms
- **Netlify**: Also auto-detects Next.js
- **Railway**: Supports Next.js deployments
- **Self-hosted**: Run `npm run build && npm start`

## Need Help?

Check the main README.md for more detailed information.
