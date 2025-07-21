import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

export function getFileTypeIcon(mimeType: string): string {
  if (mimeType.startsWith("video/")) {
    return "video";
  } else if (mimeType.startsWith("audio/")) {
    return "headphones";
  } else if (mimeType.startsWith("image/")) {
    return "image";
  } else if (mimeType === "application/pdf") {
    return "file-text";
  } else if (mimeType.includes("word")) {
    return "file-text";
  } else if (
    mimeType.includes("presentation") ||
    mimeType.includes("powerpoint")
  ) {
    return "presentation";
  } else {
    return "file";
  }
}

export function validateFileType(file: File, acceptedTypes: string[]): boolean {
  return acceptedTypes.includes(file.type);
}

export function validateFileSize(file: File, maxSize: number): boolean {
  return file.size <= maxSize;
}

export const mockFileUpload = (
  file: File
): Promise<{ url: string; id: string }> => {
  return new Promise((resolve) => {
    // Simulate network latency
    setTimeout(() => {
      const id = Math.random().toString(36).substring(2, 15);
      const url = URL.createObjectURL(file);

      resolve({ url, id });
    }, 1500);
  });
};

export const getTotalCourseSize = (course: any): number => {
  let totalSize = 0;

  course.modules.forEach((module: any) => {
    module.lessons.forEach((lesson: any) => {
      lesson.contents.forEach((content: any) => {
        if (content.files && Array.isArray(content.files)) {
          content.files.forEach((file: any) => {
            totalSize += file.size || 0;
          });
        }
      });
    });
  });

  return totalSize;
};

export const getTotalLessonsCount = (course: any): number => {
  let count = 0;

  course.modules.forEach((module: any) => {
    count += module.lessons.length;
  });

  return count;
};