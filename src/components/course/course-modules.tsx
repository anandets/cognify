"use client";

import { useState } from "react";
import { useCourseStore, Module } from "@/lib/store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle, ChevronDown, ChevronUp, Trash2 } from "lucide-react";
import ModuleEditor from "./module-editor";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function CourseModules() {
  const course = useCourseStore((state) => state.course);
  const addModule = useCourseStore((state) => state.addModule);
  const deleteModule = useCourseStore((state) => state.deleteModule);
  const reorderModule = useCourseStore((state) => state.reorderModule);
  
  const [newModuleTitle, setNewModuleTitle] = useState("");
  const [expandedModuleId, setExpandedModuleId] = useState<string | null>(null);

  const handleAddModule = () => {
    if (newModuleTitle.trim()) {
      const newId = addModule(newModuleTitle.trim());
      setNewModuleTitle("");
      setExpandedModuleId(newId);
    }
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    
    const moduleId = result.draggableId;
    const newOrder = result.destination.index;
    
    reorderModule(moduleId, newOrder);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Modules</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 mb-6">
          <Input
            placeholder="New module title"
            value={newModuleTitle}
            onChange={(e) => setNewModuleTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddModule();
              }
            }}
          />
          <Button onClick={handleAddModule}>
            <PlusCircle className="h-4 w-4 mr-2" />
            Add Module
          </Button>
        </div>

        {course.modules.length === 0 ? (
          <div className="text-center py-10 border rounded-lg bg-gray-50">
            <p className="text-gray-500">No modules added yet.</p>
            <p className="text-gray-500">Start by adding your first module above.</p>
          </div>
        ) : (
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="modules">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="space-y-4"
                >
                  {course.modules.map((module, index) => (
                    <Draggable
                      key={module.id}
                      draggableId={module.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="border rounded-lg"
                        >
                          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-t-lg">
                            <div className="font-medium flex items-center">
                              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 mr-3">
                                {index + 1}
                              </span>
                              {module.title}
                            </div>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  setExpandedModuleId(
                                    expandedModuleId === module.id ? null : module.id
                                  );
                                }}
                              >
                                {expandedModuleId === module.id ? (
                                  <ChevronUp className="h-4 w-4" />
                                ) : (
                                  <ChevronDown className="h-4 w-4" />
                                )}
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => deleteModule(module.id)}
                              >
                                <Trash2 className="h-4 w-4 text-red-500" />
                              </Button>
                            </div>
                          </div>
                          {expandedModuleId === module.id && (
                            <div className="p-4 border-t">
                              <ModuleEditor module={module} />
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
      </CardContent>
    </Card>
  );
}