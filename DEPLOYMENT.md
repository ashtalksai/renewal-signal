# Deployment Guide — Coolify

This guide covers deploying RenewalIQ to Coolify (https://coolify.ashketing.com).

## Prerequisites

1. GitHub repo pushed to `ashtalksai/renewal-signal`
2. Database created on shared Postgres instance
3. Environment variables configured

## Step 1: Create Database

Connect to the shared Postgres instance via SSH:

```bash
ssh ash-server "sudo docker exec k80c0s08c84kgcs44kckcos0 psql -U postgres -c 'CREATE DATABASE renewal_signal;'"
```

## Step 2: Push to GitHub

```bash
cd ~/Dev/renewal-signal

# Initialize git remote (if not already done)
git remote add origin https://github.com/ashtalksai/renewal-signal.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Create Coolify Resource

1. Go to https://coolify.ashketing.com
2. Click **Add Resource** → **Git Repository**
3. Connect GitHub account (if not connected)
4. Select repository: `ashtalksai/renewal-signal`
5. Branch: `main`
6. Build Pack: **Nixpacks** (auto-detects Next.js)

## Step 4: Configure Environment Variables

In Coolify, add these environment variables:

```
DATABASE_URL=postgresql://postgres:<password>@k80c0s08c84kgcs44kckcos0:5432/renewal_signal
NEXTAUTH_URL=https://license-signal-feed.ashketing.com
NEXTAUTH_SECRET=<generate-with-openssl-rand-base64-32>
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
STRIPE_SECRET_KEY=sk_test_<your-stripe-secret-key>
STRIPE_WEBHOOK_SECRET=whsec_<your-webhook-secret>
```

## Step 5: Configure Domain

1. In Coolify resource settings, go to **Domains**
2. Add domain: `license-signal-feed.ashketing.com`
3. Coolify will auto-configure SSL via Let's Encrypt

## Step 6: Set Resource Limits

In Coolify resource settings:

- **Memory Limit:** 256MB (mandatory per infrastructure rules)
- **CPU:** Shared (default)

## Step 7: Deploy

1. Click **Deploy** in Coolify
2. Wait for build to complete (~2-3 minutes)
3. Verify health check passes at: `https://license-signal-feed.ashketing.com/health`

## Step 8: Run Migrations

After first deploy, run database migrations:

```bash
# In Coolify, go to Terminal/Console for the resource
# Or use SSH to exec directly:
ssh ash-server "docker exec -e DATABASE_URL='<full-connection-string>' <container-id> npm run db:migrate"
```

Alternatively, add a post-deploy script in Coolify:

```bash
npm run db:migrate
```

## Step 9: Verify Deployment

1. Visit https://license-signal-feed.ashketing.com
2. Test signup flow
3. Verify landing page renders correctly
4. Check health endpoint returns 200

## Health Check Endpoint

The app includes a `/health` endpoint that returns 200 OK:

```bash
curl -I https://license-signal-feed.ashketing.com/health
```

Expected response:
```
HTTP/2 200
content-type: application/json
```

## Troubleshooting

### Build Fails

- Check build logs in Coolify
- Verify `package.json` scripts are correct
- Ensure Node.js version is 20+

### Database Connection Error

- Verify DATABASE_URL is correct
- Check database exists: `ssh ash-server "sudo docker exec k80c0s08c84kgcs44kckcos0 psql -U postgres -c '\l'"`
- Ensure network access from Coolify to database

### 500 Errors

- Check application logs in Coolify
- Verify all environment variables are set
- Check NEXTAUTH_SECRET is 32+ characters

## Post-Deploy Checklist

- [ ] Database migrations run successfully
- [ ] Health check returns 200
- [ ] Landing page loads
- [ ] Signup/login works
- [ ] Dashboard is accessible (auth-protected)
- [ ] CSV export works
- [ ] Stripe checkout flow works (test mode)

## Support

For Coolify-specific issues, check the [Coolify docs](https://coolify.io/docs).
