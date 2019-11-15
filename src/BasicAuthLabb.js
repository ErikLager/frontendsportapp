import React from "react";

async function FetchProtectedData(username, password){
    const authString = `Basic ${btoa(username + ":"+password)}`;
    console.log(authString);
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

    async function onClick(){
        const newText = await FetchProtectedData("admin", "abc123");
        setText(newText);
    }

    return <div>
            <button onClick={onClick}>Accsess protect data</button>
            
            <p>
                {text}
            </p>
                
            </div>
}