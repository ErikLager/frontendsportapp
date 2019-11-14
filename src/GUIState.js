import React from "react";
import "./GUIState.css";
import { read } from "fs";

function NavBar (props) {
    function onLinkClicked(id){
        // console.log(`Link ${id} was Clicked`);
        props.onNavigate(id);
    }
    return(
            <nav>
                <span onClick={() => onLinkClicked(1)}>sida 1</span>
                <span onClick={() => onLinkClicked(2)}>sida 2</span>
                <span onClick={() => onLinkClicked(3)}>sida 3</span>
            </nav>

    )
}

function Lista (props){
    return (
        <ul>
            <li>Hello</li>
            <li>Yo</li>
            <li>BAZINGA</li>
        </ul>
    )
}

export default function GUTState(props){
    const [currentPage, setCurrentPage] = React.useState(1);
    
    function navigate(id){
        console.log(`Navigate: ${id}`)
        setCurrentPage(id);
    }
    let currentContent = null;
    if(currentPage==1){
        currentContent = `Wecome Page: ${currentPage}`
    }
    else if (currentPage == 2){
        currentContent = <button>A Button on page 2</button>
    }
    else if (currentPage == 3){
        currentContent = <Lista/>
    }
    else{
        currentContent=`Wha... HOW?!`
    }
    return(
        <div>
            <NavBar onNavigate={navigate}/>
            <div className="guistate-content">
                {currentContent}
            </div>
        </div>
    )    
}