import { defineStore } from "pinia";
import { api } from "@/api/index.js"; // Убедитесь, что путь корректный
import { ref } from "vue";

export const useFilmStore = defineStore("film", () => {
    const films = ref([]);

    const fetchFilms = async () => {
        try {
            const response = await api.get("/films");
            films.value = response.data.films;
        } catch (error) {
            console.error("Ошибка при загрузке фильмов:", error);
        }
    };

    return {
        films,
        fetchFilms,
    };
});

