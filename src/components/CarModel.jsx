import React,{useState} from 'react'

function CarModel(){
  const [car,setCar] = useState({year:2024,
                                 make:"Ford",
                                 model: "Mustang"});

  function handleYearChange(e){
    setCar({...car,year: e.target.value});
  }
  

  return(
    <div>
      <p>Your favourite car is: {car.year} {car.make} {car.model}</p>
    </div>
  )

} 