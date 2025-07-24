// Environment configuration for live preview
export const config = {
  // Payload CMS Configuration
  payloadUrl: import.meta.env.VITE_PAYLOAD_URL || 'http://localhost:3000',
  previewToken: import.meta.env.VITE_PREVIEW_TOKEN || 'your-secret-preview-token-here',
  
  // Frontend Configuration
  frontendUrl: import.meta.env.VITE_FRONTEND_URL || 'http://localhost:8081',
  
  // Live Preview Configuration
  livePreviewEnabled: import.meta.env.VITE_LIVE_PREVIEW_ENABLED === 'true',
  
  // Allowed origins for postMessage security
  allowedOrigins: [
    'http://localhost:3000',
    'https://payload-cms-ai-booking.vercel.app',
    'https://ai-booking-nexus.vercel.app',
    'http://localhost:8081',
  ],
}

// Generate a secure preview token (for development)
export const generateSecureToken = (): string => {
  const timestamp = Date.now()
  const randomString = Math.random().toString(36).substring(2, 15)
  return `${timestamp}-${randomString}`
}

// Validate environment configuration
export const validateConfig = (): boolean => {
  const required = ['payloadUrl', 'previewToken']
  return required.every(key => config[key as keyof typeof config])
} 