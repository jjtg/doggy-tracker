import storage from '@/lib/storage';
import Dog from '@/models/Dog';

export default {
  namespaced: true,
  state: {
    dogs: [],
  },
  mutations: {
    setDogs(state, dogs) {
      state.dogs = dogs;
    },
  },
  actions: {
    async fetchDogs({ commit }) {
      const dogs = await JSON.parse(storage.get('dogs', '[]'))
        .map((d) => new Dog(d));
      commit('setDogs', dogs);
      return dogs;
    },
    saveDog({ commit, state }, dog) {
      const dogs = [...state.dogs.filter((it) => it.uuid !== dog.uuid), dog];
      commit('setDogs', dogs);
      storage.set('dogs', JSON.stringify(dogs));
      return dogs;
    },
    deleteDog({ commit, state }, dog) {
      const dogs = [...state.dogs.filter((it) => it.uuid !== dog.uuid)];
      commit('setDogs', dogs);
      storage.set('dogs', JSON.stringify(dogs));
      return dogs;
    },
  },
};
