'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Clock, Users, Star, Play, FileText, Volume2, Image, FileIcon } from 'lucide-react'
import { useCourseStore } from '@/lib/store'

export function CoursePreview() {
  const { course, modules, lessons } = useCourseStore()

  if (!course) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">
          No course data available for preview
        </p>
      </div>
    )
  }

  const getModuleLessons = (moduleId: string) => {
    const module = modules.find(m => m.id === moduleId)
    if (!module) return []
    
    return module.lessons
      .map(lessonId => lessons.find(l => l.id === lessonId))
      .filter(Boolean)
      .sort((a, b) => a!.order - b!.order)
  }

  const getTotalDuration = () => {
    return lessons.reduce((total, lesson) => total + lesson.duration, 0)
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
      {/* Course Header */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{course.category}</Badge>
                <Badge variant="outline">{course.level}</Badge>
                {course.isPublished && (
                  <Badge variant="default">Published</Badge>
                )}
              </div>
              <CardTitle className="text-3xl">{course.title}</CardTitle>
              <CardDescription className="text-lg">
                {course.description}
              </CardDescription>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">
                {course.isPaid ? `$${course.price}` : 'Free'}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">
                {getTotalDuration()} minutes
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">
                {modules.length} modules
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">
                {lessons.length} lessons
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">
                {course.level} level
              </span>
            </div>
          </div>

          {course.prerequisites && course.prerequisites.length > 0 && (
            <div className="mt-4">
              <h4 className="font-medium mb-2">Prerequisites:</h4>
              <div className="flex flex-wrap gap-2">
                {course.prerequisites.map((prereq, index) => (
                  <Badge key={index} variant="outline">
                    {prereq}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {course.tags && course.tags.length > 0 && (
            <div className="mt-4">
              <h4 className="font-medium mb-2">Tags:</h4>
              <div className="flex flex-wrap gap-2">
                {course.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Course Content */}
      <Card>
        <CardHeader>
          <CardTitle>Course Content</CardTitle>
          <CardDescription>
            {modules.length} modules • {lessons.length} lessons • {getTotalDuration()} minutes total
          </CardDescription>
        </CardHeader>
        <CardContent>
          {modules.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">
                No modules have been created yet
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {modules
                .sort((a, b) => a.order - b.order)
                .map((module, moduleIndex) => {
                  const moduleLessons = getModuleLessons(module.id)
                  const moduleDuration = moduleLessons.reduce((total, lesson) => total + lesson!.duration, 0)
                  
                  return (
                    <Card key={module.id} className="border-l-4 border-l-primary">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">
                            Module {moduleIndex + 1}: {module.title}
                          </CardTitle>
                          <div className="text-sm text-muted-foreground">
                            {moduleLessons.length} lessons • {moduleDuration} min
                          </div>
                        </div>
                        {module.description && (
                          <CardDescription>{module.description}</CardDescription>
                        )}
                      </CardHeader>
                      <CardContent>
                        {moduleLessons.length === 0 ? (
                          <p className="text-sm text-muted-foreground italic">
                            No lessons in this module
                          </p>
                        ) : (
                          <div className="space-y-2">
                            {moduleLessons.map((lesson, lessonIndex) => (
                              <div
                                key={lesson!.id}
                                className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50"
                              >
                                <div className="flex items-center gap-3">
                                  {getContentIcon(lesson!.contentType)}
                                  <div>
                                    <p className="font-medium">
                                      {lessonIndex + 1}. {lesson!.title}
                                    </p>
                                    {lesson!.description && (
                                      <p className="text-sm text-muted-foreground">
                                        {lesson!.description}
                                      </p>
                                    )}
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Clock className="h-4 w-4" />
                                  <span>{lesson!.duration} min</span>
                                  {lesson!.isPublished && (
                                    <Badge variant="outline" className="ml-2">
                                      Published
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Course Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Course Actions</CardTitle>
          <CardDescription>
            Actions available for this course
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Button>
              Enroll Now
            </Button>
            <Button variant="outline">
              Preview Course
            </Button>
            <Button variant="outline">
              Add to Wishlist
            </Button>
            <Button variant="outline">
              Share Course
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}