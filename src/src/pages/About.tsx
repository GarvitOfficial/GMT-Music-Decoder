import React from 'react'
import { Music, Heart, Users, Award, Globe, Zap } from 'lucide-react'

const About: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Identify songs in under 3 seconds with 99.9% accuracy',
    },
    {
      icon: Globe,
      title: 'Global Database',
      description: 'Access to over 50 million songs from around the world',
    },
    {
      icon: Award,
      title: 'Industry Leading',
      description: 'Powered by ACRCloud, trusted by major streaming platforms',
    },
  ]

  const team = [
    {
      name: 'GMT Development Team',
      role: 'Core Developers',
      description: 'Passionate developers creating innovative music technology',
    },
    {
      name: 'ACRCloud',
      role: 'Technology Partner',
      description: 'World-class audio recognition technology provider',
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Music size={48} className="text-cyan-400" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">GMT-Music Decoder</h1>
          <p className="text-xl text-gray-400 mb-6">
            The most advanced AI-powered music identification app
          </p>
          <div className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/30">
            Version 1.0.0
          </div>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Mission</h2>
          <div className="card max-w-4xl mx-auto text-center">
            <Heart size={48} className="text-red-400 mx-auto mb-6" />
            <p className="text-lg text-gray-300 leading-relaxed">
              To make music discovery effortless and accessible for everyone. We believe that every song has a story, 
              and our mission is to help you discover those stories instantly, no matter where you hear them.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Makes Us Special</h2>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <feature.icon size={32} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Technology</h2>
          <div className="card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white text-center mb-6">Powered by ACRCloud</h3>
            <p className="text-gray-300 text-center mb-8 leading-relaxed">
              GMT-Music Decoder leverages ACRCloud's industry-leading audio recognition technology. 
              ACRCloud's platform processes billions of audio queries daily and is trusted by major 
              music streaming services, broadcasters, and content creators worldwide.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50M+</div>
                <div className="text-gray-400">Songs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-400">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{'< 3s'}</div>
                <div className="text-gray-400">Speed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Team</h2>
          <div className="space-y-6">
            {team.map((member, index) => (
              <div key={index} className="card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-purple-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Users size={32} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-purple-400 font-medium mb-2">{member.role}</p>
                    <p className="text-gray-400">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Get in Touch</h2>
          <div className="card max-w-2xl mx-auto text-center">
            <p className="text-gray-300 mb-6">
              Have questions, feedback, or suggestions? We'd love to hear from you!
            </p>
            <a 
              href="mailto:support@gmt-music-decoder.com"
              className="text-cyan-400 font-bold text-lg hover:text-cyan-300 transition-colors"
            >
              support@gmt-music-decoder.com
            </a>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center">
          <p className="text-gray-400 text-lg mb-2">
            Made with ❤️ by the GMT Development Team
          </p>
          <p className="text-gray-500">
            © 2025 GMT-Music Decoder. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About