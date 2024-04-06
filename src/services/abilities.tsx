import axios from "axios";

export async function fetchAbilities() {
    try {
        const response = await axios.get("https://raw.githubusercontent.com/thaleshng/portfolio-api/main/abilities.json")
        return response.data
    } catch (error) {
        console.error("Erro ao buscar o arquivo JSON:", error);
        return null;
    }
}