import { Command, Editor, MarkdownFileInfo, Plugin } from "obsidian";

const DeconstructTitleCommand: Command = {
  id: "deconstruct-title",
  name: "Deconstruct Title",
  hotkeys: [{ modifiers: ["Alt", "Shift"], key: "d" }],
  editorCallback: (editor: Editor, view: MarkdownFileInfo) => {
    editor.replaceRange(
      Array.from(view.file.basename)
        .map((c) => `[[${c}]]`)
        .join(""),
      editor.getCursor()
    );
  },
};

export default class Akasha extends Plugin {
  async onload() {
    console.log("Loading Akasha!");

    this.addCommand(DeconstructTitleCommand);
  }

  async onunload() {
    console.log("Unloading Akasha!");
  }
}
