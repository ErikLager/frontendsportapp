import React from "react";
import "./matcheditor.css"
/**
 * This return the fields that contains the teams and the points
 */
export default function Matcheditor(props){
    return(
        <div>
            <h1>Add a match</h1>
            home_id: 
            <select id="home_id">
                <option value="1">
                    Lakers
                </option>
                <option value="2">
                    Lekssand
                </option>
                <option value="3">
                    HV71
                </option>
                <option value="4">
                    Oskarshamn
                </option>
            </select><br/>
            away_id: 
            <select id="away_id">
                <option value="1">
                    Lakers
                </option>
                <option value="2">
                    Lekssand
                </option>
                <option value="3">
                    HV71
                </option>
                <option value="4">
                    Oskarshamn
                </option>
            </select><br/>
            home_score: 
            <input type="text" id="home_score"></input><br/>
            away_score: 
            <input type="text" id="away_score"></input><br/>
            Type in a id to delete a match <br/>
            <input type="text" id="matchid"></input>
        </div>

        
        
    )
}