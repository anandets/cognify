'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus, Save, Eye, Upload } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CourseBasicInfo } from './course-basic-info'
import { CourseModules } from './course-modules'
import { CoursePreview } from './course-preview'
import { CourseSettings } from './course-settings'
import { useCourseStore } from '@/lib/store'
import { Course, courseSchema } from '@/lib/validations'
import { cn } from '@/lib/utils'

interface CourseCreatorProps {
  className?: string
}

export function CourseCreator({ className }: CourseCreatorProps) {
  const [activeTab, setActiveTab] = useState('basic')
  const {
    course,
    modules,
    lessons,
    isLoading,
    error,
    previewMode,
    isDirty,
    setCourse,
    updateCourse,
    setPreviewMode,
    saveDraft,
    publishCourse,
    reset
  } = useCourseStore()

  const form = useForm<Course>({
    resolver: zodResolver(courseSchema),
    defaultValues: course || {
      title: '',
      description: '',
      category: '',
      level: 'beginner',
      duration: 0,
      price: 0,
      isPaid: false,
      isPublished: false,
      prerequisites: [],
      tags: []
    }
  })

  const handleSaveDraft = async () => {
    try {
      const formData = form.getValues()
      updateCourse(formData)
      saveDraft()
      // TODO: Implement API call to save draft
    } catch (error) {
      console.error('Error saving draft:', error)
    }
  }

  const handlePublish = async () => {
    try {
      const formData = form.getValues()
      const validatedData = courseSchema.parse(formData)
      
      // Validate course has at least one module
      if (modules.length === 0) {
        throw new Error('Course must have at least one module to be published')
      }
      
      updateCourse(validatedData)
      publishCourse()
      // TODO: Implement API call to publish course
    } catch (error) {
      console.error('Error publishing course:', error)
    }
  }

  const handlePreview = () => {
    const formData = form.getValues()
    updateCourse(formData)
    setPreviewMode(true)
  }

  const handleReset = () => {
    form.reset()
    reset()
  }

  if (previewMode) {
    return (
      <div className={cn('w-full max-w-6xl mx-auto p-6', className)}>
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Course Preview</h1>
          <Button onClick={() => setPreviewMode(false)} variant="outline">
            Back to Edit
          </Button>
        </div>
        <CoursePreview />
      </div>
    )
  }

  return (
    <div className={cn('w-full max-w-6xl mx-auto p-6', className)}>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Create New Course</h1>
          <p className="text-muted-foreground mt-1">
            Build engaging courses with multimedia content
          </p>
        </div>
        <div className="flex items-center gap-2">
          {isDirty && (
            <span className="text-sm text-muted-foreground">
              Unsaved changes
            </span>
          )}
          <Button onClick={handleSaveDraft} variant="outline" disabled={isLoading}>
            <Save className="mr-2 h-4 w-4" />
            Save Draft
          </Button>
          <Button onClick={handlePreview} variant="outline" disabled={isLoading}>
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
          <Button onClick={handlePublish} disabled={isLoading || !isDirty}>
            <Upload className="mr-2 h-4 w-4" />
            Publish Course
          </Button>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-destructive/10 text-destructive rounded-lg">
          {error}
        </div>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="modules">Modules & Lessons</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-6">
          <CourseBasicInfo form={form} />
        </TabsContent>

        <TabsContent value="modules" className="space-y-6">
          <CourseModules />
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <CourseSettings form={form} />
        </TabsContent>

        <TabsContent value="preview" className="space-y-6">
          <CoursePreview />
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex justify-between">
        <Button onClick={handleReset} variant="outline" disabled={isLoading}>
          Reset
        </Button>
        <div className="flex gap-2">
          <Button onClick={handleSaveDraft} variant="outline" disabled={isLoading}>
            <Save className="mr-2 h-4 w-4" />
            Save Draft
          </Button>
          <Button onClick={handlePublish} disabled={isLoading || !isDirty}>
            <Upload className="mr-2 h-4 w-4" />
            Publish Course
          </Button>
        </div>
      </div>
    </div>
  )
}