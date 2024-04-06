import axios from "axios";
import pathAbilities from "../data/abilities.json"

export async function fetchAbilities() {
    try {
        const response = await axios.get("../data/abilities.json")
        return response.data
    } catch (error) {
        console.error("Erro ao buscar o arquivo JSON:", error);
        return null;
    }
}