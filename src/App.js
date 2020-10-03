import React, { useState } from "react";
import "./styles.css";
import marked from "marked";

export default function App() {
  const [text, setText] = useState(`# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### Sub-sub-heading
   
  Heres some code, \`<div></div>\`, between 2 backticks.
    
  \`\`\`
  // this is multi-line code:
  #include <stdio.h>
  void main(){
    return 0;
  }
  \`\`\`
    
  **This is bold text**
    
  [Link to Google](https://www.google.com)
  
  > Block Quotes
    
  - List item 1
  - List item 2
  - List item 3
  - List item 4
    
    ![Pikachu icon](https://img.icons8.com/color/2x/pikachu-pokemon.png)
    `);
  const handleEditor = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="App">
      <div id="container">
        <textarea id="editor" onChange={handleEditor} value={text}></textarea>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(text) }}
        ></div>
      </div>
    </div>
  );
}
