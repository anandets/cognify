import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Course, Module, Lesson } from './validations'

interface CourseState {
  // Course data
  course: Course | null
  modules: Module[]
  lessons: Lesson[]
  
  // UI state
  isLoading: boolean
  error: string | null
  previewMode: boolean
  isDirty: boolean
  
  // Course actions
  setCourse: (course: Course) => void
  updateCourse: (updates: Partial<Course>) => void
  clearCourse: () => void
  
  // Module actions
  addModule: (module: Module) => void
  updateModule: (id: string, updates: Partial<Module>) => void
  removeModule: (id: string) => void
  reorderModules: (moduleIds: string[]) => void
  
  // Lesson actions
  addLesson: (lesson: Lesson) => void
  updateLesson: (id: string, updates: Partial<Lesson>) => void
  removeLesson: (id: string) => void
  reorderLessons: (moduleId: string, lessonIds: string[]) => void
  
  // UI actions
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  setPreviewMode: (preview: boolean) => void
  setDirty: (dirty: boolean) => void
  
  // Utility actions
  publishCourse: () => void
  saveDraft: () => void
  reset: () => void
}

const initialState = {
  course: null,
  modules: [],
  lessons: [],
  isLoading: false,
  error: null,
  previewMode: false,
  isDirty: false,
}

export const useCourseStore = create<CourseState>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        
        // Course actions
        setCourse: (course) => set({ course, isDirty: true }),
        updateCourse: (updates) => set((state) => ({ 
          course: state.course ? { ...state.course, ...updates } : null,
          isDirty: true 
        })),
        clearCourse: () => set({ course: null, isDirty: false }),
        
        // Module actions
        addModule: (module) => set((state) => ({
          modules: [...state.modules, module],
          isDirty: true
        })),
        updateModule: (id, updates) => set((state) => ({
          modules: state.modules.map(module => 
            module.id === id ? { ...module, ...updates } : module
          ),
          isDirty: true
        })),
        removeModule: (id) => set((state) => ({
          modules: state.modules.filter(module => module.id !== id),
          lessons: state.lessons.filter(lesson => !state.modules.find(m => m.id === id)?.lessons.includes(lesson.id)),
          isDirty: true
        })),
        reorderModules: (moduleIds) => set((state) => ({
          modules: moduleIds.map((id, index) => {
            const module = state.modules.find(m => m.id === id)
            return module ? { ...module, order: index } : module
          }).filter(Boolean) as Module[],
          isDirty: true
        })),
        
        // Lesson actions
        addLesson: (lesson) => set((state) => ({
          lessons: [...state.lessons, lesson],
          isDirty: true
        })),
        updateLesson: (id, updates) => set((state) => ({
          lessons: state.lessons.map(lesson => 
            lesson.id === id ? { ...lesson, ...updates } : lesson
          ),
          isDirty: true
        })),
        removeLesson: (id) => set((state) => ({
          lessons: state.lessons.filter(lesson => lesson.id !== id),
          modules: state.modules.map(module => ({
            ...module,
            lessons: module.lessons.filter(lessonId => lessonId !== id)
          })),
          isDirty: true
        })),
        reorderLessons: (moduleId, lessonIds) => set((state) => ({
          lessons: state.lessons.map(lesson => {
            const newIndex = lessonIds.indexOf(lesson.id)
            return newIndex >= 0 ? { ...lesson, order: newIndex } : lesson
          }),
          modules: state.modules.map(module => 
            module.id === moduleId ? { ...module, lessons: lessonIds } : module
          ),
          isDirty: true
        })),
        
        // UI actions
        setLoading: (loading) => set({ isLoading: loading }),
        setError: (error) => set({ error }),
        setPreviewMode: (preview) => set({ previewMode: preview }),
        setDirty: (dirty) => set({ isDirty: dirty }),
        
        // Utility actions
        publishCourse: () => set((state) => ({
          course: state.course ? { ...state.course, isPublished: true } : null,
          isDirty: false
        })),
        saveDraft: () => set({ isDirty: false }),
        reset: () => set(initialState),
      }),
      {
        name: 'course-store',
        partialize: (state) => ({
          course: state.course,
          modules: state.modules,
          lessons: state.lessons,
          isDirty: state.isDirty,
        }),
      }
    )
  )
)