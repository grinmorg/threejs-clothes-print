import React, { ChangeEvent } from "react";
import CustomButton from "./CustomButton";
import { enumImgSize } from "../@types/enums";

interface AIPickerProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  handleSubmit: (type: string) => void;
  generatingImg?: boolean;
}

const AIPicker: React.FC<AIPickerProps> = ({
  prompt,
  setPrompt,
  generatingImg,
  handleSubmit,
}) => {
  const handlePromptChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={handlePromptChange}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit(enumImgSize.Logo)}
              customStyles="text-xs"
            />

            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit(enumImgSize.Full)}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
