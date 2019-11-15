import React from "react";

async function FetchProtectedData(authString){
    const res = await fetch("/protected",{
        method: "GET",
        headers: {
            'Authorization':authString//Kan vara felstavat
        }
    });
    const data = res.text();
    return data;
}

export default function BasicAuthLabb(props){
    const [text, setText] = React.useState("Hello bassic auth");
    const [authString, setAuthstring] = React.useState(undefined);

    async function onClick(){
        const newText = await FetchProtectedData(authString);
        setText(newText);
    }

    function onLogin(){
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        setAuthstring (`Basic ${btoa(username + ":" + password)}`);
        console.log(username+ password + authString);
    }

    return <div>
        <p><label htmlFor="username">username</label>
        <input type="text" id="username"></input></p>
        <p><label htmlFor="password">password</label>
        <input type="password" id="password"></input></p>
        <p><button onClick={onLogin}>Log in</button></p>
            <button onClick={onClick}>Accsess protect data</button>
            
            <p>
                {text}
            </p>
                
            </div>
}