import { type } from "os";

export async function Fetchdata(url){
    let result = await fetch(url);

    if(result.ok){
        const data = await result.json();
        return data;
    }
    throw new Error ("Error");
}

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
export async function deleteMatch(matchid){
    fetch("/sportApp/api/match?id="+matchid,{
        method: "DELETE",
    });
}