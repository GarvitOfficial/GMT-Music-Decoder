import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Music, AlertCircle, CheckCircle, Sparkles, Calendar, Clock, Play, Heart, Share2 } from 'lucide-react'

interface SongResultProps {
  result: any
}

const SongResult: React.FC<SongResultProps> = ({ result }) => {
  if (result.status === 'error') {
    return (
      <motion.div 
        className="card border-red-500/50 bg-gradient-to-br from-red-500/10 to-orange-500/10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center">
          <motion.div 
            className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
          >
            <AlertCircle size={48} className="text-red-400" />
          </motion.div>
          
          <motion.h3 
            className="text-2xl font-bold text-red-400 mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Song Not Found
          </motion.h3>
          
          <motion.p 
            className="text-gray-400 mb-6 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            We couldn't identify this song. Try uploading a clearer audio file or a different song.
          </motion.p>
          
          <motion.div 
            className="bg-dark-800/50 rounded-xl p-6 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h4 className="font-semibold text-white mb-3">Tips for better results:</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                Use high-quality audio files
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                Ensure minimal background noise
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                Upload at least 10-15 seconds of audio
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                Try a different part of the song
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  if (result.status === 'success') {
    const { title, artist, album, cover_art, external_urls, score, duration, release_date, genres } = result

    return (
      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-green-500/20 to-primary-500/20 rounded-xl border border-green-500/30"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <CheckCircle size={24} className="text-green-400" />
          <span className="font-semibold text-green-400">Song Identified Successfully</span>
          <Sparkles size={20} className="text-primary-400" />
        </motion.div>

        <motion.div 
          className="card bg-gradient-to-br from-dark-800/50 to-dark-900/50 border-primary-500/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-shrink-0 text-center lg:text-left">
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
              >
                {cover_art ? (
                  <img 
                    src={cover_art} 
                    alt={`${title} cover`}
                    className="w-32 h-32 rounded-2xl mx-auto lg:mx-0 object-cover shadow-2xl"
                  />
                ) : (
                  <div className="w-32 h-32 bg-gradient-to-br from-dark-700 to-dark-800 rounded-2xl flex items-center justify-center mx-auto lg:mx-0">
                    <Music size={40} className="text-gray-400" />
                  </div>
                )}
              </motion.div>
              
              {score && (
                <motion.div 
                  className="inline-block mt-3 px-3 py-1 bg-primary-500 text-black text-sm font-bold rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {score}% match
                </motion.div>
              )}
            </div>

            <div className="flex-1 text-center lg:text-left">
              <motion.h2 
                className="text-3xl font-bold text-white mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {title}
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {artist}
              </motion.p>
              
              {album && (
                <motion.p 
                  className="text-lg text-gray-400 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {album}
                </motion.p>
              )}
              
              <motion.div 
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-4 text-sm text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {release_date && (
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{release_date}</span>
                  </div>
                )}
                {duration && (
                  <div className="flex items-center gap-2">
                    <Clock size={14} />
                    <span>{Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}</span>
                  </div>
                )}
              </motion.div>

              {genres && genres.length > 0 && (
                <motion.div 
                  className="flex flex-wrap justify-center lg:justify-start gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  {genres.slice(0, 3).map((genre: string, index: number) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-secondary-500/20 text-secondary-400 text-sm font-medium rounded-lg border border-secondary-500/30"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      {genre}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          {external_urls && external_urls.spotify && (
            <motion.button
              onClick={() => window.open(external_urls.spotify, '_blank')}
              className="flex-1 btn bg-green-500 hover:bg-green-600 text-white font-semibold py-4 text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink size={20} />
              Listen on Spotify
            </motion.button>
          )}
          
          <motion.button
            className="btn btn-secondary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Heart size={20} />
            Save to Favorites
          </motion.button>
          
          <motion.button
            className="btn btn-ghost"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Share2 size={20} />
            Share
          </motion.button>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-gray-400 text-sm">Song has been added to your history</p>
        </motion.div>
      </motion.div>
    )
  }

  return null
}

export default SongResult