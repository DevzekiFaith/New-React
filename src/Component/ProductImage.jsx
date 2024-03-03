import React from 'react'


function ProductImage() {
    const styles = {
        image: {
            width: '400px',
            height: '400px',
            objectFit: 'cover',
            backgroundColor:"rgba(255,255,255,.1)"
        },
        picture: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
    }
  return (
    <div style={styles.image}>
        <img style={styles.picture} src='/public/Images/br1.jpg' placeholder="blur" alt="burgerImage"/>
    </div>
  )
}

export default ProductImage