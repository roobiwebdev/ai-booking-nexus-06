# 🏠 Local Testing Setup Guide

## Step 1: Create Environment Files

### Frontend (.env.local)
Create a file called `.env.local` in your `ai-booking-nexus-06` directory with:

```bash
VITE_PAYLOAD_URL=http://localhost:3000
VITE_PREVIEW_TOKEN=ec3ff5755a64782cebe0f9b8118fd48a3df2001791eb9f00856392042545d512
VITE_FRONTEND_URL=http://localhost:5173
VITE_LIVE_PREVIEW_ENABLED=true
```

### Payload CMS (.env.local)
Create a file called `.env.local` in your `Payload-CMS` directory with:

```bash
PREVIEW_TOKEN=ec3ff5755a64782cebe0f9b8118fd48a3df2001791eb9f00856392042545d512
FRONTEND_URL=http://localhost:5173
```

## Step 2: Start Both Services

### Terminal 1 - Payload CMS
```bash
cd Payload-CMS
pnpm dev
```

### Terminal 2 - Frontend
```bash
cd ai-booking-nexus-06
pnpm dev
```

## Step 3: Test the Preview

1. Go to `http://localhost:3000/admin`
2. Navigate to "Pages" collection
3. Create a new page with slug "home"
4. Add some content
5. Click "Live Preview" button
6. See your frontend at `http://localhost:5173/preview/home`

## Troubleshooting

If you see a white page:
1. Check browser console for errors
2. Verify both services are running
3. Check that environment variables are set correctly
4. Make sure the preview token matches in both files

The preview should now work without the import errors! 