export async function fetchCharacters() {
    try {
        const response = await fetch('https://potterapi-fedeperin.vercel.app/fr/characters');
        if (!response.ok) {
            throw new Error('Failed to fetch characters');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
    }
}

export async function searchCharacters(search) {
    try {
        // Récupérer les personnages en fonction du mot-clé de recherche
        const response = await fetch(`https://potterapi-fedeperin.vercel.app/fr/characters?search=${search}`);
        
        if (!response.ok) {
            throw new Error('Failed to search characters');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error searching characters:', error);
        throw error;
    }
}


export async function fetchCharacterById(index) {
    try {
        const response = await fetch(`https://potterapi-fedeperin.vercel.app/fr/characters/?index=${index}`);
        if (!response.ok) {
            throw new Error('Failed to fetch character details');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching character details:', error);
        throw error;
    }
}