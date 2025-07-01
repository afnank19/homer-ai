import { EditorContent } from "@tiptap/react";
import { useEffect, useState } from "react";
import { getNextLine } from "../../services/api/llm";
import Diff from "../diff/diff";
import { Editor as EditorType } from "@tiptap/core";
import { SparkleIcon } from "@phosphor-icons/react";
import { useMutation } from "@tanstack/react-query";

type EditorProps = {
  editor: EditorType;
  newHTML: string;
  oldHTML: string;
};

const Editor = ({ editor, newHTML, oldHTML }: EditorProps) => {
  const [data, setData] = useState<any>("");
  const [diffOpen, setDiffOpen] = useState<Boolean>(false);
  const [canTab, setCanTab] = useState<Boolean>(true);

  const [coords, setCoords] = useState<{ top: number; left: number } | null>(
    null
  );

  async function tabComplete() {
    const { from } = editor.state.selection;
    const textToCursor = editor.state.doc.textBetween(0, from, "\n");

    console.log("generating next line: ");

    const { right, bottom } = editor.view.coordsAtPos(from);
    setCoords({ top: bottom + 100, left: right + 10 });

    // const nextLine = await getNextLine(textToCursor); // Gets the next line
    nextLineMutation.mutate(textToCursor);
    // setData(nextLine);
    editor?.commands.focus(from);
  }

  // function updateBubbleMenuPos() {
  //   const { from } = editor.state.selection;
  //   const { top, left, right, bottom } = editor.view.coordsAtPos(from);
  //   console.log(top, left);
  //   setCoords({ top: bottom, left: right });
  // }

  function acceptMsg() {
    editor?.commands.insertContent(data + " ");
    setData("");
  }
  function rejectMsg() {
    setData("");
  }

  console.count("editor rendered");

  useEffect(() => {
    console.log("got new html, should show the diff");
    if (newHTML == "") {
      return;
    }
    setDiffOpen(true);
  }, [newHTML, oldHTML]);

  const nextLineMutation = useMutation({
    mutationFn: getNextLine,
    onSuccess: (data) => {
      setData(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <>
      {/* <EditorHeader editor={editor} /> */}
      <EditorContent
        editor={editor}
        onKeyDown={async (e) => {
          if (e.key == "Tab" && !data && canTab) {
            console.log("Tab pressed");
            e.preventDefault();
            setCanTab(false);
            await tabComplete();
            setCanTab(true);
            // editor.view.dispatch(editor.state.tr);
            return;
          } else if (e.key == "Tab" && data) {
            e.preventDefault();
            acceptMsg();
            editor.commands.focus();
          } else if (e.key == "Escape" && data) {
            e.preventDefault();
            rejectMsg();
          }
          // updateBubbleMenuPos();
          setData("");
        }}
      />
      {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu> */}

      {data && (
        <>
          <div
            // Tailwind for styling; inline style for dynamic coords
            className="absolute pointer-events-auto rounded transform -translate-y-full z-50 max-w-2xl"
            style={{
              top: coords.top + window.scrollY,
              left: coords.left + window.scrollX,
            }}
          >
            <div className="flex flex-col bg-white  gap-2 p-1 rounded-md border border-gray-300 opacity-95">
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium mx-2 flex items-center gap-2">
                  <SparkleIcon />
                  Suggested Line
                </p>
                <div className="">
                  <button
                    onClick={() => {
                      acceptMsg();
                    }}
                    className="px-2 py-1 bg-green-100 text-green-700 border border-green-500 rounded-md cursor-pointer hover:bg-green-200 mx-1"
                  >
                    [Tab] Accept
                  </button>
                  <button
                    onClick={() => {
                      rejectMsg();
                    }}
                    className="px-2 py-1 bg-red-100 text-red-700 border border-red-500 rounded-md cursor-pointer hover:bg-red-200 mx-1"
                  >
                    [Esc] Reject
                  </button>
                </div>
              </div>
              <div className="bg-white border border-gray-200 text-gray-700 p-2 rounded-sm">
                {data}
              </div>
            </div>
          </div>
          ,
        </>
      )}
      {/* <button
        onClick={() => {
          tabComplete();
        }}
        className="bg-black text-white rounded-2xl p-2"
      >
        Generate next line
      </button> */}
      {diffOpen ? (
        <Diff
          editor={editor}
          newHTML={newHTML}
          oldHTML={oldHTML}
          setDiffOpen={setDiffOpen}
        />
      ) : null}
      {/* <Diff editor={editor} newHTML={newHTML} oldHTML={oldHTML} /> */}
      {/* <p>{newHTML}</p> */}
    </>
  );
};

export default Editor;
