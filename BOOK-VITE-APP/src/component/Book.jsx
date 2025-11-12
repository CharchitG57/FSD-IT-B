import React from 'react'
import './Book.css';
const Book = () => {
  return (
    <div class='card'>
      <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQUaPex6lmU4TdUanXAfC3ez5j3yqv4yZ-GXAFU_eqA0ytE3-kwsoLGZuNgOGYA4kAKpE2Yqk8_623U-NoPDzvZcT4ZNFV5-Hv-pVc99yZRFR3lqkKP2Ipu9A" width={200} height={200} alt='image'/>
       <h3>Title: Physics</h3>
       <p>price: $459</p>
      <button>Add to Cart</button>
    </div>
  )
}

export default Book
