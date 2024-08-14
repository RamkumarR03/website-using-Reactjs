import React from 'react';

function Form(){
    return(
        <div class="form">
            <label>Name:</label>
            <input type="text" id="name" placeholder="Fullname"></input><br></br><br></br>
            <label>Email:</label>
            <input type="email" id="mail" placeholder="Email Address"></input><br></br><br></br>
            <label>Password:</label>
            <input type="password" id="password" placeholder="**********"></input><br></br><br></br>
            <button>Submit</button>
            <button>Cancel</button>

        </div>
    )
}
export default Form;