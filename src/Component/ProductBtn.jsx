import React from 'react'

const ProductBtn = () => {
    const style = {
        btn: {
            width: '400px',
            height: '100px',
            alignItems: 'center',
            cursor: 'pointer',
            display:"flex",
            justifyContent: "center",
            margin: "0 auto",
        },
        button:{
            width: '300px',
            height: '50px',
            alignItems: 'center',
            cursor: 'pointer',
            borderRadius:'18px',
            fontSize:"1rem",
            backgroundColor:"green",
            border:"none",
            color:"whitesmoke"
        }
    }
  return (
    <div style={style.btn}>
      <button style={style.button}>Add to Cart</button>
    </div>
  )
}

export default ProductBtn
