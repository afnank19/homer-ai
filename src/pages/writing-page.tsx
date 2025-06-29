import Editor from "../components/editor/editor";
import Chat from "../components/chat/chat";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Placeholder from "@tiptap/extension-placeholder";
import { useState } from "react";
import EditorHeader from "../components/editor/editor-header";
// define your extension array
const extensions = [
  StarterKit,
  TextStyle.configure({ mergeNestedSpanStyles: true }),
  Color,
  Placeholder,
];

const WritingPage = () => {
  const editor = useEditor({
    extensions,
    editorProps: {
      attributes: {
        class: "prose prose-md  font-news max-w-none  m-1 focus:outline-none",
      },
    },
    /**
     * This option gives us the control to enable the default behavior of rendering the editor immediately.
     */
    immediatelyRender: true,
    /**
     * This option gives us the control to disable the default behavior of re-rendering the editor on every transaction.
     */
    shouldRerenderOnTransaction: true,
  });

  const [newHTML, setNewHTML] = useState<string>("");
  const [oldHTML, setOldHTML] = useState<string>("");

  return (
    <>
      {/* <div className="flex gap-2">
        <div className="w-full">
          <Editor />
        </div>
        <div className="bg-gray-300 w-full ">
          <Chat />
        </div>
      </div> */}

      <PanelGroup direction="horizontal" className="">
        <Panel defaultSize={70} minSize={50}>
          <div className="flex flex-col items-center justify-center h-screen">
            <EditorHeader editor={editor} />
            <div className="max-w-3xl w-full h-screen overflow-y-auto mt-4">
              <Editor editor={editor} newHTML={newHTML} oldHTML={oldHTML} />
            </div>
          </div>
        </Panel>
        <PanelResizeHandle />
        <Panel
          defaultSize={30}
          minSize={10}
          className="border border-gray-300 "
        >
          <div className="flex items-center justify-center ">
            <div className="w-full h-screen">
              <Chat
                editor={editor}
                setNewHTML={setNewHTML}
                setOldHTML={setOldHTML}
              />
            </div>
          </div>
        </Panel>
      </PanelGroup>
    </>
  );
};

export default WritingPage;
