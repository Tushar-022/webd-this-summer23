import React,{useState} from 'react'


export default function Textform(props) {
  const[text,setText]= useState('');
  const [bookmark, setBookmark] = useState(null);

  const handleUpClick=()=>{
    let uptext=text.toUpperCase();
    setText(uptext);

  }
  const handleLoClick=()=>{
    let lotext=text.toLowerCase();
    setText(lotext);

  }
  const handleClear=()=>{
    let newText=' ';
    setText(newText);
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.onend = () => {
      setBookmark(window.speechSynthesis.paused ? window.speechSynthesis.resume() : null);
    };
    window.speechSynthesis.speak(msg);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setBookmark(null);
  };

  const resumeSpeaking = () => {
    if (bookmark) {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      msg.onend = () => {
        setBookmark(null);
      };
      window.speechSynthesis.speak(msg);
    }
  };
  

  const handleOnChange=(event)=>{
    setText(event.target.value);
  }


  return (
   <>
    <div>
      <h1>{props.heading}</h1>
        <textarea name="Days" cols="120" rows="16" value={text} onChange={handleOnChange}></textarea>
    </div>
    <div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lower case</button>
      <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
      <button  className=" btn btn-primary mx-2 " onClick={speak}>Start reading</button>
      <button  className="btn btn-primary mx-2" onClick={stopSpeaking}>Stop Speaking</button>
      <button className="btn btn-primary mx-2"  onClick={resumeSpeaking}>Resume Speaking</button>
      
    </div>
    <div className="container my-3">
      <h3>Your text summary</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <h2>Preview</h2>
     <p> {text}</p>
    </div>
    </>
    
  )
}
