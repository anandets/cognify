'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Save, X, ArrowLeft } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useCourseStore } from '@/lib/store'
import { Module, moduleSchema } from '@/lib/validations'

interface ModuleEditorProps {
  moduleId: string | null
  onClose: () => void
}

export function ModuleEditor({ moduleId, onClose }: ModuleEditorProps) {
  const { modules, updateModule } = useCourseStore()
  const module = moduleId ? modules.find(m => m.id === moduleId) : null

  const form = useForm<Module>({
    resolver: zodResolver(moduleSchema),
    defaultValues: module || {
      id: '',
      title: '',
      description: '',
      order: 0,
      lessons: [],
      isPublished: false
    }
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset
  } = form

  useEffect(() => {
    if (module) {
      reset(module)
    }
  }, [module, reset])

  const onSubmit = (data: Module) => {
    if (moduleId) {
      updateModule(moduleId, data)
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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={onClose}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h2 className="text-2xl font-bold">
              {module ? 'Edit Module' : 'Create Module'}
            </h2>
            <p className="text-muted-foreground">
              {module ? 'Update module information' : 'Add a new module to your course'}
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
            Save Module
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Module Information</CardTitle>
          <CardDescription>
            Provide details about this module
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Module Title *
              </label>
              <Input
                id="title"
                placeholder="Enter module title"
                {...register('title')}
                className={errors.title ? 'border-destructive' : ''}
              />
              {errors.title && (
                <p className="text-sm text-destructive">{errors.title.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Module Description
              </label>
              <Textarea
                id="description"
                placeholder="Describe what students will learn in this module"
                rows={4}
                {...register('description')}
                className={errors.description ? 'border-destructive' : ''}
              />
              {errors.description && (
                <p className="text-sm text-destructive">{errors.description.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="order" className="text-sm font-medium">
                Module Order
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
                The order in which this module appears in the course
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="prerequisites" className="text-sm font-medium">
                Prerequisites
              </label>
              <Textarea
                id="prerequisites"
                placeholder="List any prerequisites for this module"
                rows={2}
                onChange={(e) => {
                  const prerequisites = e.target.value.split(',').map(prereq => prereq.trim()).filter(Boolean)
                  form.setValue('prerequisites', prerequisites)
                }}
              />
              <p className="text-sm text-muted-foreground">
                Comma-separated list of skills or knowledge required
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="isPublished"
                type="checkbox"
                {...register('isPublished')}
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="isPublished" className="text-sm font-medium">
                Publish this module
              </label>
              <p className="text-sm text-muted-foreground">
                (Students can only see published modules)
              </p>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Module Statistics</CardTitle>
          <CardDescription>
            Overview of this module's content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {module?.lessons.length || 0}
              </div>
              <div className="text-sm text-muted-foreground">Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {/* TODO: Calculate total duration */}
                0
              </div>
              <div className="text-sm text-muted-foreground">Total Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {module?.isPublished ? 'Published' : 'Draft'}
              </div>
              <div className="text-sm text-muted-foreground">Status</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}