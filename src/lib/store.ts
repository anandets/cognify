import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

export type ContentType = 'text' | 'video' | 'audio' | 'image' | 'pdf' | 'quiz';

export interface File {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
}

export interface Content {
  id: string;
  type: ContentType;
  title: string;
  description?: string;
  content?: string;
  files?: File[];
}

export interface Lesson {
  id: string;
  title: string;
  description?: string;
  contents: Content[];
  order: number;
}

export interface Module {
  id: string;
  title: string;
  description?: string;
  lessons: Lesson[];
  order: number;
  prerequisiteModuleIds?: string[];
}

export interface Course {
  id: string;
  title: string;
  description?: string;
  modules: Module[];
  tags?: string[];
  isPublished: boolean;
  version: number;
  createdAt: Date;
  updatedAt: Date;
}

interface CourseState {
  course: Course;
  // Course actions
  setCourseTitle: (title: string) => void;
  setCourseDescription: (description: string) => void;
  setCourseTags: (tags: string[]) => void;
  publishCourse: () => void;
  unpublishCourse: () => void;
  
  // Module actions
  addModule: (title: string, description?: string) => void;
  updateModule: (moduleId: string, title: string, description?: string) => void;
  deleteModule: (moduleId: string) => void;
  reorderModule: (moduleId: string, newOrder: number) => void;
  setModulePrerequisites: (moduleId: string, prerequisiteIds: string[]) => void;
  
  // Lesson actions
  addLesson: (moduleId: string, title: string, description?: string) => void;
  updateLesson: (moduleId: string, lessonId: string, title: string, description?: string) => void;
  deleteLesson: (moduleId: string, lessonId: string) => void;
  reorderLesson: (moduleId: string, lessonId: string, newOrder: number) => void;
  
  // Content actions
  addContent: (moduleId: string, lessonId: string, type: ContentType, title: string) => void;
  updateContent: (moduleId: string, lessonId: string, contentId: string, data: Partial<Content>) => void;
  deleteContent: (moduleId: string, lessonId: string, contentId: string) => void;
  
  // File actions
  addFile: (moduleId: string, lessonId: string, contentId: string, file: File) => void;
  deleteFile: (moduleId: string, lessonId: string, contentId: string, fileId: string) => void;
}

