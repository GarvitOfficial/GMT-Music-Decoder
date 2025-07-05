import React from 'react'
import { Shield, Eye, Lock, Database, Globe } from 'lucide-react'

const Privacy: React.FC = () => {
  const sections = [
    {
      icon: Database,
      title: 'Data Collection',
      content: `We collect minimal data to provide our music identification service:
      
• Audio files you upload for identification (processed temporarily)
• Song identification results (stored locally in your browser)
• Basic usage analytics to improve our service
• No personal information is required or collected`,
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: `Your privacy and security are our top priorities:
      
• All audio processing happens securely through encrypted connections
• Audio files are processed temporarily and not stored on our servers
• Your identification history is stored locally in your browser
• We use industry-standard encryption for all data transmission`,
    },
    {
      icon: Eye,
      title: 'Data Usage',
      content: `We use your data only to provide and improve our service:
      
• Audio files are analyzed solely for music identification
• Results are returned to you and optionally saved to your local history
• Anonymous usage statistics help us improve accuracy and performance
• We never share your data with third parties for marketing purposes`,
    },
    {
      icon: Globe,
      title: 'Third-Party Services',
      content: `We partner with trusted services to provide our functionality:
      
• ACRCloud: Provides music recognition technology with their own privacy standards
• No social media tracking or advertising networks
• All third-party integrations are essential for core functionality
• We ensure our partners maintain high privacy standards`,
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-green-400/20 to-green-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Shield size={48} className="text-green-400" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-400 mb-4 max-w-3xl mx-auto">
            We're committed to protecting your privacy and being transparent about how we handle your data.
          </p>
          <p className="text-gray-500">Last updated: December 4</p>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-12 mb-20">
          {sections.map((section, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-green-500/20 rounded-xl flex items-center justify-center">
                  <section.icon size={24} className="text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              </div>
              <div className="card ml-16">
                <pre className="text-gray-300 whitespace-pre-wrap font-sans leading-relaxed">
                  {section.content}
                </pre>
              </div>
            </div>
          ))}
        </div>

        {/* Key Principles */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Privacy Principles</h2>
          <div className="card max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0" />
                <div>
                  <span className="font-bold text-white">Minimal Data Collection:</span>
                  <span className="text-gray-300"> We only collect what's necessary for our service</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0" />
                <div>
                  <span className="font-bold text-white">Local Storage:</span>
                  <span className="text-gray-300"> Your history stays in your browser</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0" />
                <div>
                  <span className="font-bold text-white">No Tracking:</span>
                  <span className="text-gray-300"> We don't track you across other websites</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0" />
                <div>
                  <span className="font-bold text-white">Transparency:</span>
                  <span className="text-gray-300"> We're open about our data practices</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Your Rights</h2>
          <div className="card max-w-2xl mx-auto">
            <p className="text-gray-300 leading-relaxed">
              You have complete control over your data:
              <br /><br />
              • Clear your identification history at any time<br />
              • No account required - everything is stored locally<br />
              • Stop using the app anytime without data concerns<br />
              • Contact us with any privacy questions
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Questions About Privacy?</h2>
          <div className="card max-w-2xl mx-auto text-center">
            <p className="text-gray-300 mb-6">
              If you have any questions about this privacy policy or how we handle your data, 
              please don't hesitate to contact us.
            </p>
            <a 
              href="mailto:privacy@gmt-music-decoder.com"
              className="text-green-400 font-bold text-lg hover:text-green-300 transition-colors"
            >
              privacy@gmt-music-decoder.com
            </a>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center">
          <p className="text-gray-400">
            GMT-Music Decoder is committed to protecting your privacy and providing a secure music identification experience.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Privacy