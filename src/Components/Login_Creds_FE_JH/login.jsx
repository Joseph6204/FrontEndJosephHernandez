/* The Code for the login */
/* With the buttons included*/


import React from "react";
import loginImg from "../../../Cardinal.svg";

export class Login extends React.Component{

    constructor(props){
        super(props);
    }
    render() {
        return <div className="base-container">
            <div className= "header">Login </div>
            <div className="content">
                <div className= "image">
                < img src= {loginImg}/>
        
            </div>
            </div>
        

             <div ClassName= "form">
             <div ClassName= "form-group">
                 <label htmlFor= "username">Username</label>
                 <input type = "text" name= "username"placeholder= "username"/>

            </div>
            <div ClassName= "form-group">
                 <label htmlFor= "password">Password</label>
                 <input type = "password" name= "password"placeholder= "password"/>
            </div>
            <div classname= "footer">
                <button type="button"className="btn">Login</button>
        </div>
    </div>    
</div>
}
}