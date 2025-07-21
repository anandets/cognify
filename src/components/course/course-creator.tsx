"use client";

import { useState } from "react";
import { useCourseStore } from "@/lib/store";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import CourseBasicInfo from "./course-basic-info";
import CourseModules from "./course-modules";
import CoursePreview from "./course-preview";
import CourseSettings from "./course-settings";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function CourseCreator() {
  const course = useCourseStore((state) => state.course);
  const publishCourse = useCourseStore((state) => state.publishCourse);
  const [activeTab, setActiveTab] = useState("info");
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePublish = () => {
    publishCourse();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const canPublish = course.modules.length > 0 && course.title.trim() !== '';

  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Course Creator</h1>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setActiveTab("preview")}
          >
            Preview
          </Button>
          <Button
            onClick={handlePublish}
            disabled={!canPublish}
          >
            Publish Course
          </Button>
        </div>
      </div>

      {showSuccess && (
        <Alert className="mb-6 bg-green-50 border-green-200">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Success</AlertTitle>
          <AlertDescription className="text-green-700">
            Course published successfully! Version: {course.version}
          </AlertDescription>
        </Alert>
      )}

      {!canPublish && course.modules.length === 0 && (
        <Alert className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Not ready for publishing</AlertTitle>
          <AlertDescription>
            You need to add at least one module to your course before publishing.
          </AlertDescription>
        </Alert>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="info">Basic Info</TabsTrigger>
          <TabsTrigger value="modules">Modules & Content</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="info">
          <CourseBasicInfo />
        </TabsContent>
        <TabsContent value="modules">
          <CourseModules />
        </TabsContent>
        <TabsContent value="preview">
          <CoursePreview />
        </TabsContent>
        <TabsContent value="settings">
          <CourseSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}