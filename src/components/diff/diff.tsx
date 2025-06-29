import type { Dispatch, SetStateAction } from "react";
import ReactDiffViewer, { DiffMethod } from "react-diff-viewer-continued";

type DiffProps = {
  editor: any;
  newHTML: string;
  oldHTML: string;
  setDiffOpen: Dispatch<SetStateAction<Boolean>>;
};

/**
 * Inserts a newline between every pair of HTML tags.
 *
 * @param html - The input HTML string (may be one‐liner or multi‐line)
 * @returns A new HTML string where every `><` boundary is replaced with `>\n<`
 */
function addNewlinesBetweenTags(html: string): string {
  // Match '>' then any whitespace then '<', replace with '>\n<'
  return html.replace(/>\s*</g, ">\n<");
}

const Diff = ({ editor, newHTML, oldHTML, setDiffOpen }: DiffProps) => {
  const handleAccept = () => {
    editor.commands.setContent(newHTML);
    setDiffOpen(false);
  };

  const handleReject = () => {
    // close the diff
    setDiffOpen(false);
    editor.commands.undo();
  };

  return (
    <div className="border border-neutral-300 rounded-md overflow-hidden p-2 m-2">
      <div className="flex justify-end gap-2 border-b pb-2 border-neutral-200">
        <button
          className="px-2 py-1 bg-green-100 text-green-700 border border-green-500 rounded-md cursor-pointer hover:bg-green-200"
          onClick={handleAccept}
        >
          Accept
        </button>
        <button
          className="px-2 py-1 bg-red-100 text-red-700 border border-red-500 rounded-md cursor-pointer hover:bg-red-200"
          onClick={handleReject}
        >
          Reject
        </button>
      </div>
      <ReactDiffViewer
        oldValue={addNewlinesBetweenTags(oldHTML)}
        newValue={addNewlinesBetweenTags(newHTML)}
        splitView={false}
        hideLineNumbers={true}
        disableWordDiff={false}
        compareMethod={DiffMethod.LINES}
        extraLinesSurroundingDiff={0}
        renderContent={(line) => (
          <div
            className="prose prose-sm "
            dangerouslySetInnerHTML={{
              __html: line,
            }}
          />
        )}
        styles={{
          variables: {
            light: {
              diffViewerTitleBackground: "transparent",
              diffViewerTitleColor: "transparent",
              diffViewerTitleBorderColor: "transparent",
              // wordAddedBackground: "transparent",
              // wordRemovedBackground: "transparent",
            },
          },
          contentText: {
            fontFamily: "sans-serif",
          },
          titleBlock: "display: none; background-color: black",
          diffContainer: {
            width: "100%",
            overflow: "hidden",
          },
        }}
      />
    </div>
  );
};

export default Diff;
