"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCourseStore } from "@/lib/store";
import { courseSchema } from "@/lib/validations";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { useState } from "react";

export default function CourseBasicInfo() {
  const course = useCourseStore((state) => state.course);
  const setCourseTitle = useCourseStore((state) => state.setCourseTitle);
  const setCourseDescription = useCourseStore((state) => state.setCourseDescription);
  const setCourseTags = useCourseStore((state) => state.setCourseTags);

  const form = useForm<z.infer<typeof courseSchema>>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      title: course.title,
      description: course.description,
      tags: course.tags || [],
    },
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCourseTitle(e.target.value);
    form.setValue("title", e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCourseDescription(e.target.value);
    form.setValue("description", e.target.value);
  };

  const [tagInput, setTagInput] = useState("");

  const addTag = () => {
    if (!tagInput.trim()) return;

    const currentTags = course.tags || [];
    if (currentTags.includes(tagInput.trim())) {
      setTagInput("");
      return;
    }

    if (currentTags.length >= 20) return;

    const newTags = [...currentTags, tagInput.trim()];
    setCourseTags(newTags);
    form.setValue("tags", newTags);
    setTagInput("");
  };

  const removeTag = (tag: string) => {
    const currentTags = course.tags || [];
    const newTags = currentTags.filter((t) => t !== tag);
    setCourseTags(newTags);
    form.setValue("tags", newTags);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Course Information</CardTitle>
        <CardDescription>
          Add basic details about your course to help students discover it.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">Course Title</Label>
          <Input
            id="title"
            placeholder="Enter course title"
            value={course.title}
            onChange={handleTitleChange}
          />
          {form.formState.errors.title && (
            <p className="text-sm text-red-500">{form.formState.errors.title.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Course Description</Label>
          <Textarea
            id="description"
            placeholder="Enter course description"
            value={course.description || ""}
            onChange={handleDescriptionChange}
            rows={5}
          />
          {form.formState.errors.description && (
            <p className="text-sm text-red-500">{form.formState.errors.description.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="tags">Course Tags</Label>
          <div className="flex gap-2">
            <Input
              id="tags"
              placeholder="Enter tags"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addTag();
                }
              }}
            />
            <Button type="button" onClick={addTag}>
              Add
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {(course.tags || []).map((tag) => (
              <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                {tag}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => removeTag(tag)}
                />
              </Badge>
            ))}
          </div>
          {(course.tags || []).length === 0 && (
            <p className="text-sm text-gray-500">
              No tags added yet. Tags help students find your course.
            </p>
          )}
          {form.formState.errors.tags && (
            <p className="text-sm text-red-500">{form.formState.errors.tags.message}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}