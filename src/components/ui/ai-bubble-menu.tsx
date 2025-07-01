import { Editor, generateHTML } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";

type AiBubbleMenuProps = {
  editor: Editor;
};

const AiBubbleMenu = ({ editor }: AiBubbleMenuProps) => {
  return (
    <div className="bg-yellow-200">
      <button
        onClick={() => {
          const { from, to } = editor.view.state.selection;
          const text = editor.state.doc.textBetween(from, to, "");
          // console.log(text);

          const slice = editor.state.doc.slice(from, to);
          const json = slice.content.toJSON();

          console.log(json);
          const html = generateHTML(json, [
            StarterKit,
            // TextStyle.configure({ mergeNestedSpanStyles: true }),
            // Color,
            // Placeholder,
          ]);
          console.log(html);
          editor
            .chain()
            .focus()
            .insertContentAt(
              { from, to },
              "<p>Heya there, my cats name is Mika</p>"
            )
            .run();
        }}
      >
        Hello
      </button>
    </div>
  );
};

export default AiBubbleMenu;
