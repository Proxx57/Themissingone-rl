import React, {useState} from "react";

export default function Form(){

  const[input,setInput] = useState({
    nom: "",
    prenom: "",
    email: ""

  })

  function handleChange(event){
    const {name, value} = event.target
    setInput(prevInput =>{
      return {
        ...prevInput,
        [name]: value
      }
    })
  }

  function handleClick(event){
    event.preventDefault();
    console.log(input)
  }
  return(
    <>
    <form>
      <h1>ENTRER VOS INFORMATIONS</h1>
      <input className="input" onChange={handleChange} name="nom"    value={input.nom}    type="text" autoComplete="on" placeholder="Entrer votre nom"></input>
      <input className="input" onChange={handleChange} name="prenom" value={input.prenom} type="text" autoComplete="on" placeholder="Entrer votre prénom"></input>
      <input className="input" onChange={handleChange} name="email"  value={input.email} type="email" autoComplete="on" placeholder="Entrer votre email"></input>
      <button className="submit" onClick={handleClick} type="submit" >M'inscrire</button>
    </form>
    </>
  );
}