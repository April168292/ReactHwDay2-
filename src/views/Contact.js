import React, {useState, useEffect} from 'react'

const Contact = () => {

  const test = () => {console.log('i am running'); return 1}
  const [age, SetAge] = useState()
  const [name, SetName] = useState('April')
 
  useEffect(()=>{
    console.log('i have mounted')}
    , [])


  return (
    <div>
      {console.log('i have rendered')}
      <h1>{name}</h1>
      <h1>{age}</h1>
      <button onClick={()=>SetAge(age+1)}>+</button>
      <button onClick={()=>SetName(name+"ha")}>+</button>

    </div>
  )
};
export default Contact;
