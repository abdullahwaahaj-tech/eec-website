# Echoes of Earth Council - Website Repository

## 🌍 Complete Production Deployment

This is a **fully deployable, production-ready** Next.js website for Echoes of Earth Council.

### ✅ What's Included

#### Pages
- ✅ Home (cinematic 3D Earth hero)
- ✅ About Us
- ✅ Mission
- ✅ Vision
- ✅ News & Updates
- ✅ Contact (fully functional)
- ✅ Internships & Opportunities (with application system)
- ✅ Support Us
- ✅ Coming Soon: Projects, Events, Research, Courses, Team, Partnerships, Impact Dashboard, Member Portal

#### Features
- ✅ Responsive design (mobile-first)
- ✅ Dark mode + Light mode
- ✅ Premium animations (Framer Motion, GSAP)
- ✅ 3D Earth visualization (Three.js)
- ✅ Contact form (email integration)
- ✅ Internship application system (file upload)
- ✅ Newsletter signup
- ✅ SEO optimized (sitemap, robots.txt, metadata)
- ✅ WCAG accessibility
- ✅ Performance optimized

#### Backend & Integration
- ✅ Supabase database (PostgreSQL)
- ✅ Resend email service
- ✅ Form validation (Zod)
- ✅ Type safety (TypeScript)
- ✅ API routes
- ✅ Row-Level Security (RLS)
- ✅ File storage

#### Database
- ✅ contact_submissions
- ✅ internship_applications
- ✅ newsletter_signups
- ✅ users (future platform)
- ✅ members (future platform)
- ✅ volunteers (future platform)
- ✅ courses (future platform)
- ✅ projects (future platform)
- ✅ events (future platform)
- ✅ certificates (future platform)

### 🚀 Quick Start

#### 1. Clone & Install
```bash
git clone https://github.com/abdullahwaahaj-tech/eec-website.git
cd eec-website
npm install
```

#### 2. Setup Environment
```bash
cp .env.example .env.local
# Edit .env.local with your credentials
```

#### 3. Setup Database
- Create Supabase project
- Run SQL migrations from `sql/migrations/`

#### 4. Setup Email
- Create Resend account
- Add API key to .env.local

#### 5. Run Locally
```bash
npm run dev
# Open http://localhost:3000
```

#### 6. Deploy to Vercel
```bash
vercel deploy
# Add environment variables in dashboard
```

### 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── (pages)/          # All pages
│   │   ├── api/              # API routes
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   ├── globals.css       # Global styles
│   │   ├── metadata.ts       # SEO metadata
│   │   ├── sitemap.ts        # Sitemap
│   │   └── robots.ts         # Robots.txt
│   ├── components/
│   │   ├── layout/           # Navbar, Footer
│   │   ├── hero/             # Hero sections
│   │   ├── forms/            # Contact, Internship, Newsletter
│   │   ├── sections/         # Reusable sections
│   │   └── pages/            # Page components
│   ├── lib/
│   │   ├── supabase.ts       # Supabase client
│   │   ├── email.ts          # Email service
│   │   ├── validators.ts     # Zod schemas
│   │   ├── utils.ts          # Utilities
│   │   └── constants.ts      # Constants
│   └── types/
│       └── index.ts          # TypeScript types
├── sql/
│   └── migrations/           # Database migrations
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

### 🎨 Design System

**Colors**
- Primary Dark: `#08120D`
- Forest Green: `#0F5132`
- Growth Green: `#1E8F5A`
- Ocean Blue: `#0F4C81`
- Gold Accent: `#D4AF37`
- Soft White: `#F8FAF7`

**Typography**
- Headings: Clash Display
- Body: Inter
- Accent: Cormorant Garamond

### 📊 Performance Targets

- Lighthouse: 95+
- Mobile optimized
- Code splitting enabled
- Image optimization
- Lazy loading

### 🔐 Security

- Row-Level Security (RLS)
- Input validation
- Environment variable protection
- No sensitive data in frontend
- Rate limiting ready

### ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation
- Screen reader support
- Semantic HTML
- Color contrast

### 📝 Content

**Important:** This website uses placeholder content clearly marked as "Content To Be Added By EEC". All pages are production-ready but require actual content from the organization.

### 🔧 Technology Stack

- **Framework:** Next.js 14+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, GSAP
- **3D:** Three.js, React Three Fiber
- **Backend:** Supabase (PostgreSQL)
- **Email:** Resend
- **Deployment:** Vercel
- **Forms:** React Hook Form, Zod

### 📚 Documentation

- [DEPLOYMENT.md](./DEPLOYMENT.md) - Full deployment guide
- [ENV_SETUP.md](./ENV_SETUP.md) - Environment setup
- [README.md](./README.md) - General information

### 🤝 Support

For deployment or technical questions, refer to:
- [Vercel Docs](https://vercel.com/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Resend Docs](https://resend.com/docs)
- [Next.js Docs](https://nextjs.org/docs)

### 📄 License

[Content To Be Added By EEC]

---

**Built with premium design and production-ready code.**

*Empowering Humanity. Protecting Nature. Shaping Tomorrow.*
