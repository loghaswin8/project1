import React from 'react'

const Square = ({getColor,  hexValue, isDarkText}) => {
  const color = {getColor}
  return (
    <section className='square'
      style={{
        backgroundColor: getColor,
        color: isDarkText ? "#000" : "#FFF"
      }}
    >
        <p>{getColor? getColor : "Empty Value" }</p>
        <p>{hexValue ? hexValue : null}</p>

    </section>
  )
}

Square.defaultProps = {
    getColor: "Empty color value"
}

export default Square