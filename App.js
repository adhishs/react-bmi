
import { useState } from 'react';
import './App.css';

function App() {
    

  const[height, setHeight] =useState("")
  const[weight, setweight] =useState("")
  const[bmi, setBmi] =useState(null)
  const[bmistatus, setBmiStatus] =useState("")
  const[errorMessage, setErrorMessage] =useState("")

 const calculateBmi=()=>{
  
  const isValidHeight =/^\d+$/.test(height)
  const isValidweight =/^\d+$/.test(weight)

  if(isValidHeight && isValidweight){
    const heightInMeters = height / 100
    const bmivalue = weight / (heightInMeters * heightInMeters)
    setBmi(bmivalue.toFixed(2))
    if(bmivalue<18.5){
      setBmiStatus("Underweight")
    }else if (bmivalue>=18.5 && bmivalue<24.9){
      setBmiStatus("Normal Weight")
    }else if (bmivalue>=25 && bmivalue<29.9){
      setBmiStatus("Overweight")
    }else{
      setBmiStatus("obese")
    }setErrorMessage("")
  }else{
      setBmi(null)
      setBmiStatus("")
      setErrorMessage("Please enter valid numeric values for height and weight.")
    }
  }
 
  function ClearAll(){
    setHeight("")
    setweight("")
    setBmi(null)
    setBmiStatus("")
  }


  return (
<>
<div className='bmi-calculator'>

  <div className='box'>
    
  </div>
  <div className='data'>

    <h1> Responsive BMI Calculator</h1>
    
     {errorMessage  && <p className='error'>{errorMessage} </p> }
    



    <div className='input-container'>
      <label htmlFor='height'>Height(cm):</label>
      <input type="text" id="height" onChange={(e)=>setHeight(e.target.value)}  value={height} />
    </div>

    <div className='input-container'>
      <label htmlFor='weight'>Weight(km):</label>
      <input type="text" id="weight" onChange={(e)=>setweight(e.target.value)}    value={weight} />
    </div>
    <button onClick={calculateBmi}  >Calculate BMI</button>
    <button onClick={ClearAll}>Clear</button>

    {bmi!== null && (
      <div className='result'>
      <p>Your BMI is :{bmi}</p>
      <p>Status: {bmistatus}</p>
    </div>
    ) } 
  


  </div>
</div>

</>
  );
}

export default App;
