const api_key = "live_SlFEe9IWVQAp6IfJYFqZgHppglaF6bTCWrSAyJ1wKbYAvKsmxZ3xz1uBC0sD00g6";
const url = "https://api.thecatapi.com/v1/"

export function fetchBreeds(){
    return fetch(`${url}breeds?api_key=${api_key}`)
    .then(response => {
        if(!response.ok){
            throw new Error(response.status);
        }
        return response.json();
    })
}

export function fetchCatByBreed(breedId){
    return fetch(`${url}images/search?breed_ids=${breedId}&api_key=${api_key}`)
    .then(response => {
        if(!response.ok){
            throw new Error(response.status);
        }
        return response.json();
    })
}