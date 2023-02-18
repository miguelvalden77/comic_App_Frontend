import service from "./config.services";


const getAllCharacters = async ()=>{
    // return service.get("/character/all")
    // http://localhost:5005
    // https://comic-app-backend.onrender.com
    const response = await fetch("http://localhost:5005/api/character/all", {cache: "force-cache"})
    const data = await response.json()
    return data
}

const getACharacter = (charID: string)=>{
    return service.get(`/character/${charID}/details`)
}

export {
    getAllCharacters,
    getACharacter
}
