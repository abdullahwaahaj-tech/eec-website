# Echoes of Earth Council (EEC) - Production Website

A cinematic, premium digital experience for an emerging international environmental and humanitarian organization.

## 🌍 Overview

Echoes of Earth Council is building a global movement focused on environmental protection, sustainability, education, research, community development, and humanitarian impact.

This website is designed to:
- Communicate the organization's mission globally
- Enable community engagement (internships, support, contact)
- Prepare for future platform expansion (courses, projects, events)
- Deliver a premium, trustworthy digital experience

## 🚀 Technology Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **3D**: Three.js, React Three Fiber
- **Backend**: Supabase
- **Email**: Resend
- **Deployment**: Vercel

## 📋 Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── (pages)/
│   │   │   ├── about/
│   │   │   ├── mission/
│   │   │   ├── vision/
│   │   │   ├── news/
│   │   │   ├── internships/
│   │   │   ├── support/
│   │   │   ├── contact/
│   │   │   ├── coming-soon/
│   │   │   └── ...
│   │   └── api/
│   │       ├── contact/
│   │       ├── internships/
│   │       ├── newsletter/
│   │       └── ...
│   ├── components/
│   │   ├── layout/
│   │   ├── hero/
│   │   ├── forms/
│   │   ├── animations/
│   │   └── ...
│   ├── lib/
│   │   ├── supabase.ts
│   │   ├── email.ts
│   │   ├── validators.ts
│   │   └── ...
│   └── types/
│       └── index.ts
├── public/
├── sql/
│   └── migrations/
├── .env.example
└── README.md
```

## 🔧 Installation & Setup

### 1. Clone & Install

```bash
git clone https://github.com/abdullahwaahaj-tech/eec-website.git
cd eec-website
npm install
```

### 2. Environment Configuration

```bash
cp .env.example .env.local
```

Fill in your credentials:
- Supabase credentials (create at supabase.com)
- Resend API key (create at resend.com)
- Site configuration

### 3. Database Setup

Run migrations in Supabase SQL editor:

```bash
# See sql/migrations/ for SQL files
```

Or use Supabase CLI:

```bash
supabase migration up
```

### 4. Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📄 Pages

### Active Pages
- **Home** - Cinematic storytelling experience with 3D Earth
- **About Us** - Organization background & vision
- **Mission** - Core mission statement & objectives
- **Vision** - Future vision & global impact
- **News** - Updates & announcements
- **Internships & Opportunities** - Application system
- **Support Us** - Donations, sponsorships, partnerships
- **Contact** - Contact form & information

### Coming Soon Pages
- **Projects** - Environmental & humanitarian projects
- **Events** - Global events & webinars
- **Research Hub** - Research papers & data
- **Courses** - Educational platform
- **Team** - Leadership & team members
- **Partnerships** - Partner organizations
- **Impact Dashboard** - Real-time impact metrics
- **Member Portal** - Member-exclusive resources

## 🔌 API Integration

### Contact Form
- Endpoint: `POST /api/contact`
- Stores in Supabase
- Sends email via Resend
- Full validation & error handling

### Internship Applications
- Endpoint: `POST /api/internships`
- Resume file upload to Supabase Storage
- Email confirmation
- Admin notifications

### Newsletter
- Endpoint: `POST /api/newsletter`
- Email capture & storage
- Validation

## 🎨 Design System

### Color Palette
- **Primary Dark**: `#08120D`
- **Forest Green**: `#0F5132`
- **Growth Green**: `#1E8F5A`
- **Ocean Blue**: `#0F4C81`
- **Gold Accent**: `#D4AF37`
- **Soft White**: `#F8FAF7`
- **Text Dark**: `#111827`

### Typography
- **Headings**: Clash Display
- **Body**: Inter
- **Accent**: Cormorant Garamond

### Features
- Dark mode + Light mode
- Responsive design (mobile-first)
- Accessibility (WCAG compliance)
- Premium animations
- Smooth transitions

## 📊 Database Schema

See `sql/migrations/` for complete schema including:
- `contact_submissions`
- `internship_applications`
- `newsletter_signups`
- `users` (future platform)
- `members` (future platform)
- `volunteers` (future platform)
- `courses` (future platform)
- `projects` (future platform)
- `events` (future platform)

## 🔐 Security

- Row-Level Security (RLS) on all tables
- Protected admin endpoints
- Email verification
- Input validation (Zod schemas)
- Environment variable protection
- Rate limiting ready

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Push to GitHub
git push origin main

# Deploy on Vercel
# Connect repo at vercel.com
# Add environment variables
# Deploy
```

### Environment Variables for Production

Set in Vercel dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_ADMIN_EMAIL`
- `NEXT_PUBLIC_SITE_URL`

## 📈 Performance Targets

- Lighthouse Score: 95+
- Mobile-first responsive
- Code splitting & lazy loading
- Optimized images
- Minimal bundle size

## ♿ Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- Semantic HTML
- Accessible forms
- Color contrast

## 🔍 SEO

- Meta tags & Open Graph
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt
- Dynamic meta tags per page

## 📝 Content Guidelines

### No Fabricated Information

Placeholders are clearly marked: "Content To Be Added By EEC"

Never create:
- Fake team members
- Fabricated impact numbers
- Invented testimonials
- Made-up projects
- Fictional partnerships
- False statistics

Authenticity is paramount.

## 🤝 Contributing

1. Create a feature branch
2. Make changes
3. Test thoroughly
4. Submit PR
5. Code review
6. Merge to main

## 📞 Support

For questions or issues:
- Email: [Content To Be Added By EEC]
- GitHub Issues: [This repository]

## 📄 License

[Content To Be Added By EEC]

---

**Built with premium design and production-ready code.**

*Empowering Humanity. Protecting Nature. Shaping Tomorrow.*
