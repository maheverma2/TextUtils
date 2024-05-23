// import React,{useState} from 'react'

export default function About(props) {

  //  This usestate is used to enable darkmode in about component by using object through javascript
/*
  const [mystyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });
  
  const [btntext, setBtnText] = useState("Dark Mode Enable");

  const toggleState =()=> {
  if(mystyle.color === 'black'){
    setMyStyle({
    color: 'white',
    backgroundColor: 'black',
    border:'1px solid white'
    })
    setBtnText("Light Mode Enable");
  }
  else{
    setMyStyle({
      color: 'black',
      backgroundColor: 'white'
      })
      setBtnText("Dark Mode Enable");
  }
  }*/

  let mystyle = {
    color : props.mode  === 'dark' ? 'white' : 'rgb(17 58 95)',
    backgroundColor : props.mode === 'dark' ? 'rgb(17 58 95)':'white' ,
  };

  return (
      <div className='Container' style={{color : props.mode  === 'dark' ? 'white' : 'rgb(17 58 95)'}}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your Text</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body"style={mystyle}>
               Textutils give you the way to analize your text quickly and efficiently . It count number of character ,word,time to read etc.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               <strong> Free To Use</strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body"style={mystyle}>
                Textutils is a free character counter tool that provides instant character count and word count statistics for the given text. TextUtils report the number of words and Characters.Thus It is suitable for writing text with word/character limit.

              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong> Browser Capatibility</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body"style={mystyle}>
              This word counter software work in any web browser such as Chrome,FireFox,Internet Explorer,Safari,Opera. It suits to count character in facebook,blogs,books,exel document, word document,pdf document,essays etc.
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container">

        <button type="button" onClick={toggleState}  className='btn btn-primary my-3'>{btntext}</button>

        </div>
        */}
    </div>
  )
}
