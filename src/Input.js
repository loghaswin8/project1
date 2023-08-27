import colorNames from 'colornames';
import React from 'react'


const Input = ({getColor, setColor, setHexValue, isDarkText, setDarkText}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <input 
            autoFocus
            type="text" 
            id='color'
            placeholder='Type Color'
            value={getColor}
            onChange={
                (e) => {
                    setColor(e.target.value);
                    setHexValue(colorNames(e.target.value))
                }
                
            }      
        />
        <br />
        <button
            type='buton'
            onClick={() => setDarkText(!isDarkText)}
        >
            Toggle Text Color
        </button>

    </form>
  )
}

export default Input