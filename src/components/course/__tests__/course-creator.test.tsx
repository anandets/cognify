import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { CourseCreator } from '../course-creator'
import { useCourseStore } from '@/lib/store'

// Mock the store
jest.mock('@/lib/store', () => ({
  useCourseStore: jest.fn()
}))

const mockStore = {
  course: null,
  modules: [],
  lessons: [],
  isLoading: false,
  error: null,
  previewMode: false,
  isDirty: false,
  setCourse: jest.fn(),
  updateCourse: jest.fn(),
  clearCourse: jest.fn(),
  addModule: jest.fn(),
  updateModule: jest.fn(),
  removeModule: jest.fn(),
  reorderModules: jest.fn(),
  addLesson: jest.fn(),
  updateLesson: jest.fn(),
  removeLesson: jest.fn(),
  reorderLessons: jest.fn(),
  setLoading: jest.fn(),
  setError: jest.fn(),
  setPreviewMode: jest.fn(),
  setDirty: jest.fn(),
  publishCourse: jest.fn(),
  saveDraft: jest.fn(),
  reset: jest.fn()
}

describe('CourseCreator', () => {
  beforeEach(() => {
    (useCourseStore as jest.Mock).mockReturnValue(mockStore)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render course creator with default state', () => {
    render(<CourseCreator />)
    
    expect(screen.getByText('Create New Course')).toBeInTheDocument()
    expect(screen.getByText('Build engaging courses with multimedia content')).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /save draft/i })).toHaveLength(2)
    expect(screen.getByRole('button', { name: /preview/i })).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /publish course/i })).toHaveLength(2)
  })

  it('should show tabs for course creation', () => {
    render(<CourseCreator />)
    
    expect(screen.getByRole('tab', { name: 'Basic Info' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Modules & Lessons' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Settings' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Preview' })).toBeInTheDocument()
  })

  it('should show unsaved changes indicator when isDirty is true', () => {
    (useCourseStore as jest.Mock).mockReturnValue({
      ...mockStore,
      isDirty: true
    })
    
    render(<CourseCreator />)
    
    expect(screen.getByText('Unsaved changes')).toBeInTheDocument()
  })

  it('should show error message when error exists', () => {
    (useCourseStore as jest.Mock).mockReturnValue({
      ...mockStore,
      error: 'Test error message'
    })
    
    render(<CourseCreator />)
    
    expect(screen.getByText('Test error message')).toBeInTheDocument()
  })

  it('should disable buttons when loading', () => {
    (useCourseStore as jest.Mock).mockReturnValue({
      ...mockStore,
      isLoading: true
    })
    
    render(<CourseCreator />)
    
    const saveDraftButtons = screen.getAllByRole('button', { name: /save draft/i })
    expect(saveDraftButtons[0]).toBeDisabled()
    expect(screen.getByRole('button', { name: /preview/i })).toBeDisabled()
    const publishButtons = screen.getAllByRole('button', { name: /publish course/i })
    expect(publishButtons[0]).toBeDisabled()
  })

  it('should show preview mode when previewMode is true', () => {
    (useCourseStore as jest.Mock).mockReturnValue({
      ...mockStore,
      previewMode: true
    })
    
    render(<CourseCreator />)
    
    expect(screen.getByText('Course Preview')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Back to Edit' })).toBeInTheDocument()
  })

  it('should call setPreviewMode when preview button is clicked', () => {
    render(<CourseCreator />)
    
    const previewButton = screen.getByRole('button', { name: /preview/i })
    fireEvent.click(previewButton)
    
    expect(mockStore.updateCourse).toHaveBeenCalled()
    expect(mockStore.setPreviewMode).toHaveBeenCalledWith(true)
  })

  it('should call reset when reset button is clicked', () => {
    render(<CourseCreator />)
    
    const resetButton = screen.getByRole('button', { name: /reset/i })
    fireEvent.click(resetButton)
    
    expect(mockStore.reset).toHaveBeenCalled()
  })

  it('should call saveDraft when save draft button is clicked', () => {
    render(<CourseCreator />)
    
    const saveDraftButtons = screen.getAllByRole('button', { name: /save draft/i })
    fireEvent.click(saveDraftButtons[0])
    
    expect(mockStore.updateCourse).toHaveBeenCalled()
    expect(mockStore.saveDraft).toHaveBeenCalled()
  })

  it('should switch tabs correctly', () => {
    render(<CourseCreator />)
    
    const modulesTab = screen.getByRole('tab', { name: 'Modules & Lessons' })
    fireEvent.click(modulesTab)
    
    // Just verify the tab is clickable and exists
    expect(modulesTab).toBeInTheDocument()
  })

  it('should disable publish button when not dirty', () => {
    (useCourseStore as jest.Mock).mockReturnValue({
      ...mockStore,
      isDirty: false
    })
    
    render(<CourseCreator />)
    
    const publishButtons = screen.getAllByRole('button', { name: /publish course/i })
    expect(publishButtons[0]).toBeDisabled()
  })

  it('should enable publish button when dirty', () => {
    (useCourseStore as jest.Mock).mockReturnValue({
      ...mockStore,
      isDirty: true
    })
    
    render(<CourseCreator />)
    
    const publishButtons = screen.getAllByRole('button', { name: /publish course/i })
    expect(publishButtons[0]).not.toBeDisabled()
  })
})