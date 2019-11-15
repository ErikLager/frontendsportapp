export async function fetchData(){
    let result = await fetch(/*url*/);

    if(result.ok){
        const data = await result.json();
        return data;
    }
    throw new Error ("HELVÄTTTE");
}