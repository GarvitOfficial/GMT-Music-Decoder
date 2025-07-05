import React from 'react'
import { Upload, Brain, Database, CheckCircle, Clock, Shield, Globe, Waves, Sparkles } from 'lucide-react'

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Upload Your Audio',
      description: 'Select any audio file from your device in supported formats like MP3, WAV, M4A, FLAC, AAC, AMR, or APE.',
      color: 'text-cyan-400',
      bgColor: 'from-cyan-400/20 to-cyan-500/20',
    },
    {
      icon: Brain,
      title: 'AI Analysis',
      description: 'Our advanced AI algorithms analyze the audio fingerprint and acoustic features of your song.',
      color: 'text-purple-400',
      bgColor: 'from-purple-400/20 to-purple-500/20',
    },
    {
      icon: Database,
      title: 'Database Matching',
      description: 'The system searches through our massive database of over 50 million songs for exact matches.',
      color: 'text-green-400',
      bgColor: 'from-green-400/20 to-green-500/20',
    },
    {
      icon: CheckCircle,
      title: 'Instant Results',
      description: 'Get detailed information including song title, artist, album, release date, and genre in seconds.',
      color: 'text-yellow-400',
      bgColor: 'from-yellow-400/20 to-yellow-500/20',
    },
  ]

  const features = [
    {
      icon: Clock,
      title: 'Lightning Fast',
      description: 'Get results in under 3 seconds',
      color: 'text-cyan-400',
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your audio files are processed securely',
      color: 'text-green-400',
    },
    {
      icon: Globe,
      title: 'Global Database',
      description: 'Access to worldwide music catalog',
      color: 'text-purple-400',
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Sparkles size={48} className="text-cyan-400" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">How It Works</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the magic behind our AI-powered music identification technology
          </p>
        </div>

        {/* Technology Overview */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Audio Recognition</h2>
          <div className="card max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Waves size={32} className="text-cyan-400" />
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our system uses acoustic fingerprinting technology to analyze unique audio characteristics. 
              Each song has a distinct "fingerprint" based on its frequency patterns, tempo, and harmonic structure.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">The Process</h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center text-black font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <step.icon size={32} className={step.color} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose GMT-Music Decoder?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon size={32} className={feature.color} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Technical Specifications</h2>
          <div className="card max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Recognition Accuracy:</span>
                <span className="font-bold text-white">99.9%</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Processing Time:</span>
                <span className="font-bold text-white">{'< 3 seconds'}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Database Size:</span>
                <span className="font-bold text-white">50+ Million Songs</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Supported Formats:</span>
                <span className="font-bold text-white">MP3, WAV, M4A, FLAC, AAC, AMR, APE</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-400">Minimum Duration:</span>
                <span className="font-bold text-white">3 seconds</span>
              </div>
            </div>
          </div>
        </section>

        {/* Powered By */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powered by ACRCloud</h2>
          <div className="card max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-300 leading-relaxed">
              GMT-Music Decoder is powered by ACRCloud, the world's leading audio recognition platform. 
              ACRCloud's technology is trusted by major music streaming services, broadcasters, and content creators worldwide.
            </p>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center">
          <p className="text-gray-400 text-lg">
            Ready to identify your music? Upload an audio file and experience the magic!
          </p>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks