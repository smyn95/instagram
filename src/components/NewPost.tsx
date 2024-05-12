"use client";

import { AuthUser } from "@/model/user";
import Button from "./ui/Button";
import PostUserAvatar from "./PostUserAvatar";
import FilesIcon from "./ui/icons/FilesIcon";
import { ChangeEvent, DragEvent, useState } from "react";

type Props = {
  user: AuthUser;
};

export default function NewPost({ user: { username, image } }: Props) {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const files = e.target?.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const handleDrag = (e: DragEvent) => {
    if (e.type === "dragenter") {
      setDragging(true);
    } else if (e.type === "dragleave") {
      setDragging(false);
    }
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragging(false);

    const files = e.dataTransfer?.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  return (
    <>
      <section>
        <PostUserAvatar username={username} image={image ?? ""} />
        <form>
          <input
            className="hidden"
            name="input"
            id="input-upload"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
          <label
            htmlFor="input-upload"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <FilesIcon />
            <p>Drag and Drop your image here or click</p>
          </label>
          <textarea
            name="text"
            id="input-text"
            required
            rows={10}
            placeholder={"Write a caption..."}
          />
          <Button text="Publish" onClick={() => {}} />
        </form>
      </section>
    </>
  );
}
