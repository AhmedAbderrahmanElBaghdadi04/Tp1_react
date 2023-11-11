import React, { useState } from 'react'

export default function Tdl() {
const [todol,setTodol] = useState([])

  return (
    <div>
      <h1>Add To List</h1>
      <br />
         <input type="text" name=""  />    <input type="button" value="Add" />
      <br /><br /><input type="text" readOnly/>
    
    </div>
  )
}
