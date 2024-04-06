import axios from "axios";

export async function fetchProjects() {
    try {
        const response = await axios.get("../../public/abilities.json")
        return response.data
    } catch (error) {
        console.error("Erro ao buscar o arquivo JSON:", error);
        return null;
    }
}