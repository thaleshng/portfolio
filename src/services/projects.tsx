import axios from "axios";

export async function fetchProjects() {
    try {
        const response = await axios.get("portfolio/projects.json")
        return response.data
    } catch (error) {
        console.error("Erro ao buscar o arquivo JSON:", error);
        return null;
    }
}