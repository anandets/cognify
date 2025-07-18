'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, X, FileIcon, AlertCircle, CheckCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { formatFileSize } from '@/lib/utils'

interface FileUploadProps {
  onFileUpload: (fileUrl: string, fileType: string) => void
  acceptedTypes: string[]
  maxSize?: number
  className?: string
}

export function FileUpload({ onFileUpload, acceptedTypes, maxSize = 100 * 1024 * 1024, className }: FileUploadProps) {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({})
  const [errors, setErrors] = useState<string[]>([])

  const getAcceptedExtensions = () => {
    const extensions: { [key: string]: string[] } = {
      video: ['.mp4', '.mov', '.avi', '.webm'],
      audio: ['.mp3', '.wav', '.aac'],
      image: ['.jpg', '.jpeg', '.png', '.gif', '.svg'],
      document: ['.pdf', '.doc', '.docx', '.ppt', '.pptx']
    }
    
    return acceptedTypes.reduce((acc, type) => {
      return acc.concat(extensions[type] || [])
    }, [] as string[])
  }

  const validateFile = (file: File): string | null => {
    // Check file size
    if (file.size > maxSize) {
      return `File size exceeds limit of ${formatFileSize(maxSize)}`
    }

    // Check file type
    const acceptedExtensions = getAcceptedExtensions()
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase()
    
    if (!acceptedExtensions.includes(fileExtension)) {
      return `File type not supported. Accepted types: ${acceptedExtensions.join(', ')}`
    }

    return null
  }

  const simulateUpload = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const fileId = file.name + Date.now()
      let progress = 0
      
      const interval = setInterval(() => {
        progress += Math.random() * 15
        setUploadProgress(prev => ({ ...prev, [fileId]: Math.min(progress, 100) }))
        
        if (progress >= 100) {
          clearInterval(interval)
          // Simulate a file URL (in real app, this would come from your upload service)
          const mockUrl = `https://example.com/uploads/${fileId}`
          resolve(mockUrl)
        }
      }, 100)
    })
  }

  const handleFileUpload = async (files: File[]) => {
    setUploading(true)
    setErrors([])
    
    const newErrors: string[] = []
    
    for (const file of files) {
      const validationError = validateFile(file)
      if (validationError) {
        newErrors.push(`${file.name}: ${validationError}`)
        continue
      }
      
      try {
        const fileUrl = await simulateUpload(file)
        const fileType = acceptedTypes.find(type => {
          const extensions = getAcceptedExtensions()
          const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase()
          return extensions.includes(fileExtension)
        }) || 'document'
        
        onFileUpload(fileUrl, fileType)
        setUploadedFiles(prev => [...prev, file])
      } catch (error) {
        newErrors.push(`${file.name}: Upload failed`)
      }
    }
    
    setErrors(newErrors)
    setUploading(false)
  }

  const onDrop = useCallback((acceptedFiles: File[]) => {
    handleFileUpload(acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: getAcceptedExtensions().reduce((acc, ext) => {
      acc[ext] = []
      return acc
    }, {} as { [key: string]: string[] }),
    maxSize,
    multiple: false
  })

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <div className={className}>
      <Card>
        <CardContent className="p-6">
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
              isDragActive
                ? 'border-primary bg-primary/10'
                : 'border-border hover:border-primary hover:bg-primary/5'
            }`}
          >
            <input {...getInputProps()} />
            <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            {isDragActive ? (
              <p className="text-lg font-medium">Drop the file here...</p>
            ) : (
              <div>
                <p className="text-lg font-medium mb-2">
                  Drag & drop a file here, or click to select
                </p>
                <p className="text-sm text-muted-foreground">
                  Accepted types: {getAcceptedExtensions().join(', ')}
                </p>
                <p className="text-sm text-muted-foreground">
                  Max file size: {formatFileSize(maxSize)}
                </p>
              </div>
            )}
          </div>

          {errors.length > 0 && (
            <div className="mt-4 p-4 bg-destructive/10 rounded-lg">
              <div className="flex items-center gap-2 text-destructive mb-2">
                <AlertCircle className="h-4 w-4" />
                <span className="font-medium">Upload Errors:</span>
              </div>
              <ul className="text-sm text-destructive">
                {errors.map((error, index) => (
                  <li key={index}>• {error}</li>
                ))}
              </ul>
            </div>
          )}

          {uploadedFiles.length > 0 && (
            <div className="mt-4 space-y-2">
              <h4 className="font-medium">Uploaded Files:</h4>
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileIcon className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {formatFileSize(file.size)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {uploading && (
            <div className="mt-4 space-y-2">
              <h4 className="font-medium">Uploading...</h4>
              {Object.entries(uploadProgress).map(([fileId, progress]) => (
                <div key={fileId} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Uploading file...</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}