const HISTORY_KEY = 'gmt_music_history'

export async function saveToHistory(songData: any) {
  try {
    const history = await getHistory()
    const newEntry = {
      id: Date.now().toString(),
      ...songData,
      identifiedAt: new Date().toISOString(),
    }
    
    const updatedHistory = [newEntry, ...history]
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory))
  } catch (error) {
    console.error('Failed to save to history:', error)
  }
}

export async function getHistory(): Promise<any[]> {
  try {
    const history = localStorage.getItem(HISTORY_KEY)
    return history ? JSON.parse(history) : []
  } catch (error) {
    console.error('Failed to get history:', error)
    return []
  }
}

export async function clearHistory() {
  try {
    localStorage.removeItem(HISTORY_KEY)
  } catch (error) {
    console.error('Failed to clear history:', error)
  }
}

export async function removeFromHistory(itemId: string) {
  try {
    const history = await getHistory()
    const updatedHistory = history.filter(item => item.id !== itemId)
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory))
  } catch (error) {
    console.error('Failed to remove item from history:', error)
  }
}