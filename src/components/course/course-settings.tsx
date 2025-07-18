'use client'

import { UseFormReturn } from 'react-hook-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Trash2, Save } from 'lucide-react'
import { Course } from '@/lib/validations'
import { useCourseStore } from '@/lib/store'

interface CourseSettingsProps {
  form: UseFormReturn<Course>
}

export function CourseSettings({ form }: CourseSettingsProps) {
  const { reset: resetStore } = useCourseStore()
  
  const {
    register,
    formState: { errors },
    watch,
    setValue,
    reset
  } = form

  const watchedFields = watch()

  const handleResetCourse = () => {
    const confirmReset = window.confirm(
      'Are you sure you want to reset the entire course? This will delete all course data and cannot be undone.'
    )
    
    if (confirmReset) {
      reset()
      resetStore()
    }
  }

  const handleExportCourse = () => {
    const courseData = {
      course: watchedFields,
      timestamp: new Date().toISOString(),
      version: '1.0'
    }
    
    const dataStr = JSON.stringify(courseData, null, 2)
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr)
    
    const exportFileDefaultName = `${watchedFields.title || 'course'}-export.json`
    
    const linkElement = document.createElement('a')
    linkElement.setAttribute('href', dataUri)
    linkElement.setAttribute('download', exportFileDefaultName)
    linkElement.click()
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Publication Settings</CardTitle>
          <CardDescription>
            Control when and how your course is published
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="publishDate" className="text-sm font-medium">
                Publish Date
              </label>
              <Input
                id="publishDate"
                type="datetime-local"
                placeholder="Select publish date"
              />
              <p className="text-sm text-muted-foreground">
                Schedule when the course should be published
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="expiryDate" className="text-sm font-medium">
                Expiry Date (Optional)
              </label>
              <Input
                id="expiryDate"
                type="datetime-local"
                placeholder="Select expiry date"
              />
              <p className="text-sm text-muted-foreground">
                Set when the course should no longer be available
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="enrollmentLimit" className="text-sm font-medium">
              Enrollment Limit
            </label>
            <Input
              id="enrollmentLimit"
              type="number"
              min="0"
              placeholder="0 for unlimited"
            />
            <p className="text-sm text-muted-foreground">
              Maximum number of students who can enroll (0 for unlimited)
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input
                id="requiresApproval"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="requiresApproval" className="text-sm font-medium">
                Require instructor approval for enrollment
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input
                id="allowDiscussions"
                type="checkbox"
                defaultChecked
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="allowDiscussions" className="text-sm font-medium">
                Allow course discussions
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input
                id="allowDownloads"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="allowDownloads" className="text-sm font-medium">
                Allow content downloads
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Access Control</CardTitle>
          <CardDescription>
            Control who can access your course
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="accessLevel" className="text-sm font-medium">
              Access Level
            </label>
            <select
              id="accessLevel"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="public">Public - Anyone can enroll</option>
              <option value="private">Private - Invite only</option>
              <option value="organization">Organization - Members only</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="accessCode" className="text-sm font-medium">
              Access Code (Optional)
            </label>
            <Input
              id="accessCode"
              placeholder="Enter access code"
            />
            <p className="text-sm text-muted-foreground">
              Students will need this code to enroll
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor="allowedDomains" className="text-sm font-medium">
              Allowed Email Domains (Optional)
            </label>
            <Input
              id="allowedDomains"
              placeholder="example.com, university.edu"
            />
            <p className="text-sm text-muted-foreground">
              Comma-separated list of allowed email domains
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Certificates</CardTitle>
          <CardDescription>
            Configure course completion certificates
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input
                id="enableCertificates"
                type="checkbox"
                defaultChecked
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="enableCertificates" className="text-sm font-medium">
                Enable completion certificates
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="certificateTemplate" className="text-sm font-medium">
              Certificate Template
            </label>
            <select
              id="certificateTemplate"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="default">Default Template</option>
              <option value="modern">Modern Template</option>
              <option value="classic">Classic Template</option>
              <option value="custom">Custom Template</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="completionThreshold" className="text-sm font-medium">
              Completion Threshold (%)
            </label>
            <Input
              id="completionThreshold"
              type="number"
              min="0"
              max="100"
              defaultValue="80"
              placeholder="80"
            />
            <p className="text-sm text-muted-foreground">
              Minimum percentage of course completion required for certificate
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Advanced Settings</CardTitle>
          <CardDescription>
            Additional course configuration options
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="courseLanguage" className="text-sm font-medium">
              Course Language
            </label>
            <select
              id="courseLanguage"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="pt">Portuguese</option>
              <option value="it">Italian</option>
              <option value="ja">Japanese</option>
              <option value="ko">Korean</option>
              <option value="zh">Chinese</option>
              <option value="hi">Hindi</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="seoTitle" className="text-sm font-medium">
              SEO Title
            </label>
            <Input
              id="seoTitle"
              placeholder="Enter SEO-optimized title"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="seoDescription" className="text-sm font-medium">
              SEO Description
            </label>
            <Textarea
              id="seoDescription"
              placeholder="Enter SEO-optimized description"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="seoKeywords" className="text-sm font-medium">
              SEO Keywords
            </label>
            <Input
              id="seoKeywords"
              placeholder="keyword1, keyword2, keyword3"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Course Management</CardTitle>
          <CardDescription>
            Import, export, and manage course data
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button onClick={handleExportCourse} variant="outline">
              <Save className="mr-2 h-4 w-4" />
              Export Course
            </Button>
            <Button variant="outline">
              <Save className="mr-2 h-4 w-4" />
              Import Course
            </Button>
            <Button variant="outline">
              Duplicate Course
            </Button>
          </div>

          <div className="pt-4 border-t">
            <h4 className="font-medium text-destructive mb-2">Danger Zone</h4>
            <p className="text-sm text-muted-foreground mb-4">
              These actions cannot be undone. Please be careful.
            </p>
            <Button onClick={handleResetCourse} variant="destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Reset Course
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}