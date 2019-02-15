export const state = () => ({
  all: []
});

export const mutations = {
  async setItems(state, items) {
    state.all = items;
  },
  addItem(state, item) {
    state.all[item.id] = item.item;
  }
};

export const actions = {
  async prepare({commit}) {
    const {data} = await this.$axios.get('webinars2.json');
    commit('setItems', data);
  },
  addItem(vuexContext, item) {
    return this.$axios.$post('webinars2.json', item)
      .then(data => vuexContext.commit("addItem", {item, id: data.name}))
      .catch(error => console.error(error));
  },
};
