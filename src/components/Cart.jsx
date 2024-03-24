import React from 'react'
// import Product from './Product'
import { Link } from 'react-router-dom'

const Cart = ({cart,setCart}) => {
  return (
    <>
    <div className="container my-5" style={{width: "54%" }}>
      {
        cart.length==0 ?(
          <>
          <div className='text-centre'>
            <h1>Your Cart is Empty</h1>
            <Link to={"/"} className='btn-btn-warning'>Continue Shopping...</Link>
          </div>
          </>

        ):
      cart.map((Product)=>{
        return(
          <>
          <div class="card mb-3 my-5" style={{width: '700px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={Product.imgSrc} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body text-centre">
        <h5 className="card-title">{Product.title}</h5>
        <p className="card-text">{Product.description}</p>
        <button className='btn-btn-primary mx-3'>
          {Product.price} ₹
          </button>
                        <button 
                      
                        className="btn btn-warning"
                        >Buy now</button>

      </div>
    </div>
  </div>
</div>
          </>
        )
      })}
    
    </div>

    {
      cart.length!=0 && (
        <div className="container text-centre my-5" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems:'centre'
        }}>
          <button className='btn btn-warning mx-5'>CheckOut</button>
          <button onClick={()=>setCart("")}className='btn btn-danger'>Clear Cart</button>
        </div>
      )
    }
    
    </>
  )
}

export default Cart
