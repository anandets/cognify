'use client'

import { UseFormReturn } from 'react-hook-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Course } from '@/lib/validations'

interface CourseBasicInfoProps {
  form: UseFormReturn<Course>
}

export function CourseBasicInfo({ form }: CourseBasicInfoProps) {
  const {
    register,
    formState: { errors },
    watch,
    setValue
  } = form

  const watchedFields = watch()

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Course Information</CardTitle>
          <CardDescription>
            Provide basic information about your course
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Course Title *
            </label>
            <Input
              id="title"
              placeholder="Enter course title"
              {...register('title')}
              className={errors.title ? 'border-destructive' : ''}
            />
            {errors.title && (
              <p className="text-sm text-destructive">{errors.title.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Course Description *
            </label>
            <Textarea
              id="description"
              placeholder="Describe what students will learn in this course"
              rows={4}
              {...register('description')}
              className={errors.description ? 'border-destructive' : ''}
            />
            {errors.description && (
              <p className="text-sm text-destructive">{errors.description.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="category" className="text-sm font-medium">
                Category *
              </label>
              <select
                id="category"
                {...register('category')}
                className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                  errors.category ? 'border-destructive' : ''
                }`}
              >
                <option value="">Select a category</option>
                <option value="technology">Technology</option>
                <option value="business">Business</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
                <option value="language">Language</option>
                <option value="science">Science</option>
                <option value="arts">Arts</option>
                <option value="other">Other</option>
              </select>
              {errors.category && (
                <p className="text-sm text-destructive">{errors.category.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="level" className="text-sm font-medium">
                Course Level *
              </label>
              <select
                id="level"
                {...register('level')}
                className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                  errors.level ? 'border-destructive' : ''
                }`}
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
              {errors.level && (
                <p className="text-sm text-destructive">{errors.level.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="duration" className="text-sm font-medium">
                Duration (hours) *
              </label>
              <Input
                id="duration"
                type="number"
                min="1"
                max="1000"
                placeholder="0"
                {...register('duration', { valueAsNumber: true })}
                className={errors.duration ? 'border-destructive' : ''}
              />
              {errors.duration && (
                <p className="text-sm text-destructive">{errors.duration.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="price" className="text-sm font-medium">
                Price ($)
              </label>
              <Input
                id="price"
                type="number"
                min="0"
                max="10000"
                step="0.01"
                placeholder="0.00"
                {...register('price', { valueAsNumber: true })}
                className={errors.price ? 'border-destructive' : ''}
              />
              {errors.price && (
                <p className="text-sm text-destructive">{errors.price.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="tags" className="text-sm font-medium">
              Tags (comma-separated)
            </label>
            <Input
              id="tags"
              placeholder="e.g., programming, web development, javascript"
              onChange={(e) => {
                const tags = e.target.value.split(',').map(tag => tag.trim()).filter(Boolean)
                setValue('tags', tags)
              }}
            />
            <p className="text-sm text-muted-foreground">
              Add relevant tags to help students find your course
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor="prerequisites" className="text-sm font-medium">
              Prerequisites (comma-separated)
            </label>
            <Input
              id="prerequisites"
              placeholder="e.g., Basic programming knowledge, HTML/CSS"
              onChange={(e) => {
                const prerequisites = e.target.value.split(',').map(prereq => prereq.trim()).filter(Boolean)
                setValue('prerequisites', prerequisites)
              }}
            />
            <p className="text-sm text-muted-foreground">
              List any skills or knowledge required before taking this course
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Course Options</CardTitle>
          <CardDescription>
            Configure additional course settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              id="isPaid"
              type="checkbox"
              {...register('isPaid')}
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <label htmlFor="isPaid" className="text-sm font-medium">
              This is a paid course
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              id="isPublished"
              type="checkbox"
              {...register('isPublished')}
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <label htmlFor="isPublished" className="text-sm font-medium">
              Publish course immediately
            </label>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}