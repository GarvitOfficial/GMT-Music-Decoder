import CryptoJS from 'crypto-js'

// these are my demo account credentials so don't use them for commercial purposes
const ACR_CONFIG = {
  host: 'identify-ap-southeast-1.acrcloud.com',
  access_key: 'b8f9a074cd1ea1f0ee381edd612000a6',
  access_secret: '0hj7SQlM5TmQYXHJN1r9abW0E1EYNe8ojnewonWA',
  endpoint: '/v1/identify',
}

export async function identifySong(audioFile: File) {
  try {
    // Read the audio file as ArrayBuffer
    const audioData = await audioFile.arrayBuffer()

    // Prepare the request with proper signature
    const timestamp = Math.floor(Date.now() / 1000)
    const signature = createSignature(timestamp)

    // Create FormData with the audio file
    const formData = new FormData()
    const audioBlob = new Blob([audioData], { type: 'application/octet-stream' })
    
    formData.append('sample', audioBlob, 'sample.bin')
    formData.append('sample_bytes', audioData.byteLength.toString())
    formData.append('access_key', ACR_CONFIG.access_key)
    formData.append('data_type', 'audio')
    formData.append('signature_version', '1')
    formData.append('signature', signature)
    formData.append('timestamp', timestamp.toString())

    // Make the request
    const response = await fetch(`https://${ACR_CONFIG.host}${ACR_CONFIG.endpoint}`, {
      method: 'POST',
      body: formData,
    })

    const result = await response.json()
    return parseACRResponse(result)
  } catch (error) {
    console.error('ACR identification error:', error)
    return {
      status: 'error',
      message: 'Failed to identify song',
    }
  }
}

function createSignature(timestamp: number): string {
  const stringToSign = [
    'POST',
    ACR_CONFIG.endpoint,
    ACR_CONFIG.access_key,
    'audio',
    '1',
    timestamp.toString()
  ].join('\n')

  // Use CryptoJS for HMAC-SHA1 signature
  const signature = CryptoJS.HmacSHA1(stringToSign, ACR_CONFIG.access_secret)
  return CryptoJS.enc.Base64.stringify(signature)
}

function parseACRResponse(response: any) {
  console.log('ACR Response:', response)

  if (response.status && response.status.code === 0 && response.metadata && response.metadata.music) {
    // Get the first (most confident) result
    const music = response.metadata.music[0]
    
    return {
      status: 'success',
      title: music.title || 'Unknown Title',
      artist: music.artists?.[0]?.name || 'Unknown Artist',
      album: music.album?.name || null,
      cover_art: null, // ACRCloud doesn't provide cover art in this response
      external_urls: music.external_ids || {},
      score: music.score || 0,
      duration: music.duration_ms ? Math.floor(music.duration_ms / 1000) : null,
      release_date: music.release_date || null,
      genres: music.genres?.map((g: any) => g.name) || [],
    }
  }

  return {
    status: 'error',
    message: response.status?.msg || 'Song not found in database',
  }
}