// onChange = event handler that are mainly used with <input>, <textarea>, <select>, <radio>
//            Triggers everytime when value of input changes
import React, {useState} from 'react';

function OnChangeHook(){
  const [name,setName] = useState("Guest");
  const [quantity,setQuantity] = useState();
  const [comment,setComment] = useState("");
  const [payment,setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChange(e){
    setName(e.target.value);
  }

  function handleQuantityChange(e){
    setQuantity(e.target.value);
  }

  function handleCommentChange(e){
    setComment(e.target.value);
  }

  function handlePaymentChange(e){
    setPayment(e.target.value);
  }

  function handleShipping(e){
    setShipping(e.target.value);
  }

  return(
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input value={quantity} onChange={handleQuantityChange} type="number"/>
      <p>Quantity: {quantity}</p>

      <textarea value={comment} onChange={handleCommentChange} placeholder='Leave your Remark here' />
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange} >
          <option value="">Select an payment option</option>
          <option value="FPX Transfer" >FPX Transfer</option>
          <option value="Visa">Visa</option>
          <option value="TouchNGo">Touch&Go</option>
      </select>
      <p>Payment Method: {payment}</p>

      <label>
        <input type='radio' value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShipping} />
        Pickup
      </label>
      <br/>
      <label>
       <input type='radio' value="Delivery" checked={shipping === "Delivery"} onChange={handleShipping} />
       Delivery 
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  )
}

export default OnChangeHook