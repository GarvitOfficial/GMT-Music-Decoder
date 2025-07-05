import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Music, History, Info, Settings, Sparkles, Menu, X, Github } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const navItems = [
    { path: '/', icon: Music, label: 'Identify' },
    { path: '/history', icon: History, label: 'History' },
    { path: '/how-it-works', icon: Info, label: 'How It Works' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ]

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Floating particles background */}
      <div className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: Math.random() * 6,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.header 
        className="sticky top-0 z-50 glass-effect border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3 text-white hover:text-primary-400 transition-colors group">
              <motion.div 
                className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Sparkles size={20} className="text-white" />
              </motion.div>
              <span className="font-bold text-xl hidden sm:block gradient-text">GMT-Music Decoder</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <a
                href="https://github.com/GarvitOfficial/GMT-Music-Decoder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                title="View on GitHub"
              >
                <Github size={18} />
              </a>
              {navItems.map((item, index) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        isActive
                          ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30 shadow-lg'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Icon size={18} />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </motion.div>
                )
              })}
            </nav>

            {/* GitHub Link - Mobile */}
            <a
              href="https://github.com/GarvitOfficial/GMT-Music-Decoder"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              title="View on GitHub"
            >
              <Github size={24} />
            </a>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect border-b border-white/10 overflow-hidden"
          >
            <div className="container py-4">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = location.pathname === item.path
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive
                          ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  )
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        {children}
      </main>

      {/* Mobile bottom navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 glass-effect border-t border-white/10 z-50">
        <div className="flex items-center justify-around h-20 px-4">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            return (
              <motion.div
                key={item.path}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-primary-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-xs font-medium">{item.label}</span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </nav>

      {/* Mobile padding for bottom nav */}
      <div className="h-20 md:hidden" />
    </div>
  )
}

export default Layout