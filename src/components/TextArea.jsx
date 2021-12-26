import {useState} from "react"

function TextArea(props) {

    const handleUpClick = () => {
            let newText = text.toUpperCase()
            setText(newText)
    }

    const handleloClick = () => {
      let newText = text.toLowerCase()
      setText(newText)
    }

    const handlelSaveClick = () => {
      let newText = text.toLowerCase()
      setText(newText)
    }
 

    const handleOnChange = (e) => {
           setText(e.target.value)
    }
    const [text, setText] = useState("")

    return (
        <>
      <div className="conatiner" style={{
        color: props.mode === "light"?'black':'white'
      }}>
        <h1 className="forml-label">{props.heading}</h1>
        <textarea className="form-control" value = {text} 
        onChange={handleOnChange} rows="8" style={{
          backgroundColor: props.mode === 'light'?'white':'gray',
          color: props.mode === 'light'?'black':'white'
        }}></textarea>
        <div className="my-3">
         <button className="btn btn-primary mx-1" onClick={handleUpClick}>To UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleloClick}>To LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={handlelSaveClick}>Save as .pdf</button>
       </div>
      </div>
     
      <div className="container" style={{
        color: props.mode === "light"?'black':'white'
      }}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} min read</p>
      </div>
      <div className="conatiner my-3 mx-3" style={{
        color: props.mode === "light"?'black':'white'
      }}>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text to preview here"}</p>
      </div>
      </>
    )
}

export default TextArea
 