import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
let marked = require("marked");

function App() {
  const placeHolder = `---
  ### _A Simple Responsive Markdown Previewer Powered by React Cleansed with DOMPurify_
  created by: Stuart Peel
  
  ---
  # Heading - Level I
  ## Heading - Level II
  ### Heading - Level III
  
  Wrap in-line code between backticks:
  
  text text \`<div>In-line Code</div>\` more text
  
  \`\`\`
  /* multi-line code wrapped
     with 3 x backticks */
  
    if (count <= 0){
      console.log(count + " Hold");
        return count + " Hold";
        } else if (count > 0){
          console.log(count + " Bet");
        return count + " Bet";
        }
        return cc;
    }
  \`\`\`
    
  **bold text**
  _italic text_.
  **_bold italics_**
   ~~cross stuff out~~
  
  Create [links](https://www.freecodecamp.com) NB: open in a new tab on CodePen else **_bigga bang badda boom!_**
  > Block Quotes!
  
  tables:
  
   Header |  Header |  Header
  ------------ | ------------- | ------------- 
  content  | content | content
  content | content | content
  
  Lists with different indentation levels:
  - List item
    - List item
    - List item
       - List item
       - List item
          - List item
  
  Numbered lists
  1. Just use  1's
  1. and list numbers 
  1. are automatically generated
  
  Bulleted lists
  - use dashes
  * or asterisks
  
  or embedded images:
  
  ![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png)
  `;

  const [markDown, setMarkDown] = useState(placeHolder);

  return (
    <div className="App">
      <header className="App-header">
        <textarea
          value={markDown}
          onChange={(e) => setMarkDown(e.target.value)}
          id="editor"
        />
        {/* {console.log(markDown)}
        <div id="preview">
          <ReactMarkdown>{markDown}</ReactMarkdown>
        </div> */}
        <div
          dangerouslySetInnerHTML={{ __html: marked(markDown) }}
          id="preview"
        ></div>
      </header>
    </div>
  );
}

export default App;
