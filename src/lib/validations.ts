import { z } from "zod"

const MAX_FILE_SIZE = 500 * 1024 * 1024; // 500MB
const ACCEPTED_VIDEO_TYPES = ['video/mp4', 'video/mov', 'video/avi', 'video/webm'];
const ACCEPTED_AUDIO_TYPES = ['audio/mp3', 'audio/wav', 'audio/aac'];
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/svg+xml'];
const ACCEPTED_DOCUMENT_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'];

export const courseSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title cannot exceed 100 characters'),
  description: z.string().max(2000, 'Description cannot exceed 2000 characters').optional(),
  tags: z.array(z.string()).max(20, 'Cannot have more than 20 tags').optional(),
})

export const moduleSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title cannot exceed 100 characters'),
  description: z.string().max(1000, 'Description cannot exceed 1000 characters').optional(),
  prerequisiteModuleIds: z.array(z.string()).optional(),
})

export const lessonSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title cannot exceed 100 characters'),
  description: z.string().max(1000, 'Description cannot exceed 1000 characters').optional(),
})

export const contentSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title cannot exceed 100 characters'),
  type: z.enum(['text', 'video', 'audio', 'image', 'pdf', 'quiz']),
  content: z.string().optional(),
  description: z.string().max(1000, 'Description cannot exceed 1000 characters').optional(),
})

export const fileSchema = z.object({
  file: z.instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 500MB.`)
    .refine(
      (file) => {
        if (file.type.startsWith('video/')) {
          return ACCEPTED_VIDEO_TYPES.includes(file.type);
        }
        if (file.type.startsWith('audio/')) {
          return ACCEPTED_AUDIO_TYPES.includes(file.type);
        }
        if (file.type.startsWith('image/')) {
          return ACCEPTED_IMAGE_TYPES.includes(file.type);
        }
        if (file.type.startsWith('application/')) {
          return ACCEPTED_DOCUMENT_TYPES.includes(file.type);
        }
        return false;
      },
      'Unsupported file format.'
    ),
})

export const courseSpaceSchema = z.object({
  filesSize: z.number().max(10 * 1024 * 1024 * 1024, 'Course total size cannot exceed 10GB'),
  lessonsCount: z.number().max(100, 'Course cannot have more than 100 lessons'),
})