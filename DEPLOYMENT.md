# Deployment Guide

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account
- Resend account
- Vercel account (for deployment)

### Local Development

```bash
# Install dependencies
npm install

# Create .env.local
cp .env.example .env.local

# Fill in your environment variables
# NEXT_PUBLIC_SUPABASE_URL=...
# NEXT_PUBLIC_SUPABASE_ANON_KEY=...
# etc.

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Database Setup

### Supabase Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Copy your project URL and anon key
3. Run the SQL migrations in your Supabase dashboard:
   - `sql/migrations/001_initial_schema.sql`
   - `sql/migrations/002_storage_setup.sql`
   - `sql/migrations/003_extended_schema.sql`

### Environment Variables

Update `.env.local` with your Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key
```

## Email Setup

### Resend Configuration

1. Create account at [resend.com](https://resend.com)
2. Get your API key
3. Add to `.env.local`:

```
RESEND_API_KEY=your_api_key
NEXT_PUBLIC_CONTACT_EMAIL=contact@eeccouncil.org
NEXT_PUBLIC_ADMIN_EMAIL=admin@eeccouncil.org
```

## Vercel Deployment

### Automated Deployment

1. Push to GitHub
2. Connect repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Manual Environment Setup on Vercel

```bash
# Using Vercel CLI
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
vercel env add RESEND_API_KEY
vercel env add NEXT_PUBLIC_CONTACT_EMAIL
vercel env add NEXT_PUBLIC_ADMIN_EMAIL
vercel env add NEXT_PUBLIC_SITE_URL
```

## Build & Test

```bash
# Type checking
npm run type-check

# Build for production
npm run build

# Start production server
npm run start
```

## Performance Optimization

- Images are optimized with next/image
- Code splitting enabled by default
- API routes are serverless functions
- Database queries are optimized with indexes

## Security

- Row-Level Security enabled on all tables
- API endpoints validate all inputs
- Environment variables are never exposed to client
- Rate limiting ready (implement if needed)

## Monitoring

- Vercel analytics available in dashboard
- Supabase logs available in dashboard
- Email delivery tracked in Resend dashboard

## Troubleshooting

### Database Connection Issues
- Verify Supabase URL and keys
- Check RLS policies
- Review Supabase logs

### Email Not Sending
- Verify Resend API key
- Check email addresses in environment
- Review Resend logs for failures

### Build Failures
- Check Node version (18+)
- Run `npm install` again
- Clear `.next` folder
- Check environment variables

## Support

For questions or issues:
- Review logs in Vercel dashboard
- Check Supabase dashboard
- Review Resend dashboard for email issues
