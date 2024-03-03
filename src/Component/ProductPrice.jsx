import React from 'react'

const ProductPrice = () => {
    const style= {
        paragraph: {
            textAlign:"center",
            fontFamily:"Poiret One",
            color:"white",
        }
    }
    const price = 8000
  return (
    <div style={style.paragraph}>
      <h2>$ {price}</h2>
    </div>
  )
}

export default ProductPrice
