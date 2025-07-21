"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Save, X, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCourseStore } from "@/lib/store";
import { Module, moduleSchema } from "@/lib/validations";
import LessonEditor from "./lesson-editor";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

interface ModuleEditorProps {
  moduleId: string | null;
  onClose: () => void;
}

export function ModuleEditor({ moduleId, onClose }: ModuleEditorProps) {
  const { modules, updateModule } = useCourseStore();
  const module = moduleId ? modules.find((m) => m.id === moduleId) : null;

  const form = useForm<Module>({
    resolver: zodResolver(moduleSchema),
    defaultValues:
      module || {
        id: "",
        title: "",
        description: "",
        order: 0,
        lessons: [],
        isPublished: false,
      },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = form;

  useEffect(() => {
    if (module) {
      reset(module);
    }
  }, [module, reset]);

  const onSubmit = (data: Module) => {
    if (moduleId) {
      updateModule(moduleId, data);
    }
    onClose();
  };

  const handleCancel = () => {
    if (isDirty) {
      const confirmDiscard = window.confirm(
        "You have unsaved changes. Are you sure you want to discard them?"
      );
      if (!confirmDiscard) return;
    }
    onClose();
  };

  const [newLessonTitle, setNewLessonTitle] = useState("");
  const [expandedLessonId, setExpandedLessonId] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateModule = () => {
    updateModule(module.id, form.getValues("title"), form.getValues("description"));
    setIsEditing(false);
  };

  const handleAddLesson = () => {
    if (newLessonTitle.trim()) {
      const newId = addLesson(module.id, newLessonTitle.trim());
      setNewLessonTitle("");
      setExpandedLessonId(newId);
    }
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const lessonId = result.draggableId;
    const newOrder = result.destination.index;

    reorderLesson(module.id, lessonId, newOrder);
  };

  return (
    <div className="space-y-6">
      {isEditing ? (
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor={`module-title-${module.id}`} className="text-sm font-medium">
              Module Title
            </label>
            <Input
              id={`module-title-${module.id}`}
              {...register("title")}
              className={errors.title ? "border-destructive" : ""}
            />
            {errors.title && (
              <p className="text-sm text-destructive">{errors.title.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor={`module-description-${module.id}`} className="text-sm font-medium">
              Module Description
            </label>
            <Textarea
              id={`module-description-${module.id}`}
              {...register("description")}
              className={errors.description ? "border-destructive" : ""}
              rows={3}
            />
            {errors.description && (
              <p className="text-sm text-destructive">{errors.description.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor={`module-order-${module.id}`} className="text-sm font-medium">
              Module Order
            </label>
            <Input
              id={`module-order-${module.id}`}
              type="number"
              min="0"
              placeholder="0"
              {...register("order", { valueAsNumber: true })}
              className={errors.order ? "border-destructive" : ""}
            />
            {errors.order && (
              <p className="text-sm text-destructive">{errors.order.message}</p>
            )}
            <p className="text-sm text-muted-foreground">
              The order in which this module appears in the course
            </p>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpdateModule}>
              Save
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">
              {module ? "Edit Module" : "Create Module"}
            </h2>
            <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)}>
              <Edit2 className="h-4 w-4 mr-1" /> Edit
            </Button>
          </div>
          {module.description && (
            <p className="text-gray-600 text-sm">{module.description}</p>
          )}
          {!module.description && (
            <p className="text-gray-400 italic text-sm">No description provided.</p>
          )}
        </div>
      )}

      <div className="space-y-4 pt-4 border-t">
        <label className="text-sm font-medium">Lessons</label>
        <div className="flex items-center gap-2">
          <Input
            placeholder="New lesson title"
            value={newLessonTitle}
            onChange={(e) => setNewLessonTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddLesson();
              }
            }}
          />
          <Button onClick={handleAddLesson}>
            <PlusCircle className="h-4 w-4 mr-2" />
            Add Lesson
          </Button>
        </div>

        {module.lessons.length === 0 ? (
          <div className="text-center py-6 border rounded-lg bg-gray-50">
            <p className="text-gray-500">No lessons added yet.</p>
            <p className="text-gray-500">Start by adding your first lesson above.</p>
          </div>
        ) : (
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId={`lessons-${module.id}`}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="space-y-3"
                >
                  {module.lessons.map((lesson, index) => (
                    <Draggable
                      key={lesson.id}
                      draggableId={lesson.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="border rounded-lg"
                        >
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-t-lg">
                            <div className="font-medium flex items-center">
                              <span className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 mr-2 text-xs">
                                {index + 1}
                              </span>
                              {lesson.title}
                            </div>
                            <div className="flex items-center gap-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  setExpandedLessonId(
                                    expandedLessonId === lesson.id ? null : lesson.id
                                  );
                                }}
                              >
                                {expandedLessonId === lesson.id ? (
                                  <ChevronUp className="h-3 w-3" />
                                ) : (
                                  <ChevronDown className="h-3 w-3" />
                                )}
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => deleteLesson(module.id, lesson.id)}
                              >
                                <Trash2 className="h-3 w-3 text-red-500" />
                              </Button>
                            </div>
                          </div>
                          {expandedLessonId === lesson.id && (
                            <div className="p-3 border-t">
                              <LessonEditor moduleId={module.id} lesson={lesson} />
                            </div>
                          )}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </div>
    </div>
  );
}