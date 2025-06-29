import type { Editor } from "@tiptap/core";
import EditorOptions from "./editor-options";
import { SnowflakeIcon } from "@phosphor-icons/react";

type EditorHeaderProps = {
  editor: Editor;
};

const EditorHeader = ({ editor }: EditorHeaderProps) => {
  return (
    <div className="sticky top-0 border-b border-gray-300 p-2 z-10 w-full drop-shadow-lg">
      <div className="flex absolute items-center gap-1">
        <SnowflakeIcon size={"1.5rem"} color="#c96442" />
        <h1 className="font-bold text-2xl">Homer* [AI]</h1>
      </div>
      <EditorOptions editor={editor} />
    </div>
  );
};

export default EditorHeader;
