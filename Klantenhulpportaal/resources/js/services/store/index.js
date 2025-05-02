import {ref, computed} from 'vue';
import {postRequest, updateRequest, deleteRequest, getRequest} from '../http';

export const storeModuleFactory = moduleName => {
    const state = ref({});

    const getters = {
        // Met "all" kunnen we de gegevens als computed value uit de state halen,
        // wat voor reactiviteit tussen componenten en state zorgt.
        all: computed(() => Object.values(state.value)),

        // Met "byId" kunnen we een specifiek item als computed value uit de state halen,
        // wat voor reactiviteit tussen componenten en state zorgt.
        byId: id => computed(() => state.value[id]),
    };

    const setters = {
        // met setAll() kunnen we data, wat uit de backEnd komt, in de state zetten op basis van id
        setAll: items => {
            items.forEach(item => {
                state.value[item.id] = item;
            });
        },

        setById: item => {
            state.value[item.id] = Object.freeze(item);
        },
        /**
         * Delete one specific item in the storage by id
         */
        deleteById: id => {
            delete state.value[id];
        },
    };

    const actions = {
        getAll: async () => {
            // Simuleer een oproep naar een API, mbv de Axios facade
            const {data} = await getRequest(moduleName);
            console.log(data)
            if (!data) return;
            setters.setAll(data);
        },

        create: async item => {
            const {data} = await postRequest(moduleName, item).catch();
            console.log(data)
            if (!data) return;
            setters.setAll(data);
        },

        deleteItemById: async id => {
            await deleteRequest(`${moduleName}/${id}`);
            if (!id) return;
            setters.deleteById(id);
        },

        update: async (id, item) => {
            const {data} = await updateRequest(`${moduleName}/${id}`, item);
            if (!data) return;
            setters.setById(item);
        },
    };

    return {
        getters,
        setters,
        actions,
    };
};
