import { type } from "os";

/**
 * This reads the back end and returns the data
 */
export async function Fetchdata(url){
    let result = await fetch(url);

    if(result.ok){
        const data = await result.json();
        return data;
    }
    throw new Error ("Error");
}

/**
 * This write the data to the database
 */

export async function postMatch(home_id, away_id, home_points, away_points){
    let backenddata = {id:0, home_id, away_id, home_points, away_points}
    fetch ("/sportApp/api/match", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(backenddata)
    });
    console.log(backenddata);

}
/**
 * This delete the match 
 * with the id the user sends
 */
export async function deleteMatch(matchid){
    fetch("/sportApp/api/match?id="+matchid,{
        method: "DELETE",
    });
}