async function getResourses() {
    try{
        const responese = await fetch("http://localhost:3000/offers")
        return await responese.json()
    }catch{
        console.log("error");
    }finally{
        console.log("finally");
    }
}
export default getResourses