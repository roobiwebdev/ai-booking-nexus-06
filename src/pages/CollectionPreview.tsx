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

interface CollectionPreviewProps {
  collection: string
  id: string
}

const CollectionPreviewContent: React.FC<CollectionPreviewProps> = ({ collection, id }) => {
  const [previewData, setPreviewData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch preview data from Payload CMS
  const fetchPreviewData = async () => {
    try {
      setIsLoading(true)
      setError(null)

      const response = await fetch(
        `${config.payloadUrl}/api/${collection}/${id}?draft=true`,
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
      setPreviewData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load preview')
      console.error('Preview fetch error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPreviewData()
  }, [collection, id])

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
  }, [collection, id])

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

  // Render the appropriate component based on collection
  const renderComponent = () => {
    switch (collection) {
      case 'hero': {
        // Transform Hero data to match component interface
        const heroData = {
          ...previewData,
          backgroundIframeUrl: previewData.backgroundIframeUrl || previewData.iframeUrl,
          trustIndicators: previewData.trustIndicators?.map((item: any, index: number) => ({
            id: `trust-${index}`,
            text: item.text
          })) || []
        }
        return <HeroSection data={heroData} />
      }
      case 'benefits':
        return <BenefitsSection data={previewData} />
      case 'social-proof':
        return <SocialProofSection data={previewData} />
      case 'demo':
        return <DemoSection data={previewData} />
      case 'before-after':
        return <BeforeAfterSection data={previewData} />
      case 'faq':
        return <FAQSection data={previewData} />
      case 'contact':
        return <ContactSection data={previewData} />
      case 'footer':
        return <Footer data={previewData} />
      default:
        return (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-600">Unknown collection: {collection}</p>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="preview-container">
      {/* Preview indicator */}
      <div className="fixed top-0 left-0 right-0 bg-yellow-500 text-black text-center py-2 z-50">
        <span className="text-sm font-medium">
          🎯 LIVE PREVIEW MODE - {collection} ({id})
        </span>
      </div>

      {/* Main content */}
      <div className="pt-12">
        {renderComponent()}
      </div>
    </div>
  )
}

const CollectionPreview: React.FC = () => {
  const { collection, id } = useParams<{ collection: string; id: string }>()
  
  if (!collection || !id) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Invalid preview URL</p>
        </div>
      </div>
    )
  }

  return <CollectionPreviewContent collection={collection} id={id} />
}

export default CollectionPreview 