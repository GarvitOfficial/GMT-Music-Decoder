import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Settings as SettingsIcon, 
  Bell, 
  Shield, 
  Info, 
  Mail, 
  Star, 
  Trash2,
  Download,
  ChevronRight
} from 'lucide-react'
import { clearHistory } from '../services/storage'

const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState(false)
  const [autoSave, setAutoSave] = useState(true)

  const handleNotificationToggle = async (enabled: boolean) => {
    if (enabled) {
      try {
        const permission = await Notification.requestPermission()
        if (permission === 'granted') {
          setNotifications(true)
          // You can show a test notification here if needed
          // new Notification('Notifications enabled', {
          //   body: 'You will now receive notifications from GMT Music Decoder',
          //   icon: '/favicon.ico'
          // })
        } else if (permission === 'denied') {
          alert('Please enable notifications in your browser settings to receive updates')
          setNotifications(false)
        }
      } catch (error) {
        console.error('Error requesting notification permission:', error)
        setNotifications(false)
      }
    } else {
      setNotifications(false)
    }
  }

  const handleClearHistory = () => {
    if (window.confirm('This will permanently delete all your identified songs. This action cannot be undone.')) {
      clearHistory()
      alert('History cleared successfully')
    }
  }

  const handleRateApp = () => {
    alert('Thank you for using our app! This would normally open the app store.')
  }

  const handleContactSupport = () => {
    window.open('mailto:support@gmt-music-decoder.com', '_blank')
  }

  const SettingItem = ({ 
    icon: Icon, 
    title, 
    subtitle, 
    onClick, 
    showSwitch = false, 
    switchValue = false, 
    onSwitchChange,
    color = 'text-gray-400',
    to
  }: any) => {
    const content = (
      <div className="flex items-center justify-between p-4 hover:bg-gray-800/50 transition-colors rounded-lg cursor-pointer">
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 bg-gradient-to-br ${color.replace('text-', 'from-')}/20 ${color.replace('text-', 'to-')}/20 rounded-xl flex items-center justify-center`}>
            <Icon size={20} className={color} />
          </div>
          <div>
            <h3 className="font-medium text-white">{title}</h3>
            {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
          </div>
        </div>
        {showSwitch ? (
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={switchValue}
              onChange={(e) => onSwitchChange?.(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
          </label>
        ) : (
          <ChevronRight size={20} className="text-gray-400" />
        )}
      </div>
    )

    if (to) {
      return <Link to={to}>{content}</Link>
    }

    return <div onClick={onClick}>{content}</div>
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <SettingsIcon size={32} className="text-cyan-400" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">Settings</h1>
          <p className="text-gray-400">Customize your GMT-Music Decoder experience</p>
        </div>

        {/* Preferences Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Preferences</h2>
          <div className="card p-0 overflow-hidden">
            <SettingItem
              icon={Bell}
              title="Notifications"
              subtitle="Get notified about new features"
              showSwitch={true}
              switchValue={notifications}
              onSwitchChange={handleNotificationToggle}
              color="text-yellow-400"
            />

            <SettingItem
              icon={Download}
              title="Auto-save to History"
              subtitle="Automatically save identified songs"
              showSwitch={true}
              switchValue={autoSave}
              onSwitchChange={setAutoSave}
              color="text-cyan-400"
            />
          </div>
        </section>

        {/* Data & Privacy Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Data & Privacy</h2>
          <div className="card p-0 overflow-hidden">
            <SettingItem
              icon={Shield}
              title="Privacy Policy"
              subtitle="How we protect your data"
              to="/privacy"
              color="text-green-400"
            />
            <SettingItem
              icon={Trash2}
              title="Clear History"
              subtitle="Delete all identified songs"
              onClick={handleClearHistory}
              color="text-red-400"
            />
          </div>
        </section>

        {/* Support Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4">Support</h2>
          <div className="card p-0 overflow-hidden">
            <SettingItem
              icon={Info}
              title="About"
              subtitle="Learn more about the app"
              to="/about"
              color="text-cyan-400"
            />
            <SettingItem
              icon={Mail}
              title="Contact Support"
              subtitle="Get help from our team"
              onClick={handleContactSupport}
              color="text-purple-400"
            />
            <SettingItem
              icon={Star}
              title="Rate the App"
              subtitle="Share your feedback"
              onClick={handleRateApp}
              color="text-yellow-400"
            />
          </div>
        </section>

        {/* App Info */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-2">GMT-Music Decoder</h3>
          <p className="text-gray-400 mb-2">Version 1.0.0</p>
          <p className="text-gray-500 text-sm">© 2025 GMT-Music Decoder</p>
        </div>
      </div>
    </div>
  )
}

export default Settings