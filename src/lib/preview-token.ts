import crypto from 'crypto'

// Generate a secure preview token
export const generatePreviewToken = (): string => {
  return crypto.randomBytes(32).toString('hex')
}

// Validate preview token
export const validatePreviewToken = (token: string): boolean => {
  const expectedToken = import.meta.env.VITE_PREVIEW_TOKEN
  return token === expectedToken
}

// Create a secure token for Payload CMS
export const createPayloadToken = (): string => {
  const timestamp = Date.now()
  const randomString = crypto.randomBytes(16).toString('hex')
  return `${timestamp}.${randomString}`
} 