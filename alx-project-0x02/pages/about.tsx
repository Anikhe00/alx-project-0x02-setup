import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const About = () => {
  return (
    <div className="flex flex-col gap-2">
      <Header />
      <div className="flex flex-col items-start justify-start min-h-screen space-y-4 p-6">
        <h1 className="text-3xl font-bold">About Page</h1>

        <div className="flex flex-col space-x-4 gap-4">
          <Button label="Small Button" size="small" shape="rounded-sm" />
          <Button label="Medium Button" size="medium" shape="rounded-md" />
          <Button label="Large Button" size="large" shape="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default About;
