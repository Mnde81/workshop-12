import { useState } from "react";
import ColorButton from "./ColorButton";


function ButtonList() {    

    const [buttonColor1, setButtonColor1] = useState('yellow');
    const [buttonStatus1, setButtonStatus1] = useState(true);

    const [buttonColor2, setButtonColor2] = useState('blue');
    const [buttonStatus2, setButtonStatus2] = useState(true);

    const [buttonColor3, setButtonColor3] = useState('green');
    const [buttonStatus3, setButtonStatus3] = useState(true);

    const [buttonColor4, setButtonColor4] = useState('red');
    const [buttonStatus4, setButtonStatus4] = useState(true);

    const [bodyColor, setBodyColor] = useState("greenyellow");

    document.body.style.backgroundColor = bodyColor;
    

    function handleClickBtn1() {

        if (buttonStatus1) {        

        const randomColor = Math.random().toString(16).slice(2, 8);
        const randomBodyColor = '#' + randomColor;            
        document.body.style.backgroundColor = `${randomBodyColor}`;
        setBodyColor(`${randomBodyColor}`);

        const randomColorBtn = Math.random().toString(16).slice(2, 8);
        const randomButtonColor = '#' + randomColorBtn; 
        setButtonColor1(`${randomButtonColor}`);
        setButtonStatus1(false);
        setButtonStatus2(true);
        setButtonStatus3(true);
        setButtonStatus4(true);
        };
    }

    function handleClickBtn2() {

        if (buttonStatus2) {        

        const randomColor = Math.random().toString(16).slice(2, 8);
        const randomBodyColor = '#' + randomColor;            
        document.body.style.backgroundColor = `${randomBodyColor}`;
        setBodyColor(`${randomBodyColor}`);

        const randomColorBtn = Math.random().toString(16).slice(2, 8);
        const randomButtonColor = '#' + randomColorBtn; 
        setButtonColor2(`${randomButtonColor}`);
        setButtonStatus2(false);
        setButtonStatus1(true);
        setButtonStatus3(true);
        setButtonStatus4(true);
        };
    }

    function handleClickBtn3() {

        if (buttonStatus3) {        

        const randomColor = Math.random().toString(16).slice(2, 8);
        const randomBodyColor = '#' + randomColor;            
        document.body.style.backgroundColor = `${randomBodyColor}`;
        setBodyColor(`${randomBodyColor}`);

        const randomColorBtn = Math.random().toString(16).slice(2, 8);
        const randomButtonColor = '#' + randomColorBtn; 
        setButtonColor3(`${randomButtonColor}`);
        setButtonStatus3(false);
        setButtonStatus1(true);
        setButtonStatus2(true);
        setButtonStatus4(true);
        };
    }

    function handleClickBtn4() {

        if (buttonStatus4) {        

        const randomColor = Math.random().toString(16).slice(2, 8);
        const randomBodyColor = '#' + randomColor;            
        document.body.style.backgroundColor = `${randomBodyColor}`;
        setBodyColor(`${randomBodyColor}`);

        const randomColorBtn = Math.random().toString(16).slice(2, 8);
        const randomButtonColor = '#' + randomColorBtn; 
        setButtonColor4(`${randomButtonColor}`);
        setButtonStatus4(false);
        setButtonStatus1(true);
        setButtonStatus2(true);
        setButtonStatus3(true);
        };
    }


    return (
        <>        
        <p className="titleBtn">Random Color Generator</p>
        <div className="btnList">
            <ColorButton onClick={handleClickBtn1} text="Click me" color={buttonColor1}/>
            <ColorButton onClick={handleClickBtn2} text="And me" color={buttonColor2}/>
            <ColorButton onClick={handleClickBtn3} text="Then me" color={buttonColor3}/>
            <ColorButton onClick={handleClickBtn4} text="Finally me" color={buttonColor4}/>
        </div>
        </>
    )
}

export default ButtonList;