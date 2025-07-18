import { z } from "zod"

export const courseSchema = z.object({
  title: z.string().min(3, "Course title must be at least 3 characters").max(100, "Course title must be less than 100 characters"),
  description: z.string().min(10, "Course description must be at least 10 characters").max(500, "Course description must be less than 500 characters"),
  category: z.string().min(1, "Please select a category"),
  level: z.enum(["beginner", "intermediate", "advanced"], {
    required_error: "Please select a course level",
  }),
  duration: z.number().min(1, "Duration must be at least 1 hour").max(1000, "Duration must be less than 1000 hours"),
  price: z.number().min(0, "Price must be 0 or greater").max(10000, "Price must be less than $10,000"),
  isPaid: z.boolean().default(false),
  isPublished: z.boolean().default(false),
  prerequisites: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
})

export const moduleSchema = z.object({
  id: z.string(),
  title: z.string().min(3, "Module title must be at least 3 characters").max(100, "Module title must be less than 100 characters"),
  description: z.string().optional(),
  order: z.number().min(0),
  lessons: z.array(z.string()).default([]),
  isPublished: z.boolean().default(false),
  prerequisites: z.array(z.string()).optional(),
})

export const lessonSchema = z.object({
  id: z.string(),
  title: z.string().min(3, "Lesson title must be at least 3 characters").max(100, "Lesson title must be less than 100 characters"),
  description: z.string().optional(),
  content: z.string().optional(),
  contentType: z.enum(["text", "video", "audio", "image", "pdf", "interactive"], {
    required_error: "Please select a content type",
  }),
  order: z.number().min(0),
  duration: z.number().min(1, "Duration must be at least 1 minute").max(600, "Duration must be less than 600 minutes"),
  isPublished: z.boolean().default(false),
  videoUrl: z.string().url().optional(),
  audioUrl: z.string().url().optional(),
  imageUrl: z.string().url().optional(),
  pdfUrl: z.string().url().optional(),
  interactiveContent: z.string().optional(),
})

export const fileUploadSchema = z.object({
  file: z.custom<File>((file) => file instanceof File, "Please select a file"),
  type: z.enum(["video", "audio", "image", "document"]),
  maxSize: z.number().default(500 * 1024 * 1024), // 500MB default
})

export type Course = z.infer<typeof courseSchema>
export type Module = z.infer<typeof moduleSchema>
export type Lesson = z.infer<typeof lessonSchema>
export type FileUpload = z.infer<typeof fileUploadSchema>