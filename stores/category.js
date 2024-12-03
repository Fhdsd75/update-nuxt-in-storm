import {defineStore} from 'pinia';
import {api} from '../api/index.js';
export const useCategory = defineStore('category',()=>{
    const categories = ref([]);
    const fetchCategories = async () => {
        const response = await api.get('/categories');
        categories.value = response.data.categories;
    }
    fetchCategories();
    return {
        categories,
    }
});