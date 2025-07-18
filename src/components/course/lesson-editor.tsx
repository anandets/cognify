'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Save, X, ArrowLeft, Upload, Play, FileText, Image, Volume2, FileIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FileUpload } from './file-upload'
import { useCourseStore } from '@/lib/store'
import { Lesson, lessonSchema } from '@/lib/validations'

interface LessonEditorProps {
  lessonId: string | null
  moduleId: string | null
  onClose: () => void
}

export function LessonEditor({ lessonId, moduleId, onClose }: LessonEditorProps) {
  const { lessons, updateLesson } = useCourseStore()
  const lesson = lessonId ? lessons.find(l => l.id === lessonId) : null

  const form = useForm<Lesson>({
    resolver: zodResolver(lessonSchema),
    defaultValues: lesson || {
      id: '',
      title: '',
      description: '',
      content: '',
      contentType: 'text',
      order: 0,
      duration: 0,
      isPublished: false
    }
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
    watch,
    setValue
  } = form

  const watchedContentType = watch('contentType')

  useEffect(() => {
    if (lesson) {
      reset(lesson)
    }
  }, [lesson, reset])

  const onSubmit = (data: Lesson) => {
    if (lessonId) {
      updateLesson(lessonId, data)
    }
    onClose()
  }

  const handleCancel = () => {
    if (isDirty) {
      const confirmDiscard = window.confirm('You have unsaved changes. Are you sure you want to discard them?')
      if (!confirmDiscard) return
    }
    onClose()
  }

  const handleFileUpload = (fileUrl: string, fileType: string) => {
    switch (fileType) {
      case 'video':
        setValue('videoUrl', fileUrl)
        setValue('contentType', 'video')
        break
      case 'audio':
        setValue('audioUrl', fileUrl)
        setValue('contentType', 'audio')
        break
      case 'image':
        setValue('imageUrl', fileUrl)
        setValue('contentType', 'image')
        break
      case 'document':
        setValue('pdfUrl', fileUrl)
        setValue('contentType', 'pdf')
        break
    }
  }

  const getContentIcon = (contentType: string) => {
    switch (contentType) {
      case 'video':
        return <Play className="h-4 w-4" />
      case 'audio':
        return <Volume2 className="h-4 w-4" />
      case 'image':
        return <Image className="h-4 w-4" />
      case 'pdf':
        return <FileIcon className="h-4 w-4" />
      case 'text':
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={onClose}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h2 className="text-2xl font-bold">
              {lesson ? 'Edit Lesson' : 'Create Lesson'}
            </h2>
            <p className="text-muted-foreground">
              {lesson ? 'Update lesson content' : 'Add a new lesson to your module'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handleCancel}>
            <X className="mr-2 h-4 w-4" />
            Cancel
          </Button>
          <Button onClick={handleSubmit(onSubmit)} disabled={!isDirty}>
            <Save className="mr-2 h-4 w-4" />
            Save Lesson
          </Button>
        </div>
      </div>

      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Lesson Information</CardTitle>
              <CardDescription>
                Provide basic details about this lesson
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">
                  Lesson Title *
                </label>
                <Input
                  id="title"
                  placeholder="Enter lesson title"
                  {...register('title')}
                  className={errors.title ? 'border-destructive' : ''}
                />
                {errors.title && (
                  <p className="text-sm text-destructive">{errors.title.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium">
                  Lesson Description
                </label>
                <Textarea
                  id="description"
                  placeholder="Describe what students will learn in this lesson"
                  rows={3}
                  {...register('description')}
                  className={errors.description ? 'border-destructive' : ''}
                />
                {errors.description && (
                  <p className="text-sm text-destructive">{errors.description.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="contentType" className="text-sm font-medium">
                    Content Type *
                  </label>
                  <select
                    id="contentType"
                    {...register('contentType')}
                    className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                      errors.contentType ? 'border-destructive' : ''
                    }`}
                  >
                    <option value="text">Text Content</option>
                    <option value="video">Video</option>
                    <option value="audio">Audio</option>
                    <option value="image">Image</option>
                    <option value="pdf">PDF Document</option>
                    <option value="interactive">Interactive Content</option>
                  </select>
                  {errors.contentType && (
                    <p className="text-sm text-destructive">{errors.contentType.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="duration" className="text-sm font-medium">
                    Duration (minutes) *
                  </label>
                  <Input
                    id="duration"
                    type="number"
                    min="1"
                    max="600"
                    placeholder="0"
                    {...register('duration', { valueAsNumber: true })}
                    className={errors.duration ? 'border-destructive' : ''}
                  />
                  {errors.duration && (
                    <p className="text-sm text-destructive">{errors.duration.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="order" className="text-sm font-medium">
                  Lesson Order
                </label>
                <Input
                  id="order"
                  type="number"
                  min="0"
                  placeholder="0"
                  {...register('order', { valueAsNumber: true })}
                  className={errors.order ? 'border-destructive' : ''}
                />
                {errors.order && (
                  <p className="text-sm text-destructive">{errors.order.message}</p>
                )}
                <p className="text-sm text-muted-foreground">
                  The order in which this lesson appears in the module
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {getContentIcon(watchedContentType)}
                Lesson Content
              </CardTitle>
              <CardDescription>
                Add your lesson content based on the selected type
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {watchedContentType === 'text' && (
                <div className="space-y-2">
                  <label htmlFor="content" className="text-sm font-medium">
                    Text Content
                  </label>
                  <Textarea
                    id="content"
                    placeholder="Enter your lesson content here. You can use markdown formatting."
                    rows={10}
                    {...register('content')}
                    className={errors.content ? 'border-destructive' : ''}
                  />
                  {errors.content && (
                    <p className="text-sm text-destructive">{errors.content.message}</p>
                  )}
                  <p className="text-sm text-muted-foreground">
                    Supports markdown formatting for rich text
                  </p>
                </div>
              )}

              {watchedContentType === 'video' && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="videoUrl" className="text-sm font-medium">
                      Video URL
                    </label>
                    <Input
                      id="videoUrl"
                      placeholder="Enter video URL or upload a file"
                      {...register('videoUrl')}
                      className={errors.videoUrl ? 'border-destructive' : ''}
                    />
                    {errors.videoUrl && (
                      <p className="text-sm text-destructive">{errors.videoUrl.message}</p>
                    )}
                  </div>
                  <FileUpload
                    onFileUpload={handleFileUpload}
                    acceptedTypes={['video']}
                    maxSize={500 * 1024 * 1024} // 500MB
                  />
                </div>
              )}

              {watchedContentType === 'audio' && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="audioUrl" className="text-sm font-medium">
                      Audio URL
                    </label>
                    <Input
                      id="audioUrl"
                      placeholder="Enter audio URL or upload a file"
                      {...register('audioUrl')}
                      className={errors.audioUrl ? 'border-destructive' : ''}
                    />
                    {errors.audioUrl && (
                      <p className="text-sm text-destructive">{errors.audioUrl.message}</p>
                    )}
                  </div>
                  <FileUpload
                    onFileUpload={handleFileUpload}
                    acceptedTypes={['audio']}
                    maxSize={100 * 1024 * 1024} // 100MB
                  />
                </div>
              )}

              {watchedContentType === 'image' && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="imageUrl" className="text-sm font-medium">
                      Image URL
                    </label>
                    <Input
                      id="imageUrl"
                      placeholder="Enter image URL or upload a file"
                      {...register('imageUrl')}
                      className={errors.imageUrl ? 'border-destructive' : ''}
                    />
                    {errors.imageUrl && (
                      <p className="text-sm text-destructive">{errors.imageUrl.message}</p>
                    )}
                  </div>
                  <FileUpload
                    onFileUpload={handleFileUpload}
                    acceptedTypes={['image']}
                    maxSize={10 * 1024 * 1024} // 10MB
                  />
                </div>
              )}

              {watchedContentType === 'pdf' && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="pdfUrl" className="text-sm font-medium">
                      PDF URL
                    </label>
                    <Input
                      id="pdfUrl"
                      placeholder="Enter PDF URL or upload a file"
                      {...register('pdfUrl')}
                      className={errors.pdfUrl ? 'border-destructive' : ''}
                    />
                    {errors.pdfUrl && (
                      <p className="text-sm text-destructive">{errors.pdfUrl.message}</p>
                    )}
                  </div>
                  <FileUpload
                    onFileUpload={handleFileUpload}
                    acceptedTypes={['document']}
                    maxSize={50 * 1024 * 1024} // 50MB
                  />
                </div>
              )}

              {watchedContentType === 'interactive' && (
                <div className="space-y-2">
                  <label htmlFor="interactiveContent" className="text-sm font-medium">
                    Interactive Content
                  </label>
                  <Textarea
                    id="interactiveContent"
                    placeholder="Enter interactive content configuration (JSON format)"
                    rows={8}
                    {...register('interactiveContent')}
                    className={errors.interactiveContent ? 'border-destructive' : ''}
                  />
                  {errors.interactiveContent && (
                    <p className="text-sm text-destructive">{errors.interactiveContent.message}</p>
                  )}
                  <p className="text-sm text-muted-foreground">
                    JSON configuration for interactive elements like quizzes, polls, etc.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Lesson Settings</CardTitle>
              <CardDescription>
                Configure lesson visibility and access settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  id="isPublished"
                  type="checkbox"
                  {...register('isPublished')}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="isPublished" className="text-sm font-medium">
                  Publish this lesson
                </label>
              </div>
              <p className="text-sm text-muted-foreground">
                Published lessons are visible to students. Unpublished lessons are only visible to instructors.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}