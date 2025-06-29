import {
  CodeIcon,
  CodeBlockIcon,
  ListBulletsIcon,
  ListDashesIcon,
  QuotesIcon,
  TextBIcon,
  TextItalicIcon,
  TextStrikethroughIcon,
  TextHOneIcon,
  TextHTwoIcon,
  TextHThreeIcon,
} from "@phosphor-icons/react";
import type { Editor } from "@tiptap/core";
import { useState } from "react";
// import { useCurrentEditor } from "@tiptap/react";

type EditorOptionsProps = {
  editor: Editor;
};

const EditorOptions = ({ editor }: EditorOptionsProps) => {
  // const { editor } = useCurrentEditor();

  // if (editor == null) {
  //   return <></>;
  // }
  const [, setForceRerender] = useState(0);

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <div className="flex gap-2 pr-4 border-r  border-r-gray-200">
        <button
          className={`p-1 rounded-sm ${
            editor.isActive("heading", { level: 1 }) ? "bg-gray-100" : ""
          }`}
          onClick={() => {
            editor.chain().focus().toggleHeading({ level: 1 }).run();
            setForceRerender((prev) => prev + 1);
          }}
        >
          <TextHOneIcon size={"1.5rem"} />
        </button>
        <button
          className={`p-1 rounded-sm ${
            editor.isActive("heading", { level: 2 }) ? "bg-gray-100" : ""
          }`}
          onClick={() => {
            editor.chain().focus().toggleHeading({ level: 2 }).run();
            setForceRerender((prev) => prev + 1);
          }}
        >
          <TextHTwoIcon size={"1.5rem"} />
        </button>
        <button
          className={`p-1 rounded-sm ${
            editor.isActive("heading", { level: 3 }) ? "bg-gray-100" : ""
          }`}
          onClick={() => {
            editor.chain().focus().toggleHeading({ level: 3 }).run();
            setForceRerender((prev) => prev + 1);
          }}
        >
          <TextHThreeIcon size={"1.5rem"} />
        </button>
      </div>

      <button
        className={`p-1 rounded-sm cursor-pointer ${
          editor.isActive("bold") ? "bg-gray-100" : ""
        }`}
        onClick={() => {
          editor.chain().focus().toggleBold().run();
          setForceRerender((prev) => prev + 1);
        }}
      >
        <TextBIcon size={"1.5rem"} />
      </button>
      <button
        className={`p-1 rounded-sm ${
          editor.isActive("italic") ? "bg-gray-100" : ""
        }`}
        onClick={() => {
          editor.chain().focus().toggleItalic().run();
          setForceRerender((prev) => prev + 1);
        }}
      >
        <TextItalicIcon size={"1.5rem"} />
      </button>

      <button
        className={`p-1 rounded-sm ${
          editor.isActive("strike") ? "bg-gray-100" : ""
        }`}
        onClick={() => {
          editor.chain().focus().toggleStrike().run();
          setForceRerender((prev) => prev + 1);
        }}
      >
        <TextStrikethroughIcon size={"1.5rem"} />
      </button>
      <button
        className={`p-1 rounded-sm ${
          editor.isActive("blockQuote") ? "bg-gray-100" : ""
        }`}
        onClick={() => {
          editor.chain().focus().toggleBlockquote().run();
          setForceRerender((prev) => prev + 1);
        }}
      >
        <QuotesIcon size={"1.5rem"} />
      </button>
      <button
        className={`p-1 rounded-sm ${
          editor.isActive("orderedlist") ? "bg-gray-100" : ""
        }`}
        onClick={() => {
          editor.chain().focus().toggleOrderedList().run();
          setForceRerender((prev) => prev + 1);
        }}
      >
        <ListDashesIcon size={"1.5rem"} />
      </button>
      <button
        className={`p-1 rounded-sm ${
          editor.isActive("bulletList") ? "bg-gray-100" : ""
        }`}
        onClick={() => {
          editor.chain().focus().toggleBulletList().run();
          setForceRerender((prev) => prev + 1);
        }}
      >
        <ListBulletsIcon size={"1.5rem"} />
      </button>
      <button
        className={`p-1 rounded-sm ${
          editor.isActive("code") ? "bg-gray-100" : ""
        }`}
        onClick={() => {
          editor.chain().focus().toggleCode().run();
          setForceRerender((prev) => prev + 1);
        }}
      >
        <CodeIcon size={"1.5rem"} />
      </button>
      <button
        className={`p-1 rounded-sm ${
          editor.isActive("codeBlock") ? "bg-gray-100" : ""
        }`}
        onClick={() => {
          editor.chain().focus().toggleCodeBlock().run();
          setForceRerender((prev) => prev + 1);
        }}
      >
        <CodeBlockIcon size={"1.5rem"} />
      </button>
    </div>
  );
};

export default EditorOptions;
