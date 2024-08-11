import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from 'axios';
import "./EditorPage.css";

function EditorPage() {
  const [code, setCode] = useState("// Write your code here");
  const [testCases, setTestCases] = useState(""); 
  const [response, setResponse] = useState(""); 

  function handleEditorChange(value, event) {
    setCode(value); 
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
      const result = await axios.post('http://localhost:8000/compile', { code, testCases });
      setResponse(result.data.output);
    } catch (error) {
      if (error.response && error.response.data.error) {
        setResponse(`Error: ${error.response.data.error}`);
      } else {
        setResponse('Submission failed');
      }
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
                onChange={handleEditorChange} 
                onMount={handleEditorDidMount}
                beforeMount={handleEditorWillMount}
                onValidate={handleEditorValidation}
                theme="vs-dark"
              />
            </div> 
            
            <button className="submitButton" onClick={handleSubmit}>
              Submit Code
            </button>
          </div>
        </div>
        <div className="rightEditorContainer">
              <textarea 
              value={testCases} 
              onChange={(e) => setTestCases(e.target.value)}
              placeholder="Command Line Input"
              className="testCasesInput"
            />
          <div className="outputContainer">
            <div className="subNav">
              <div className="subNavTitle">📝<span>Output</span></div>
            </div>
            <div className="outputContent" style={{color:"white", whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
              {response ? response : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorPage;
