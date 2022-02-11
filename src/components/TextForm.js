import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        // console.log("clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        // console.log("clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("Changed");
        setText(event.target.value);
    }

    const handleOnCopy = () => {
        let text = document.getElementById("my-text");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    }

    const handleClearText = () => {
        setText("");
    }

    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="" className="text-muted">{props.heading}</label>
                            <textarea id='my-text' className="form-control" value={text} onChange={handleOnChange} rows="10"></textarea>
                        </div>
                        <button className="btn btn-primary me-3" onClick={handleUpClick}>Convert to uppercase</button>
                        <button className="btn btn-primary me-3" onClick={handleLoClick}>Convert to lowercase</button>
                        <button className="btn btn-primary me-3" onClick={handleOnCopy}>Copy Text</button>
                        <button className="btn btn-primary me-3" onClick={handleExtraSpaces}>Remove Extra space</button>
                        <button className="btn btn-primary me-3" onClick={handleClearText}>Clear Text</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2>Your Text Summary</h2>
                <p>{text.length} characters and {text.split(" ").length} words.</p>
                <p>{0.008 * text.split(" ").length} Minutes read.</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    );
}
