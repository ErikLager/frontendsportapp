export async function Fetchdata(url){
    let result = await fetch(url);

    if(result.ok){
        const data = await result.json();
        return data;
    }
    throw new Error ("Error");
}
