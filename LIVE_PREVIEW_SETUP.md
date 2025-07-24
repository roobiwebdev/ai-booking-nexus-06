# 🎯 Payload CMS Live Preview Setup Guide

This guide will help you set up live preview functionality between your Payload CMS backend and React frontend.

## 📋 Prerequisites

- Payload CMS backend running on `http://localhost:3000`
- React frontend running on `http://localhost:5173`
- Node.js 18+ and pnpm installed

## 🚀 Quick Setup

### 1. Environment Variables

#### Payload CMS (.env)
```bash
# Add to your Payload CMS .env file
PREVIEW_TOKEN=your-super-secret-preview-token-here
FRONTEND_URL=http://localhost:5173
```

#### Frontend (.env)
```bash
# Add to your frontend .env file
VITE_PAYLOAD_URL=http://localhost:3000
VITE_PREVIEW_TOKEN=your-super-secret-preview-token-here
VITE_FRONTEND_URL=http://localhost:5173
VITE_LIVE_PREVIEW_ENABLED=true
```

### 2. Generate Secure Tokens

Run this command to generate a secure preview token:

```bash
# In your terminal
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Use the generated token for both `PREVIEW_TOKEN` and `VITE_PREVIEW_TOKEN`.

### 3. Start the Services

#### Start Payload CMS
```bash
cd Payload-CMS
pnpm dev
```

#### Start Frontend
```bash
cd ai-booking-nexus-06
pnpm dev
```

## 🎯 How to Use Live Preview

### 1. Access Payload Admin
- Go to `http://localhost:3000/admin`
- Login with your admin credentials

### 2. Create/Edit a Page
- Navigate to "Pages" collection
- Create a new page or edit existing one
- Set the slug (e.g., "home", "about", "contact")

### 3. Enable Live Preview
- In the page editor, you'll see a "Live Preview" button
- Click it to open the preview pane
- The preview will show your frontend with the current draft content

### 4. Real-time Updates
- Make changes in the Payload admin
- See updates instantly in the preview pane
- The preview updates in real-time as you type

## 🔧 Configuration Details

### Payload CMS Configuration

The live preview is configured in `Payload-CMS/src/collections/Pages.ts`:

```typescript
admin: {
  livePreview: {
    breakpoints: [
      { label: 'Mobile', name: 'mobile', width: 375, height: 667 },
      { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
      { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
    ],
    url: ({ data }) => {
      return `${process.env.FRONTEND_URL}/preview/${data?.slug || 'home'}`
    },
  },
}
```

### Frontend Preview Route

The preview route is available at `/preview/[slug]` and includes:

- Secure token validation
- Real-time postMessage communication
- Draft content fetching
- Live updates from Payload Admin

### Security Features

- **Token-based authentication** for preview access
- **Origin validation** for postMessage security
- **Draft-only access** - published content is public
- **CORS protection** for API endpoints

## 🛠️ Troubleshooting

### Common Issues

#### 1. Preview Not Loading
- Check that both services are running
- Verify environment variables are set correctly
- Check browser console for errors

#### 2. Authentication Errors
- Ensure `PREVIEW_TOKEN` matches in both environments
- Check that the token is being sent in Authorization header

#### 3. CORS Errors
- Verify CORS settings in Payload config
- Check that frontend URL is in allowed origins

#### 4. Real-time Updates Not Working
- Check postMessage communication in browser console
- Verify that preview page is in an iframe
- Ensure allowed origins are configured correctly

### Debug Mode

Enable debug logging by adding to your environment:

```bash
DEBUG=payload:*
```

## 📁 File Structure

```
Payload-CMS/
├── src/
│   ├── collections/
│   │   └── Pages.ts              # Pages collection with live preview
│   ├── middleware/
│   │   └── preview-auth.ts       # Preview authentication
│   ├── seed/
│   │   └── sample-page.ts        # Sample data seeder
│   └── payload.config.ts         # Updated with Pages collection

ai-booking-nexus-06/
├── src/
│   ├── pages/
│   │   └── Preview.tsx           # Preview page component
│   ├── config/
│   │   └── environment.ts        # Environment configuration
│   └── App.tsx                   # Updated with preview route
```

## 🔄 Deployment

### Production Environment Variables

For production, update the environment variables:

```bash
# Payload CMS
PREVIEW_TOKEN=your-production-secret-token
FRONTEND_URL=https://your-frontend-domain.com

# Frontend
VITE_PAYLOAD_URL=https://your-payload-domain.com
VITE_PREVIEW_TOKEN=your-production-secret-token
VITE_FRONTEND_URL=https://your-frontend-domain.com
```

### Security Checklist

- [ ] Use strong, unique preview tokens
- [ ] Update allowed origins for production domains
- [ ] Enable HTTPS in production
- [ ] Set up proper CORS policies
- [ ] Monitor preview access logs

## 🎉 Success!

Once everything is set up, you should have:

✅ Real-time live preview in Payload Admin  
✅ Secure draft content access  
✅ Responsive preview breakpoints  
✅ Instant content updates  
✅ Production-ready security  

Your clients can now see content changes instantly while editing in the CMS! 