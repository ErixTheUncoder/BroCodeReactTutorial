import React, {useState} from 'react';

function OnChangeHook(){
  const [name,setName] = useState("Guest");
  const [quantity,setQuantity] = useState();
  const [comment,setComment] = useState("");
  const [payment,setPayment] = useState("");

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
      </select>
      <p>Payment Method: {payment}</p>
    </div>
  )
}

export default OnChangeHook