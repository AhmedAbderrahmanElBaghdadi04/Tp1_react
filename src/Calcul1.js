import React from 'react'

export default function Calcul1() {
    const somme=()=>{
        let s = ((Number(document.getElementById('num1').value))+(Number(document.getElementById('num2').value)));
        document.getElementById('smme').value=s;
    }
  return (
    <div>
      <br /><br />
      <h1>Calcul sans States</h1>
      <br />number 1 : <br />
      <input type="text" name="" id="num1" /><br /><br />Number 2 : <br />
      <input type="text" name="" id="num2" /><br /><br /><input type="button" value="Somme"  onClick={somme} /><br />
      <br />La somme est : <input type="text" name="" id="smme" />
      <br /><br /><h1>Calcul avec States</h1><br /><br />
      
    </div>
  )
}
