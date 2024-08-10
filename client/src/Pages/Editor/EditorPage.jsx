import React from "react";
import Editor from "@monaco-editor/react";
import "./EditorPage.css";

function EditorPage() {
  function handleEditorChange(value, event) {
    // here is the current value
  }

  function handleEditorDidMount(editor, monaco) {
    console.log("onMount: the editor instance:", editor);
    console.log("onMount: the monaco instance:", monaco);
  }

  function handleEditorWillMount(monaco) {
    console.log("beforeMount: the monaco instance:", monaco);
  }

  function handleEditorValidation(markers) {
    // model markers
    // markers.forEach(marker => console.log('onValidate:', marker.message));
  }

  return (
    <div className="editorContainer">
      <div className="editorNav">
        <div className="title">
          &lt;Code<span>Dynamo/</span>&gt;
        </div>
      </div>
      <div className="editorBody">
        <div className="leftEditorContainer">
          <div className="editor">
            <div className="subNav"><div className="subNavTitle">&lt;/&gt;<span>Code</span></div></div>
            <div className="codeEditor">
              <Editor
                defaultLanguage="cpp"
                defaultValue="// some comment"
                onChange={handleEditorChange}
                onMount={handleEditorDidMount}
                beforeMount={handleEditorWillMount}
                onValidate={handleEditorValidation}
                theme="vs-dark"
              />
            </div>
          </div>
        </div>
        <div className="rightEditorContainer">
          <div className="testContainer">
            <div className="subNav"><div className="subNavTitle">🖊️<span>Test Case</span></div></div>
          </div>
          <div className="outputContainer">
            <div className="subNav"><div className="subNavTitle">📝<span>Output</span></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorPage;
