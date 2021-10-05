


import React from "react";
import loginImg from "../../../Cardinal.svg";

export class Register extends React.Component{

    constructor(props){
        super(props);
    }
    render() {
        return <div className="base-container">
            <div className= "header">Register</div>
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

            <div ClassName= "form-group">
                 <label htmlFor= "email">Password</label>
                 <input type = "email" name= "email"placeholder= "email"/>
            </div>
            <div classname= "footer">
                <button type="button"className="btn">Register</button>
        </div>
    </div>    
</div>
}
}