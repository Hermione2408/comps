import { useState } from "react";
import Dropdown from "../components/Dropdown";

function Dropdownpage() {
  const [selection,setSelection]=useState(null);

  const handleSelect =(option)=>{
    setSelection(option)
  }
  const options=[
    {label:'Red',value:'red'},
    {label:'Green',value:'Green'},
    {label:'Blue',value:'Blue'},
  ]
  return (
  <div className="flex">
    <a href="/dashboard">Dashboard</a>
      <Dropdown  options={options} value={selection} onChange={handleSelect}/>

  </div>)

}

export default Dropdownpage;