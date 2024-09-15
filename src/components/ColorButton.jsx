function ColorButton({text, onClick, color}) {

    return (
        <button onClick={onClick} style={{background: color}}>{text}</button>
    )
}

export default ColorButton;