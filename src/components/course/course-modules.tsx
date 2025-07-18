'use client'

import { useState } from 'react'
import { Plus, GripVertical, Edit2, Trash2, ChevronDown, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ModuleEditor } from './module-editor'
import { LessonEditor } from './lesson-editor'
import { useCourseStore } from '@/lib/store'
import { Module, Lesson } from '@/lib/validations'
import { generateId } from '@/lib/utils'

export function CourseModules() {
  const [editingModule, setEditingModule] = useState<string | null>(null)
  const [editingLesson, setEditingLesson] = useState<string | null>(null)
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set())
  const [showModuleEditor, setShowModuleEditor] = useState(false)
  const [showLessonEditor, setShowLessonEditor] = useState(false)
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null)

  const {
    modules,
    lessons,
    addModule,
    updateModule,
    removeModule,
    addLesson,
    updateLesson,
    removeLesson,
    reorderModules,
    reorderLessons
  } = useCourseStore()

  const handleAddModule = () => {
    const newModule: Module = {
      id: generateId(),
      title: '',
      description: '',
      order: modules.length,
      lessons: [],
      isPublished: false
    }
    addModule(newModule)
    setEditingModule(newModule.id)
    setShowModuleEditor(true)
  }

  const handleEditModule = (moduleId: string) => {
    setEditingModule(moduleId)
    setShowModuleEditor(true)
  }

  const handleDeleteModule = (moduleId: string) => {
    if (window.confirm('Are you sure you want to delete this module? This will also delete all lessons in this module.')) {
      removeModule(moduleId)
    }
  }

  const handleAddLesson = (moduleId: string) => {
    const newLesson: Lesson = {
      id: generateId(),
      title: '',
      description: '',
      content: '',
      contentType: 'text',
      order: lessons.filter(l => modules.find(m => m.id === moduleId)?.lessons.includes(l.id)).length,
      duration: 0,
      isPublished: false
    }
    addLesson(newLesson)
    
    // Add lesson to module
    const module = modules.find(m => m.id === moduleId)
    if (module) {
      updateModule(moduleId, {
        lessons: [...module.lessons, newLesson.id]
      })
    }
    
    setEditingLesson(newLesson.id)
    setSelectedModuleId(moduleId)
    setShowLessonEditor(true)
  }

  const handleEditLesson = (lessonId: string) => {
    const moduleId = modules.find(m => m.lessons.includes(lessonId))?.id
    setEditingLesson(lessonId)
    setSelectedModuleId(moduleId || null)
    setShowLessonEditor(true)
  }

  const handleDeleteLesson = (lessonId: string) => {
    if (window.confirm('Are you sure you want to delete this lesson?')) {
      removeLesson(lessonId)
    }
  }

  const toggleModuleExpansion = (moduleId: string) => {
    const newExpanded = new Set(expandedModules)
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId)
    } else {
      newExpanded.add(moduleId)
    }
    setExpandedModules(newExpanded)
  }

  const getModuleLessons = (moduleId: string) => {
    const module = modules.find(m => m.id === moduleId)
    if (!module) return []
    
    return module.lessons
      .map(lessonId => lessons.find(l => l.id === lessonId))
      .filter(Boolean)
      .sort((a, b) => a!.order - b!.order) as Lesson[]
  }

  if (showModuleEditor) {
    return (
      <ModuleEditor
        moduleId={editingModule}
        onClose={() => {
          setShowModuleEditor(false)
          setEditingModule(null)
        }}
      />
    )
  }

  if (showLessonEditor) {
    return (
      <LessonEditor
        lessonId={editingLesson}
        moduleId={selectedModuleId}
        onClose={() => {
          setShowLessonEditor(false)
          setEditingLesson(null)
          setSelectedModuleId(null)
        }}
      />
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Course Structure</CardTitle>
          <CardDescription>
            Organize your course into modules and lessons. Drag and drop to reorder.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {modules.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">
                  No modules yet. Create your first module to get started.
                </p>
                <Button onClick={handleAddModule}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Module
                </Button>
              </div>
            ) : (
              <>
                {modules
                  .sort((a, b) => a.order - b.order)
                  .map((module, index) => {
                    const moduleLessons = getModuleLessons(module.id)
                    const isExpanded = expandedModules.has(module.id)
                    
                    return (
                      <Card key={module.id} className="border-l-4 border-l-primary">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <GripVertical className="h-4 w-4 text-muted-foreground cursor-move" />
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => toggleModuleExpansion(module.id)}
                              >
                                {isExpanded ? (
                                  <ChevronDown className="h-4 w-4" />
                                ) : (
                                  <ChevronRight className="h-4 w-4" />
                                )}
                              </Button>
                              <div>
                                <CardTitle className="text-lg">
                                  Module {index + 1}: {module.title || 'Untitled Module'}
                                </CardTitle>
                                <CardDescription>
                                  {moduleLessons.length} lesson{moduleLessons.length !== 1 ? 's' : ''}
                                </CardDescription>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleEditModule(module.id)}
                              >
                                <Edit2 className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleDeleteModule(module.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleAddLesson(module.id)}
                              >
                                <Plus className="mr-2 h-4 w-4" />
                                Add Lesson
                              </Button>
                            </div>
                          </div>
                        </CardHeader>
                        
                        {isExpanded && (
                          <CardContent className="pt-0">
                            {module.description && (
                              <p className="text-sm text-muted-foreground mb-4">
                                {module.description}
                              </p>
                            )}
                            
                            <div className="space-y-2">
                              {moduleLessons.length === 0 ? (
                                <div className="text-center py-4 border-2 border-dashed border-border rounded-lg">
                                  <p className="text-sm text-muted-foreground mb-2">
                                    No lessons in this module
                                  </p>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleAddLesson(module.id)}
                                  >
                                    <Plus className="mr-2 h-4 w-4" />
                                    Add First Lesson
                                  </Button>
                                </div>
                              ) : (
                                moduleLessons.map((lesson, lessonIndex) => (
                                  <div
                                    key={lesson.id}
                                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50"
                                  >
                                    <div className="flex items-center gap-2">
                                      <GripVertical className="h-4 w-4 text-muted-foreground cursor-move" />
                                      <div>
                                        <p className="font-medium">
                                          Lesson {lessonIndex + 1}: {lesson.title || 'Untitled Lesson'}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                          {lesson.contentType} • {lesson.duration} min
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => handleEditLesson(lesson.id)}
                                      >
                                        <Edit2 className="h-4 w-4" />
                                      </Button>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => handleDeleteLesson(lesson.id)}
                                      >
                                        <Trash2 className="h-4 w-4" />
                                      </Button>
                                    </div>
                                  </div>
                                ))
                              )}
                            </div>
                          </CardContent>
                        )}
                      </Card>
                    )
                  })}
                
                <Button onClick={handleAddModule} className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Module
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}