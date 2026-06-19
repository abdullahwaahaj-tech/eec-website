# Environment Variables Template

## Supabase Configuration
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
```

## Resend Email Configuration
```
RESEND_API_KEY=re_...
NEXT_PUBLIC_CONTACT_EMAIL=contact@eeccouncil.org
NEXT_PUBLIC_ADMIN_EMAIL=admin@eeccouncil.org
```

## Site Configuration
```
NEXT_PUBLIC_SITE_URL=https://eeccouncil.org
NEXT_PUBLIC_SITE_NAME=Echoes of Earth Council
```

## How to Get These Values

### Supabase
1. Create project at supabase.com
2. Go to Settings > API
3. Copy URL (NEXT_PUBLIC_SUPABASE_URL)
4. Copy anon public key (NEXT_PUBLIC_SUPABASE_ANON_KEY)
5. Copy service_role secret key (SUPABASE_SERVICE_ROLE_KEY)

### Resend
1. Create account at resend.com
2. Go to API Keys
3. Copy your API key (RESEND_API_KEY)
4. Set your organization email addresses

### Vercel Deployment
1. Connect GitHub repo
2. Add these variables in Project Settings > Environment Variables
3. Deploy
