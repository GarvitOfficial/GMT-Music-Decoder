import React, { useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDropzone } from 'react-dropzone'
import { Upload, FileAudio, X, CloudUpload, Music, CheckCircle } from 'lucide-react'

interface FileUploadZoneProps {
  onFileSelect: (file: File) => void
  selectedFile: File | null
  onReset: () => void
}

const FileUploadZone: React.FC<FileUploadZoneProps> = ({ onFileSelect, selectedFile, onReset }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (file) {
      const supportedFormats = ['mp3', 'wav', 'm4a', 'flac', 'aac', 'amr', 'ape']
      const fileExtension = file.name.split('.').pop()?.toLowerCase()
      
      if (fileExtension && supportedFormats.includes(fileExtension)) {
        onFileSelect(file)
      } else {
        alert('Unsupported Format. Please select a supported audio format: MP3, WAV, M4A, FLAC, AAC, AMR, or APE')
      }
    }
  }, [onFileSelect])

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: {
      'audio/*': ['.mp3', '.wav', '.m4a', '.flac', '.aac', '.amr', '.ape']
    },
    multiple: false
  })

  const formatFileSize = (bytes: number) => {
    return (bytes / 1024 / 1024).toFixed(2) + ' MB'
  }

  if (selectedFile) {
    return (
      <motion.div 
        className="card border-2 border-primary-500 bg-gradient-to-br from-primary-500/10 to-secondary-500/10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.div 
              className="w-14 h-14 bg-gradient-to-br from-primary-400/20 to-secondary-500/20 rounded-2xl flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FileAudio size={24} className="text-primary-400" />
            </motion.div>
            <div>
              <h3 className="font-bold text-lg text-white mb-1">{selectedFile.name}</h3>
              <p className="text-gray-400 text-sm">{formatFileSize(selectedFile.size)}</p>
              <div className="flex items-center gap-2 mt-1">
                <CheckCircle size={14} className="text-green-400" />
                <p className="text-primary-400 text-xs font-medium">Ready to identify</p>
              </div>
            </div>
          </div>
          <motion.button
            onClick={onReset}
            className="p-3 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={20} />
          </motion.button>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      {...getRootProps()}
      className={`card border-2 border-dashed transition-all duration-300 min-h-[280px] flex flex-col items-center justify-center text-center group cursor-pointer ${
        isDragActive && !isDragReject
          ? 'border-primary-400 bg-gradient-to-br from-primary-500/10 to-secondary-500/10'
          : isDragReject
          ? 'border-red-400 bg-gradient-to-br from-red-500/10 to-orange-500/10'
          : 'border-gray-600 hover:border-primary-400 hover:bg-gradient-to-br hover:from-primary-500/5 hover:to-secondary-500/5'
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <input {...getInputProps()} />
      
      <AnimatePresence mode="wait">
        {isDragActive ? (
          <motion.div
            key="drag-active"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="w-24 h-24 bg-gradient-to-br from-primary-400/20 to-secondary-500/20 rounded-3xl flex items-center justify-center mb-6"
          >
            <Upload size={48} className="text-primary-400 animate-bounce" />
          </motion.div>
        ) : (
          <motion.div
            key="default"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="w-24 h-24 bg-gradient-to-br from-primary-400/20 to-secondary-500/20 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
          >
            <CloudUpload size={48} className="text-primary-400" />
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.h3 
        className="text-2xl font-bold text-white mb-3"
        animate={isDragActive ? { scale: 1.05 } : { scale: 1 }}
      >
        {isDragActive && !isDragReject
          ? 'Drop your audio file here'
          : isDragReject
          ? 'Invalid file type'
          : 'Upload Audio File'
        }
      </motion.h3>
      
      <motion.p 
        className="text-gray-400 mb-6 max-w-md"
        animate={isDragActive ? { opacity: 0.7 } : { opacity: 1 }}
      >
        {isDragActive && !isDragReject
          ? 'Release to upload'
          : isDragReject
          ? 'Please select a supported audio format'
          : 'Drag and drop your audio file here or click to browse'
        }
      </motion.p>
      
      {!isDragActive && (
        <motion.button 
          className="btn btn-primary mb-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Upload size={20} />
          Choose File
        </motion.button>
      )}
      
      <div className="flex flex-wrap justify-center gap-2">
        {['MP3', 'WAV', 'M4A', 'FLAC', 'AAC', 'AMR', 'APE'].map((format, index) => (
          <motion.span
            key={format}
            className="px-3 py-1 bg-secondary-500/20 text-secondary-400 text-xs font-medium rounded-lg border border-secondary-500/30"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {format}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default FileUploadZone