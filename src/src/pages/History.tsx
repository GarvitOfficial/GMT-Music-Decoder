import React, { useState, useEffect } from 'react'
import { Trash2, Music, Calendar, Clock, TrendingUp, RefreshCw } from 'lucide-react'
import { getHistory, clearHistory, removeFromHistory } from '../services/storage'

const History: React.FC = () => {
  const [history, setHistory] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadHistory()
  }, [])

  const loadHistory = async () => {
    try {
      const historyData = await getHistory()
      setHistory(historyData)
    } catch (error) {
      console.error('Failed to load history:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleClearHistory = () => {
    if (window.confirm('Are you sure you want to clear all history? This action cannot be undone.')) {
      clearHistory()
      setHistory([])
    }
  }

  const handleDeleteItem = (itemId: string) => {
    if (window.confirm('Are you sure you want to remove this song from your history?')) {
      removeFromHistory(itemId)
      setHistory(prev => prev.filter(item => item.id !== itemId))
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="spinner mx-auto mb-4" />
          <p className="text-gray-400">Loading history...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">History</h1>
            <p className="text-gray-400">Your identified songs</p>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={loadHistory}
              className="btn btn-secondary"
            >
              <RefreshCw size={18} />
              Refresh
            </button>
            
            {history.length > 0 && (
              <button
                onClick={handleClearHistory}
                className="btn btn-danger"
              >
                <Trash2 size={18} />
                Clear All
              </button>
            )}
          </div>
        </div>

        {history.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-8">
              <Music size={64} className="text-gray-600" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">No Songs Identified Yet</h2>
            <p className="text-gray-400 text-lg mb-8">
              Start identifying songs to see your history here
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <p className="text-gray-400">
                {history.length} song{history.length !== 1 ? 's' : ''} identified
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {history.map((item) => (
                <div key={item.id} className="card animate-fade-in">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Music size={24} className="text-cyan-400" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg text-white mb-1 truncate">{item.title}</h3>
                      <p className="text-gray-300 truncate">{item.artist}</p>
                      {item.album && <p className="text-gray-400 text-sm truncate">{item.album}</p>}
                      
                      {item.score && (
                        <div className="flex items-center gap-2 mt-2">
                          <TrendingUp size={12} className="text-green-400" />
                          <span className="text-green-400 text-sm font-medium">{item.score}% match</span>
                        </div>
                      )}
                    </div>
                    
                    <button
                      onClick={() => handleDeleteItem(item.id)}
                      className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Clock size={14} />
                      <span>{formatDate(item.identifiedAt)}</span>
                    </div>
                    
                    {item.genres && item.genres.length > 0 && (
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-lg">
                        {item.genres[0]}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default History