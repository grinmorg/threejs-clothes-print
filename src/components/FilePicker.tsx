import React, { ChangeEvent, FC } from "react";

import CustomButton from "./CustomButton";
import { enumImgSize } from "../@types/enums";

interface FilePickerProps {
  file: File | null;
  setFile: (file: File | null) => void;
  readFile: (type: enumImgSize) => void;
}

const FilePicker: FC<FilePickerProps> = ({ file, setFile, readFile }) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === null ? "No file selected" : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        {file !== null ? (
          <p className="mt-2 text-gray-500 bg-gray-50 p-2 text-xs rounded-md border-2">
            File loaded, select options below
          </p>
        ) : null}
        <CustomButton
          type="outline"
          title="Logo"
          handleClick={() => readFile(enumImgSize.Logo)}
          customStyles="text-xs"
        />
        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => readFile(enumImgSize.Full)}
          customStyles="text-xs"
        />
      </div>
    </div>
  );
};

export default FilePicker;
