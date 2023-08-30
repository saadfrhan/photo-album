"use client";

import { useState } from "react";
import { CldImage } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type TransformationType = "blur" | "grayscale" | "pixelate" | "bg-remove" | "generative-fill" | null;

export default function ImageEditor(
  { public_id }: { public_id: string }
) {
  const [transformation, setTransformation] = useState<TransformationType>(null);
  const [pendingPrompt, setPendingPrompt] = useState("");
  const [prompt, setPrompt] = useState("");

  const applyTransformation = (type: TransformationType) => {
    setTransformation(type);
    if (type === "generative-fill") {
      setPrompt(pendingPrompt);
    }
  };

  const transformations = [
    { type: "blur", effects: [{ blur: 800 }] },
    { type: "grayscale", effects: [{ grayscale: true }] },
    { type: "pixelate", effects: [{ pixelate: 10 }] },
    { type: "bg-remove" }
  ];

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Edit {public_id}</h1>
        </div>

        <div className="flex gap-4">
          <Button variant="ghost" onClick={() => setTransformation(null)}>
            Clear All
          </Button>

          <div className="flex flex-col gap-4">
            <Button onClick={() => applyTransformation("generative-fill")}>
              Apply Generative Fill
            </Button>
            <Label>Prompt</Label>
            <Input
              value={pendingPrompt}
              onChange={(e) => setPendingPrompt(e.target.value)}
            />
          </div>

          {transformations.map(({ type }) => (
            <Button key={type} onClick={() => applyTransformation(type as TransformationType)}>
              {type === "bg-remove" ? "Remove Background" : `Apply ${type}`}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-12">
          <CldImage
            src={public_id}
            width="1400"
            height="900"
            alt={public_id}
          />

          {transformations.map(({ type, effects }) => (
            transformation === type && (
              <CldImage
                key={type}
                src={public_id}
                width="1400"
                height="900"
                effects={effects}
                removeBackground={type === "bg-remove"}
                fillBackground={type === "generative-fill" ? { prompt } : undefined}
                alt={public_id}
              />
            )
          ))}
        </div>
      </div>
    </section>
  );
}
