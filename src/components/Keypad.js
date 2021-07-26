// Code Keypad Component Here
import React from "react";

function Keypad(){
    function handleChange(event) {
              console.log('Entering password...');
             }
    return (
        <div>
         <input
           type="password"
           name="Enter Password"
           onChange={handleChange}
           placeholder="Enter Password..."
         />
        </div>
    );
}





export default Keypad;
