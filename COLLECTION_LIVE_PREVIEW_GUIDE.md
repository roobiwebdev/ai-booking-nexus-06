# 🎯 Collection Live Preview Testing Guide

## ✅ What's Been Implemented

All collections now have live preview functionality:

- ✅ **Hero Sections** - `/preview/hero/{id}`
- ✅ **Benefits Sections** - `/preview/benefits/{id}`
- ✅ **Social Proof Sections** - `/preview/social-proof/{id}`
- ✅ **Demo Sections** - `/preview/demo/{id}`
- ✅ **Before/After Sections** - `/preview/before-after/{id}`
- ✅ **FAQ Sections** - `/preview/faq/{id}`
- ✅ **Contact Sections** - `/preview/contact/{id}`
- ✅ **Footer Sections** - `/preview/footer/{id}`
- ✅ **Pages** - `/preview/{slug}`

## 🚀 How to Test Each Collection

### **Step 1: Access Payload Admin**
1. Go to `http://localhost:3000/admin`
2. Login with your credentials

### **Step 2: Test Each Collection**

#### **Hero Sections**
1. Click "Hero Sections" in sidebar
2. Create new or edit existing
3. Click "Live Preview" button
4. Preview opens at: `http://localhost:8081/preview/hero/{id}`

#### **Benefits Sections**
1. Click "Benefits Sections" in sidebar
2. Create new or edit existing
3. Click "Live Preview" button
4. Preview opens at: `http://localhost:8081/preview/benefits/{id}`

#### **Social Proof Sections**
1. Click "Social Proof Sections" in sidebar
2. Create new or edit existing
3. Click "Live Preview" button
4. Preview opens at: `http://localhost:8081/preview/social-proof/{id}`

#### **Demo Sections**
1. Click "Demo Sections" in sidebar
2. Create new or edit existing
3. Click "Live Preview" button
4. Preview opens at: `http://localhost:8081/preview/demo/{id}`

#### **Before/After Sections**
1. Click "Before/After Sections" in sidebar
2. Create new or edit existing
3. Click "Live Preview" button
4. Preview opens at: `http://localhost:8081/preview/before-after/{id}`

#### **FAQ Sections**
1. Click "FAQ Sections" in sidebar
2. Create new or edit existing
3. Click "Live Preview" button
4. Preview opens at: `http://localhost:8081/preview/faq/{id}`

#### **Contact Sections**
1. Click "Contact Sections" in sidebar
2. Create new or edit existing
3. Click "Live Preview" button
4. Preview opens at: `http://localhost:8081/preview/contact/{id}`

#### **Footer Sections**
1. Click "Footers" in sidebar
2. Create new or edit existing
3. Click "Live Preview" button
4. Preview opens at: `http://localhost:8081/preview/footer/{id}`

## 🎯 Live Preview Features

### **Real-time Updates**
- Make changes in Payload admin
- See updates instantly in preview pane
- No need to save or refresh

### **Responsive Breakpoints**
- **Mobile**: 375px width
- **Tablet**: 768px width
- **Desktop**: 1440px width

### **Preview Indicators**
- Yellow banner shows "LIVE PREVIEW MODE"
- Displays collection name and ID
- Clear visual indication you're in preview

### **Security**
- Token-based authentication
- Origin validation for postMessage
- Draft-only content access

## 🔧 Environment Setup

### **Frontend (.env.local)**
```bash
VITE_PAYLOAD_URL=http://localhost:3000
VITE_PREVIEW_TOKEN=ec3ff5755a64782cebe0f9b8118fd48a3df2001791eb9f00856392042545d512
VITE_FRONTEND_URL=http://localhost:8081
VITE_LIVE_PREVIEW_ENABLED=true
```

### **Payload CMS (.env.local)**
```bash
PREVIEW_TOKEN=ec3ff5755a64782cebe0f9b8118fd48a3df2001791eb9f00856392042545d512
FRONTEND_URL=http://localhost:8081
```

## 🐛 Troubleshooting

### **Live Preview Button Missing**
- Check environment variables are set
- Restart both services
- Verify collection has livePreview config

### **Preview Shows White Page**
- Check browser console for errors
- Verify frontend is running on port 8081
- Check API endpoint is accessible

### **CORS Errors**
- Verify CORS settings in payload.config.ts
- Check that localhost:8081 is in allowed origins

### **Authentication Errors**
- Ensure PREVIEW_TOKEN matches in both environments
- Check Authorization header is being sent

## 🎉 Success Indicators

For each collection, you should see:
- ✅ Live Preview button in admin
- ✅ Preview pane opens with content
- ✅ Yellow "LIVE PREVIEW MODE" banner
- ✅ Real-time updates as you edit
- ✅ Responsive breakpoint switching
- ✅ No console errors

## 📱 Testing Different Views

1. **Desktop View**: Default preview size
2. **Tablet View**: Click tablet icon in preview
3. **Mobile View**: Click mobile icon in preview
4. **Real-time Editing**: Make changes and watch updates

Your live preview is now fully functional for all collections! 🚀 