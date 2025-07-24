import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { config } from '../config/environment'
import HeroSection from '../components/HeroSection'
import BenefitsSection from '../components/BenefitsSection'
import SocialProofSection from '../components/SocialProofSection'
import DemoSection from '../components/DemoSection'
import BeforeAfterSection from '../components/BeforeAfterSection'
import FAQSection from '../components/FAQSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

interface PreviewProps {
  slug: string
}

const PreviewContent: React.FC<PreviewProps> = ({ slug }) => {
  const [previewData, setPreviewData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch preview data from Payload CMS
  const fetchPreviewData = async () => {
    try {
      setIsLoading(true)
      setError(null)

      const response = await fetch(
        `${config.payloadUrl}/api/pages?where[slug][equals]=${slug}&draft=true`,
        {
          headers: {
            'Authorization': `Bearer ${config.previewToken}`,
            'Content-Type': 'application/json',
          },
        }
      )

      if (!response.ok) {
        throw new Error('Failed to fetch preview data')
      }

      const data = await response.json()
      
      if (data.docs && data.docs.length > 0) {
        const pageData = data.docs[0]
        // Transform Payload data to component-expected format
        const transformedData = {
          hero: {
            id: 1,
            badgeText: pageData.hero?.badge || "L'IA révolutionnaire",
            mainTitle: pageData.hero?.title || "Automatisez votre centre",
            gradientTitle: "avec l'IA",
            subtitle: pageData.hero?.subtitle || "Gagnez 15h par semaine",
            primaryCtaText: pageData.hero?.ctaPrimary || "Réserver une démo",
            secondaryCtaText: pageData.hero?.ctaSecondary || "Voir la démonstration",
            trustIndicators: pageData.hero?.trustIndicators?.map((item: any, index: number) => ({
              id: `trust-${index}`,
              text: item.text
            })) || [],
            showScrollIndicator: true,
            updatedAt: new Date().toISOString(),
            createdAt: new Date().toISOString()
          },
          benefits: pageData.benefits || [],
          socialProof: pageData.socialProof || {},
          demo: pageData.demo || {},
          beforeAfter: pageData.beforeAfter || {},
          faq: pageData.faq || [],
          contact: pageData.contact || {},
        }
        setPreviewData(transformedData)
      } else {
        setError('Page not found')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load preview')
      console.error('Preview fetch error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPreviewData()
  }, [slug])

  // Listen for postMessage updates from Payload Admin
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Verify origin for security
      if (!config.allowedOrigins.includes(event.origin)) {
        return
      }

      // Handle live preview updates
      if (event.data?.type === 'payload-live-preview-update') {
        console.log('Live preview update received:', event.data)
        // Refresh the preview data
        fetchPreviewData()
      }
    }

    window.addEventListener('message', handleMessage)
    
    // Notify Payload Admin that preview is ready
    window.parent?.postMessage(
      { type: 'payload-live-preview-ready' },
      '*'
    )

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [slug])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading preview...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-xl mb-4">⚠️</div>
          <p className="text-gray-600 mb-4">Preview Error</p>
          <p className="text-sm text-gray-500">{error}</p>
        </div>
      </div>
    )
  }

  if (!previewData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">No preview data available</p>
        </div>
      </div>
    )
  }

  return (
    <div className="preview-container">
      {/* Preview indicator */}
      <div className="fixed top-0 left-0 right-0 bg-yellow-500 text-black text-center py-2 z-50">
        <span className="text-sm font-medium">
          🎯 LIVE PREVIEW MODE - {slug}
        </span>
      </div>

      {/* Main content */}
      <div className="pt-12">
        <HeroSection data={previewData.hero} />
        <BenefitsSection data={previewData.benefits} />
        <SocialProofSection data={previewData.socialProof} />
        <DemoSection data={previewData.demo} />
        <BeforeAfterSection data={previewData.beforeAfter} />
        <FAQSection data={previewData.faq} />
        <ContactSection data={previewData.contact} />
        <Footer data={{}} />
      </div>
    </div>
  )
}

const Preview: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  
  if (!slug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Invalid preview URL</p>
        </div>
      </div>
    )
  }

  return <PreviewContent slug={slug} />
}

export default Preview 