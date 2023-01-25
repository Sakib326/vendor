import UniditEditor from "@techzolab/zodit-react";
import "@techzolab/zodit/build/zodit.min.css";

const buttons = ["bold", "italic", "underline", "align", "ul", "ol"];

const editorConfig = {
  readonly: false,
  toolbar: true,
  spellcheck: true,
  language: "en",
  toolbarButtonSize: "medium",
  toolbarAdaptive: false,
  showCharsCounter: false,
  showWordsCounter: false,
  showXPathInStatusbar: false,
  askBeforePasteHTML: true,
  askBeforePasteFromWord: true,
  buttons: buttons,
  uploader: {
    insertImageAsBase64URI: true,
  },
  width: 800,
  height: 300,
};

function WinnersEditor(props: any) {
  const target_name = props?.name || "description";
  editorConfig.width = props?.width || "auto";
  editorConfig.height = props?.height || 300;

  return (
    <div
      style={{ margin: "0 auto" }}
      className={`zodit_editor ${props?.className ?? null}`}
    >
      <UniditEditor
        value={props?.contents}
        config={editorConfig}
        onChange={(value: any) => {
          const target = { name: target_name, value: value, event: Event };
          props?.onChange({ target, value });
          if (value?.keyCode == 9) {
            console.log("hello");

            value.preventDefault();
          }
        }}
      />
    </div>
  );
}

export default WinnersEditor;