export const useCourseStore = create<CourseState>()(
  devtools(
    persist(
      (set) => ({
        course: {
          id: uuidv4(),
          title: 'Untitled Course',
          description: '',
          modules: [],
          tags: [],
          isPublished: false,
          version: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
        // Course actions
        setCourseTitle: (title) => set((state) => ({
          course: { ...state.course, title, updatedAt: new Date() }
        })),
        
        setCourseDescription: (description) => set((state) => ({
          course: { ...state.course, description, updatedAt: new Date() }
        })),
        
        setCourseTags: (tags) => set((state) => ({
          course: { ...state.course, tags, updatedAt: new Date() }
        })),
        
        publishCourse: () => set((state) => ({
          course: { 
            ...state.course, 
            isPublished: true, 
            version: state.course.version + 1,
            updatedAt: new Date() 
          }
        })),
        
        unpublishCourse: () => set((state) => ({
          course: { ...state.course, isPublished: false, updatedAt: new Date() }
        })),
        
        // Module actions
        addModule: (title, description = '') => set((state) => {
          const newModule: Module = {
            id: uuidv4(),
            title,
            description,
            lessons: [],
            order: state.course.modules.length,
          };
          
          return {
            course: {
              ...state.course,
              modules: [...state.course.modules, newModule],
              updatedAt: new Date()
            }
          };
        }),
        
        updateModule: (moduleId, title, description) => set((state) => ({
          course: {
            ...state.course,
            modules: state.course.modules.map(module => 
              module.id === moduleId 
                ? { ...module, title, description: description || module.description, updatedAt: new Date() }
                : module
            ),
            updatedAt: new Date()
          }
        })),
        
        deleteModule: (moduleId) => set((state) => {
          const updatedModules = state.course.modules.filter(module => module.id !== moduleId);
          
          // Reorder remaining modules
          const reorderedModules = updatedModules.map((module, index) => ({
            ...module,
            order: index
          }));
          
          return {
            course: {
              ...state.course,
              modules: reorderedModules,
              updatedAt: new Date()
            }
          };
        }),
        
        reorderModule: (moduleId, newOrder) => set((state) => {
          const modules = [...state.course.modules];
          const moduleIndex = modules.findIndex(m => m.id === moduleId);
          
          if (moduleIndex === -1) return state;
          
          const [movedModule] = modules.splice(moduleIndex, 1);
          modules.splice(newOrder, 0, movedModule);
          
          // Update order for all modules
          const updatedModules = modules.map((module, index) => ({
            ...module,
            order: index
          }));
          
          return {
            course: {
              ...state.course,
              modules: updatedModules,
              updatedAt: new Date()
            }
          };
        }),
        
        setModulePrerequisites: (moduleId, prerequisiteIds) => set((state) => ({
          course: {
            ...state.course,
            modules: state.course.modules.map(module => 
              module.id === moduleId 
                ? { ...module, prerequisiteModuleIds: prerequisiteIds }
                : module
            ),
            updatedAt: new Date()
          }
        })),
        
        // Lesson actions
        addLesson: (moduleId, title, description = '') => set((state) => {
          const moduleIndex = state.course.modules.findIndex(m => m.id === moduleId);
          
          if (moduleIndex === -1) return state;
          
          const module = state.course.modules[moduleIndex];
          const newLesson: Lesson = {
            id: uuidv4(),
            title,
            description,
            contents: [],
            order: module.lessons.length,
          };
          
          const updatedModule = {
            ...module,
            lessons: [...module.lessons, newLesson]
          };
          
          const updatedModules = [...state.course.modules];
          updatedModules[moduleIndex] = updatedModule;
          
          return {
            course: {
              ...state.course,
              modules: updatedModules,
              updatedAt: new Date()
            }
          };
        }),
        
        updateLesson: (moduleId, lessonId, title, description) => set((state) => {
          const moduleIndex = state.course.modules.findIndex(m => m.id === moduleId);
          
          if (moduleIndex === -1) return state;
          
          const module = state.course.modules[moduleIndex];
          const updatedLessons = module.lessons.map(lesson => 
            lesson.id === lessonId 
              ? { ...lesson, title, description: description || lesson.description }
              : lesson
          );
          
          const updatedModule = {
            ...module,
            lessons: updatedLessons
          };
          
          const updatedModules = [...state.course.modules];
          updatedModules[moduleIndex] = updatedModule;
          
          return {
            course: {
              ...state.course,
              modules: updatedModules,
              updatedAt: new Date()
            }
          };
        }),
        
        deleteLesson: (moduleId, lessonId) => set((state) => {
          const moduleIndex = state.course.modules.findIndex(m => m.id === moduleId);
          
          if (moduleIndex === -1) return state;
          
          const module = state.course.modules[moduleIndex];
          const filteredLessons = module.lessons.filter(lesson => lesson.id !== lessonId);
          
          // Reorder remaining lessons
          const updatedLessons = filteredLessons.map((lesson, index) => ({
            ...lesson,
            order: index
          }));
          
          const updatedModule = {
            ...module,
            lessons: updatedLessons
          };
          
          const updatedModules = [...state.course.modules];
          updatedModules[moduleIndex] = updatedModule;
          
          return {
            course: {
              ...state.course,
              modules: updatedModules,
              updatedAt: new Date()
            }
          };
        }),
        
        reorderLesson: (moduleId, lessonId, newOrder) => set((state) => {
          const moduleIndex = state.course.modules.findIndex(m => m.id === moduleId);
          
          if (moduleIndex === -1) return state;
          
          const module = state.course.modules[moduleIndex];
          const lessons = [...module.lessons];
          const lessonIndex = lessons.findIndex(l => l.id === lessonId);
          
          if (lessonIndex === -1) return state;
          
          const [movedLesson] = lessons.splice(lessonIndex, 1);
          lessons.splice(newOrder, 0, movedLesson);
          
          // Update order for all lessons
          const updatedLessons = lessons.map((lesson, index) => ({
            ...lesson,
            order: index
          }));
          
          const updatedModule = {
            ...module,
            lessons: updatedLessons
          };
          
          const updatedModules = [...state.course.modules];
          updatedModules[moduleIndex] = updatedModule;
          
          return {
            course: {
              ...state.course,
              modules: updatedModules,
              updatedAt: new Date()
            }
          };
        }),
        
        // Content actions
        addContent: (moduleId, lessonId, type, title) => set((state) => {
          const moduleIndex = state.course.modules.findIndex(m => m.id === moduleId);
          if (moduleIndex === -1) return state;
          
          const module = state.course.modules[moduleIndex];
          const lessonIndex = module.lessons.findIndex(l => l.id === lessonId);
          if (lessonIndex === -1) return state;
          
          const lesson = module.lessons[lessonIndex];
          
          const newContent: Content = {
            id: uuidv4(),
            type,
            title,
            files: []
          };
          
          const updatedLesson = {
            ...lesson,
            contents: [...lesson.contents, newContent]
          };
          
          const updatedLessons = [...module.lessons];
          updatedLessons[lessonIndex] = updatedLesson;
          
          const updatedModule = {
            ...module,
            lessons: updatedLessons
          };
          
          const updatedModules = [...state.course.modules];
          updatedModules[moduleIndex] = updatedModule;
          
          return {
            course: {
              ...state.course,
              modules: updatedModules,
              updatedAt: new Date()
            }
          };
        }),
        
        updateContent: (moduleId, lessonId, contentId, data) => set((state) => {
          const moduleIndex = state.course.modules.findIndex(m => m.id === moduleId);
          if (moduleIndex === -1) return state;
          
          const module = state.course.modules[moduleIndex];
          const lessonIndex = module.lessons.findIndex(l => l.id === lessonId);
          if (lessonIndex === -1) return state;
          
          const lesson = module.lessons[lessonIndex];
          
          const updatedContents = lesson.contents.map(content => 
            content.id === contentId 
              ? { ...content, ...data }
              : content
          );
          
          const updatedLesson = {
            ...lesson,
            contents: updatedContents
          };
          
          const updatedLessons = [...module.lessons];
          updatedLessons[lessonIndex] = updatedLesson;
          
          const updatedModule = {
            ...module,
            lessons: updatedLessons
          };
          
          const updatedModules = [...state.course.modules];
          updatedModules[moduleIndex] = updatedModule;
          
          return {
            course: {
              ...state.course,
              modules: updatedModules,
              updatedAt: new Date()
            }
          };
        }),
        
        deleteContent: (moduleId, lessonId, contentId) => set((state) => {
          const moduleIndex = state.course.modules.findIndex(m => m.id === moduleId);
          if (moduleIndex === -1) return state;
          
          const module = state.course.modules[moduleIndex];
          const lessonIndex = module.lessons.findIndex(l => l.id === lessonId);
          if (lessonIndex === -1) return state;
          
          const lesson = module.lessons[lessonIndex];
          
          const updatedContents = lesson.contents.filter(content => content.id !== contentId);
          
          const updatedLesson = {
            ...lesson,
            contents: updatedContents
          };
          
          const updatedLessons = [...module.lessons];
          updatedLessons[lessonIndex] = updatedLesson;
          
          const updatedModule = {
            ...module,
            lessons: updatedLessons
          };
          
          const updatedModules = [...state.course.modules];
          updatedModules[moduleIndex] = updatedModule;
          
          return {
            course: {
              ...state.course,
              modules: updatedModules,
              updatedAt: new Date()
            }
          };
        }),
        
        // File actions
        addFile: (moduleId, lessonId, contentId, file) => set((state) => {
          const moduleIndex = state.course.modules.findIndex(m => m.id === moduleId);
          if (moduleIndex === -1) return state;
          
          const module = state.course.modules[moduleIndex];
          const lessonIndex = module.lessons.findIndex(l => l.id === lessonId);
          if (lessonIndex === -1) return state;
          
          const lesson = module.lessons[lessonIndex];
          const contentIndex = lesson.contents.findIndex(c => c.id === contentId);
          if (contentIndex === -1) return state;
          
          const content = lesson.contents[contentIndex];
          
          const updatedContent = {
            ...content,
            files: [...(content.files || []), file]
          };
          
          const updatedContents = [...lesson.contents];
          updatedContents[contentIndex] = updatedContent;
          
          const updatedLesson = {
            ...lesson,
            contents: updatedContents
          };
          
          const updatedLessons = [...module.lessons];
          updatedLessons[lessonIndex] = updatedLesson;
          
          const updatedModule = {
            ...module,
            lessons: updatedLessons
          };
          
          const updatedModules = [...state.course.modules];
          updatedModules[moduleIndex] = updatedModule;
          
          return {
            course: {
              ...state.course,
              modules: updatedModules,
              updatedAt: new Date()
            }
          };
        }),
        
        deleteFile: (moduleId, lessonId, contentId, fileId) => set((state) => {
          const moduleIndex = state.course.modules.findIndex(m => m.id === moduleId);
          if (moduleIndex === -1) return state;
          
          const module = state.course.modules[moduleIndex];
          const lessonIndex = module.lessons.findIndex(l => l.id === lessonId);
          if (lessonIndex === -1) return state;
          
          const lesson = module.lessons[lessonIndex];
          const contentIndex = lesson.contents.findIndex(c => c.id === contentId);
          if (contentIndex === -1) return state;
          
          const content = lesson.contents[contentIndex];
          
          const updatedContent = {
            ...content,
            files: (content.files || []).filter(file => file.id !== fileId)
          };
          
          const updatedContents = [...lesson.contents];
          updatedContents[contentIndex] = updatedContent;
          
          const updatedLesson = {
            ...lesson,
            contents: updatedContents
          };
          
          const updatedLessons = [...module.lessons];
          updatedLessons[lessonIndex] = updatedLesson;
          
          const updatedModule = {
            ...module,
            lessons: updatedLessons
          };
          
          const updatedModules = [...state.course.modules];
          updatedModules[moduleIndex] = updatedModule;
          
          return {
            course: {
              ...state.course,
              modules: updatedModules,
              updatedAt: new Date()
            }
          };
        })
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