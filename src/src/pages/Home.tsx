import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import toast from 'react-hot-toast'
import { Zap, TrendingUp, Clock, Award, Info, Music, Sparkles, Play, Users, Globe } from 'lucide-react'
import FileUploadZone from '../components/FileUploadZone'
import SongResult from '../components/SongResult'
import { identifySong } from '../services/acrcloud'
import { saveToHistory } from '../services/storage'

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const handleFileSelect = (file: File) => {
    setSelectedFile(file)
    setResult(null)
    toast.success('File selected successfully!')
  }

  const handleIdentify = async () => {
    if (!selectedFile) return

    setIsLoading(true)
    const loadingToast = toast.loading('Analyzing your audio file...')
    
    try {
      const songData = await identifySong(selectedFile)
      setResult(songData)
      
      if (songData.status === 'success') {
        await saveToHistory(songData)
        toast.success('Song identified successfully!', { id: loadingToast })
      } else {
        toast.error('Song not found. Try a different audio file.', { id: loadingToast })
      }
    } catch (error) {
      toast.error('Failed to identify song. Please try again.', { id: loadingToast })
    } finally {
      setIsLoading(false)
    }
  }

  const resetSelection = () => {
    setSelectedFile(null)
    setResult(null)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 text-center relative overflow-hidden">
        <div className="hero-gradient absolute inset-0" />
        <div className="container relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="w-24 h-24 bg-gradient-to-br from-primary-400/20 to-secondary-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8"
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Sparkles size={48} className="text-primary-400" />
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-shadow"
              variants={itemVariants}
            >
              <span className="gradient-text">Identify Any Song</span>
              <br />
              <span className="text-white">with AI</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Upload your audio file and discover the song details instantly using advanced music recognition technology
            </motion.p>

            {/* Stats */}
            <motion.div 
              ref={statsRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
              variants={containerVariants}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
            >
              <motion.div className="card text-center group hover:border-primary-500/50" variants={itemVariants}>
                <TrendingUp size={32} className="text-primary-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-400">Accuracy Rate</div>
              </motion.div>
              <motion.div className="card text-center group hover:border-green-500/50" variants={itemVariants}>
                <Clock size={32} className="text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-white mb-2">{'< 3s'}</div>
                <div className="text-gray-400">Processing Time</div>
              </motion.div>
              <motion.div className="card text-center group hover:border-secondary-500/50" variants={itemVariants}>
                <Award size={32} className="text-secondary-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-white mb-2">50M+</div>
                <div className="text-gray-400">Songs Database</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FileUploadZone
              onFileSelect={handleFileSelect}
              selectedFile={selectedFile}
              onReset={resetSelection}
            />
          </motion.div>

          {selectedFile && (
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.button
                onClick={handleIdentify}
                disabled={isLoading}
                className="btn btn-primary text-lg px-8 py-4 disabled:opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isLoading ? (
                  <>
                    <div className="spinner" />
                    Identifying...
                  </>
                ) : (
                  <>
                    <Zap size={20} />
                    Identify Song
                  </>
                )}
              </motion.button>
            </motion.div>
          )}

          {result && (
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SongResult result={result} />
            </motion.div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-4xl font-bold text-center text-white mb-12"
              variants={itemVariants}
            >
              Supported Audio Formats
            </motion.h2>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-16"
              variants={itemVariants}
            >
              {['MP3', 'WAV', 'M4A', 'FLAC', 'AAC', 'AMR', 'APE'].map((format, index) => (
                <motion.span
                  key={format}
                  className="px-6 py-3 bg-secondary-500/20 text-secondary-400 font-semibold rounded-xl border border-secondary-500/30"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {format}
                </motion.span>
              ))}
            </motion.div>

            {/* Quick Actions */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link to="/how-it-works" className="card hover:border-primary-500/50 transition-all group block">
                  <div className="text-center">
                    <Info size={48} className="text-primary-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-white mb-2">How It Works</h3>
                    <p className="text-gray-400">Learn about our AI technology</p>
                  </div>
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link to="/history" className="card hover:border-secondary-500/50 transition-all group block">
                  <div className="text-center">
                    <Music size={48} className="text-secondary-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-white mb-2">View History</h3>
                    <p className="text-gray-400">See your identified songs</p>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-2">
              Powered by ACRCloud • Advanced Audio Recognition Technology
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 GMT-Music Decoder. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default Home