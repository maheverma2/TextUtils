import React,{ useState } from 'react'

export default function TextArea(props) {

  const ToUpperCase=()=>{
    // console.log("UPPERCASE BUTTON IS CLICK"+ text)
    let newText= text.toUpperCase()
    setText(newText)
    props.showAlert("The text change to Upper Case !","success")
  }
  const ToLowerCase=()=>{
    // console.log("UPPERCASE BUTTON IS CLICK"+ text)
    let newText= text.toLowerCase()
    setText(newText)
    props.showAlert("The text change to Lower Case !","success")
  }
  const ToClear=()=>{
    let newText=" "
    setText(newText)
    props.showAlert("The text is cleared !","success")
  }

  const handleCopy =()=>{ 
    var text=document.getElementById('my-box');
    text.select();         
    text.setSelectionRange(0,9999) ;
    navigator.clipboard.writeText(text.value);
  }

// here regExp is used in javascript it split the sentence into array if more than one space and then join with one space in end line using join            

  const handleExtraSpace=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("The extra space get removed !","success")
  }

  const handleOnchange=(event)=>{
    // console.log("on change")
    setText(event.target.value)// it change enter value + value present before in textarea. 
  }

  const [text, setText] = useState("");// text isa state variable and through setText we chnage the value of text
  // text="abcd"  it is wrong method
  // SetText("NewText")  it is correct method
   return (
    <>
    <div className='container'style = {{color: props.mode === 'dark' ? 'white':'#123045'}}>
        <div className ="mb-3">
        <h1 className='mb-4'>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnchange}  style={{backgroundColor: props.mode === 'dark'?'#2e557f':'white', color: props.mode === 'dark' ? 'white':'#123045'}} id="my-box" rows="8"></textarea>
        </div>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={ToUpperCase}>Convert To Uppercase</button>
        <button disabled = {text.length === 0}className="btn btn-primary mx-1 my-1" onClick={ToLowerCase}>Convert To Lowercase</button>
        <button disabled = {text.length === 0}className="btn btn-primary mx-1 my-1" onClick={ToClear}>Claer Text</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>copy to clipboard</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>remove extra space</button>
    </div>
    <div className="container"style={{color: props.mode === 'dark' ? 'white':'#123045'}} >
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length } number of words and {text.length} character</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} time need to read the text </p>
      <h2>Preview</h2>
      <p>{text.length>0?text :'Nothing to preview !!'}</p>
    </div>
    </>
  )
}
// text.slipt provide array of word and after .length it provide length of array containg words
//return element.length!=0}) this line of code check if array element should contain word
