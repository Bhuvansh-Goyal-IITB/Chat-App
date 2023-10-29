import { useState } from "react"

function Input() {
    const [value, setValue] = useState<string>("");
  
    return (
        <>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={value} onChange={e => {setValue(e.target.value)}}/>
        </>
    )
}

export default Input