import React from 'react'
// របៀបទី ១៖ ទទួល props ជា Object រួចទាញយកតាមក្រោយ
const ProductCard = (props) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', margin: '10px', width: '200px' }}>
          <img src={props.image} alt="" />
          <h3>{props.name}</h3>
          <p style={{ color: 'green', fontWeight: 'bold' }}>តម្លៃ៖ {props.price} $</p>
          <p>ប្រភេទ៖ {props.category}</p>
        </div>
      );
}

export default ProductCard