import { renderHook, act } from '@testing-library/react'
import { useCourseStore } from '../store'
import { Course, Module, Lesson } from '../validations'

describe('useCourseStore', () => {
  beforeEach(() => {
    // Reset store before each test
    const { result } = renderHook(() => useCourseStore())
    act(() => {
      result.current.reset()
    })
  })

  it('should initialize with empty state', () => {
    const { result } = renderHook(() => useCourseStore())
    
    expect(result.current.course).toBeNull()
    expect(result.current.modules).toEqual([])
    expect(result.current.lessons).toEqual([])
    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBeNull()
    expect(result.current.previewMode).toBe(false)
    expect(result.current.isDirty).toBe(false)
  })

  it('should set course correctly', () => {
    const { result } = renderHook(() => useCourseStore())
    
    const mockCourse: Course = {
      title: 'Test Course',
      description: 'Test Description',
      category: 'technology',
      level: 'beginner',
      duration: 10,
      price: 99,
      isPaid: true,
      isPublished: false,
      prerequisites: [],
      tags: []
    }

    act(() => {
      result.current.setCourse(mockCourse)
    })

    expect(result.current.course).toEqual(mockCourse)
    expect(result.current.isDirty).toBe(true)
  })

  it('should update course correctly', () => {
    const { result } = renderHook(() => useCourseStore())
    
    const mockCourse: Course = {
      title: 'Test Course',
      description: 'Test Description',
      category: 'technology',
      level: 'beginner',
      duration: 10,
      price: 99,
      isPaid: true,
      isPublished: false,
      prerequisites: [],
      tags: []
    }

    act(() => {
      result.current.setCourse(mockCourse)
    })

    act(() => {
      result.current.updateCourse({ title: 'Updated Title' })
    })

    expect(result.current.course?.title).toBe('Updated Title')
    expect(result.current.course?.description).toBe('Test Description')
    expect(result.current.isDirty).toBe(true)
  })

  it('should add module correctly', () => {
    const { result } = renderHook(() => useCourseStore())
    
    const mockModule: Module = {
      id: 'module-1',
      title: 'Test Module',
      description: 'Test Description',
      order: 0,
      lessons: [],
      isPublished: false
    }

    act(() => {
      result.current.addModule(mockModule)
    })

    expect(result.current.modules).toHaveLength(1)
    expect(result.current.modules[0]).toEqual(mockModule)
    expect(result.current.isDirty).toBe(true)
  })

  it('should update module correctly', () => {
    const { result } = renderHook(() => useCourseStore())
    
    const mockModule: Module = {
      id: 'module-1',
      title: 'Test Module',
      description: 'Test Description',
      order: 0,
      lessons: [],
      isPublished: false
    }

    act(() => {
      result.current.addModule(mockModule)
    })

    act(() => {
      result.current.updateModule('module-1', { title: 'Updated Module' })
    })

    expect(result.current.modules[0].title).toBe('Updated Module')
    expect(result.current.modules[0].description).toBe('Test Description')
    expect(result.current.isDirty).toBe(true)
  })

  it('should remove module correctly', () => {
    const { result } = renderHook(() => useCourseStore())
    
    const mockModule: Module = {
      id: 'module-1',
      title: 'Test Module',
      description: 'Test Description',
      order: 0,
      lessons: [],
      isPublished: false
    }

    act(() => {
      result.current.addModule(mockModule)
    })

    expect(result.current.modules).toHaveLength(1)

    act(() => {
      result.current.removeModule('module-1')
    })

    expect(result.current.modules).toHaveLength(0)
    expect(result.current.isDirty).toBe(true)
  })

  it('should add lesson correctly', () => {
    const { result } = renderHook(() => useCourseStore())
    
    const mockLesson: Lesson = {
      id: 'lesson-1',
      title: 'Test Lesson',
      description: 'Test Description',
      content: 'Test Content',
      contentType: 'text',
      order: 0,
      duration: 30,
      isPublished: false
    }

    act(() => {
      result.current.addLesson(mockLesson)
    })

    expect(result.current.lessons).toHaveLength(1)
    expect(result.current.lessons[0]).toEqual(mockLesson)
    expect(result.current.isDirty).toBe(true)
  })

  it('should update lesson correctly', () => {
    const { result } = renderHook(() => useCourseStore())
    
    const mockLesson: Lesson = {
      id: 'lesson-1',
      title: 'Test Lesson',
      description: 'Test Description',
      content: 'Test Content',
      contentType: 'text',
      order: 0,
      duration: 30,
      isPublished: false
    }

    act(() => {
      result.current.addLesson(mockLesson)
    })

    act(() => {
      result.current.updateLesson('lesson-1', { title: 'Updated Lesson' })
    })

    expect(result.current.lessons[0].title).toBe('Updated Lesson')
    expect(result.current.lessons[0].description).toBe('Test Description')
    expect(result.current.isDirty).toBe(true)
  })

  it('should remove lesson correctly', () => {
    const { result } = renderHook(() => useCourseStore())
    
    const mockLesson: Lesson = {
      id: 'lesson-1',
      title: 'Test Lesson',
      description: 'Test Description',
      content: 'Test Content',
      contentType: 'text',
      order: 0,
      duration: 30,
      isPublished: false
    }

    act(() => {
      result.current.addLesson(mockLesson)
    })

    expect(result.current.lessons).toHaveLength(1)

    act(() => {
      result.current.removeLesson('lesson-1')
    })

    expect(result.current.lessons).toHaveLength(0)
    expect(result.current.isDirty).toBe(true)
  })

  it('should publish course correctly', () => {
    const { result } = renderHook(() => useCourseStore())
    
    const mockCourse: Course = {
      title: 'Test Course',
      description: 'Test Description',
      category: 'technology',
      level: 'beginner',
      duration: 10,
      price: 99,
      isPaid: true,
      isPublished: false,
      prerequisites: [],
      tags: []
    }

    act(() => {
      result.current.setCourse(mockCourse)
    })

    act(() => {
      result.current.publishCourse()
    })

    expect(result.current.course?.isPublished).toBe(true)
    expect(result.current.isDirty).toBe(false)
  })

  it('should save draft correctly', () => {
    const { result } = renderHook(() => useCourseStore())
    
    const mockCourse: Course = {
      title: 'Test Course',
      description: 'Test Description',
      category: 'technology',
      level: 'beginner',
      duration: 10,
      price: 99,
      isPaid: true,
      isPublished: false,
      prerequisites: [],
      tags: []
    }

    act(() => {
      result.current.setCourse(mockCourse)
    })

    expect(result.current.isDirty).toBe(true)

    act(() => {
      result.current.saveDraft()
    })

    expect(result.current.isDirty).toBe(false)
  })

  it('should set loading state correctly', () => {
    const { result } = renderHook(() => useCourseStore())
    
    act(() => {
      result.current.setLoading(true)
    })

    expect(result.current.isLoading).toBe(true)

    act(() => {
      result.current.setLoading(false)
    })

    expect(result.current.isLoading).toBe(false)
  })

  it('should set error state correctly', () => {
    const { result } = renderHook(() => useCourseStore())
    
    act(() => {
      result.current.setError('Test error')
    })

    expect(result.current.error).toBe('Test error')

    act(() => {
      result.current.setError(null)
    })

    expect(result.current.error).toBeNull()
  })

  it('should set preview mode correctly', () => {
    const { result } = renderHook(() => useCourseStore())
    
    act(() => {
      result.current.setPreviewMode(true)
    })

    expect(result.current.previewMode).toBe(true)

    act(() => {
      result.current.setPreviewMode(false)
    })

    expect(result.current.previewMode).toBe(false)
  })
})