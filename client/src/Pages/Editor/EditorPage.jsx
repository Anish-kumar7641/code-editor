import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from 'axios';
import "./EditorPage.css";

function EditorPage() {
  const [code, setCode] = useState("// Write your code here");
  const [response, setResponse] = useState(null);

  function handleEditorChange(value, event) {
    setCode(value); // Update the code state when editor content changes
  }
  
  function handleEditorDidMount(editor, monaco) {
    console.log("onMount: the editor instance:", editor);
    console.log("onMount: the monaco instance:", monaco);
  }

  function handleEditorWillMount(monaco) {
    console.log("beforeMount: the monaco instance:", monaco);
  }

  function handleEditorValidation(markers) {
    // Optionally handle validation markers
    // markers.forEach(marker => console.log('onValidate:', marker.message));
  }

  const handleSubmit = async () => {
    try {
      const result = await axios.post('/api/submit', { code });
      setResponse(result.data); // Store the response data
    } catch (error) {
      setResponse({ error: 'Submission failed' }); // Handle errors
    }
  };

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
            <div className="subNav">
              <div className="subNavTitle">&lt;/&gt;<span>Code</span></div>
            </div>
            <div className="codeEditor">
              <Editor
                defaultLanguage="cpp"
                defaultValue="// some comment"
                onChange={handleEditorChange} // Update state on code change
                onMount={handleEditorDidMount}
                beforeMount={handleEditorWillMount}
                onValidate={handleEditorValidation}
                theme="vs-dark"
              />
            </div> 
            <button className="submitButton" onClick={handleSubmit}>
              Submit Code
            </button>
            {/* <pre>{response ? JSON.stringify(response, null, 2) : ''}</pre> */}
          </div>
        </div>
        <div className="rightEditorContainer">
          <div className="testContainer">
            <div className="subNav">
              <div className="subNavTitle">🖊️<span>Test Case</span></div>
            </div>
          </div>
          <div className="outputContainer">
            <div className="subNav">
              <div className="subNavTitle">📝<span>Output</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorPage;
