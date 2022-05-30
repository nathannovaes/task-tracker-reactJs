const Button = ({color, text, btnEvent}) => {
    return (
        <button onClick={btnEvent} style={{backgroundColor: color}} className='btn'>   
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'blue'
}

export default Button