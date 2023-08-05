"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const obsidian_1 = require("obsidian");
const DeconstructTitleCommand = {
    id: "deconstruct-title",
    name: "Deconstruct Title",
    hotkeys: [{ modifiers: ["Alt", "Shift"], key: "d" }],
    editorCallback: (editor, view) => {
        editor.replaceRange(Array.from(view.file.basename)
            .map((c) => `[[${c}]]`)
            .join(""), editor.getCursor());
    },
};
class Akasha extends obsidian_1.Plugin {
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Loading Akasha!");
            this.addCommand(DeconstructTitleCommand);
        });
    }
    onunload() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Unloading Akasha!");
        });
    }
}
exports.default = Akasha;
