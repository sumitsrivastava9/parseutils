import React, { useState } from "react";

function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  }
  const handleLoClick=()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  }
  const handleOnChange=(event)=>{
    // console.log("On change");
    setText(event.target.value);
  }
  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
    
  }
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces!", "success");
    

  }
  const handleClearSpaces = () =>{
    let newText = '';
    setText(newText);
    props.showAlert("Cleared Text!", "success");
  }

  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-primary mx-2" onClick={handleClearSpaces}>Clear text</button>
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
        <p>{.08*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
    </div>
    </>
  );
}

export default TextForm;
