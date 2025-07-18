import { courseSchema, moduleSchema, lessonSchema, fileUploadSchema } from '../validations'

describe('validations', () => {
  describe('courseSchema', () => {
    it('should validate a valid course', () => {
      const validCourse = {
        title: 'Valid Course Title',
        description: 'This is a valid course description that meets minimum requirements',
        category: 'technology',
        level: 'beginner' as const,
        duration: 10,
        price: 99.99,
        isPaid: true,
        isPublished: false,
        prerequisites: ['Basic knowledge'],
        tags: ['programming', 'web development']
      }

      const result = courseSchema.safeParse(validCourse)
      expect(result.success).toBe(true)
    })

    it('should reject course with invalid title', () => {
      const invalidCourse = {
        title: 'No',
        description: 'This is a valid course description that meets minimum requirements',
        category: 'technology',
        level: 'beginner' as const,
        duration: 10,
        price: 99.99,
        isPaid: true,
        isPublished: false
      }

      const result = courseSchema.safeParse(invalidCourse)
      expect(result.success).toBe(false)
    })

    it('should reject course with invalid description', () => {
      const invalidCourse = {
        title: 'Valid Course Title',
        description: 'Too short',
        category: 'technology',
        level: 'beginner' as const,
        duration: 10,
        price: 99.99,
        isPaid: true,
        isPublished: false
      }

      const result = courseSchema.safeParse(invalidCourse)
      expect(result.success).toBe(false)
    })

    it('should reject course with invalid price', () => {
      const invalidCourse = {
        title: 'Valid Course Title',
        description: 'This is a valid course description that meets minimum requirements',
        category: 'technology',
        level: 'beginner' as const,
        duration: 10,
        price: -1,
        isPaid: true,
        isPublished: false
      }

      const result = courseSchema.safeParse(invalidCourse)
      expect(result.success).toBe(false)
    })
  })

  describe('moduleSchema', () => {
    it('should validate a valid module', () => {
      const validModule = {
        id: 'module-1',
        title: 'Valid Module Title',
        description: 'Optional description',
        order: 0,
        lessons: ['lesson-1', 'lesson-2'],
        isPublished: true,
        prerequisites: ['Module 0']
      }

      const result = moduleSchema.safeParse(validModule)
      expect(result.success).toBe(true)
    })

    it('should reject module with invalid title', () => {
      const invalidModule = {
        id: 'module-1',
        title: 'No',
        order: 0,
        lessons: [],
        isPublished: false
      }

      const result = moduleSchema.safeParse(invalidModule)
      expect(result.success).toBe(false)
    })
  })

  describe('lessonSchema', () => {
    it('should validate a valid lesson', () => {
      const validLesson = {
        id: 'lesson-1',
        title: 'Valid Lesson Title',
        description: 'Optional description',
        content: 'Lesson content',
        contentType: 'text' as const,
        order: 0,
        duration: 30,
        isPublished: true,
        videoUrl: 'https://example.com/video.mp4'
      }

      const result = lessonSchema.safeParse(validLesson)
      expect(result.success).toBe(true)
    })

    it('should reject lesson with invalid duration', () => {
      const invalidLesson = {
        id: 'lesson-1',
        title: 'Valid Lesson Title',
        contentType: 'text' as const,
        order: 0,
        duration: 0,
        isPublished: false
      }

      const result = lessonSchema.safeParse(invalidLesson)
      expect(result.success).toBe(false)
    })

    it('should reject lesson with invalid video URL', () => {
      const invalidLesson = {
        id: 'lesson-1',
        title: 'Valid Lesson Title',
        contentType: 'video' as const,
        order: 0,
        duration: 30,
        isPublished: false,
        videoUrl: 'not-a-url'
      }

      const result = lessonSchema.safeParse(invalidLesson)
      expect(result.success).toBe(false)
    })
  })

  describe('fileUploadSchema', () => {
    it('should validate a valid file upload', () => {
      const mockFile = new File(['test'], 'test.txt', { type: 'text/plain' })
      const validUpload = {
        file: mockFile,
        type: 'document' as const,
        maxSize: 1024 * 1024
      }

      const result = fileUploadSchema.safeParse(validUpload)
      expect(result.success).toBe(true)
    })
  })
})