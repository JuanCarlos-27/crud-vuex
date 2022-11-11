import { createStore } from 'vuex'

export default createStore({
  state: {
    personas: [],
    persona: {
      id: '',
      name: '',
      email: '',
      username: ''
    },
    personaActualizar: {
      id: '',
      name: '',
      email: '',
      username: ''
    },
    formActualizar: false,
    idActualizar: -1,
    alertaRegistro: false
  },
  getters: {

  },
  mutations: {
    llenarPersonas(state, personaAction) {
      if (localStorage.getItem('users') !== null) {
        state.personas = JSON.parse(localStorage.getItem('users'))
      } else {
        state.personas = personaAction
        localStorage.setItem('users', JSON.stringify(state.personas))
      }
    },
    deletePersona(state, id, event) {
      const confirmation = confirm('¿Esta seguro/a de que desea eliminar?');
      if (confirmation) {
        state.personas = state.personas.filter(persona => {
          return persona.id !== id
        })
        localStorage.setItem('users', JSON.stringify(state.personas))
      } else {
        event.preventDefault();
      }
    },
    createPerson(state, event) {
      event.preventDefault();
      state.persona.id = (state.personas).at(-1).id + 1;
      state.personas.push({
        id: state.persona.id,
        name: state.persona.name,
        email: state.persona.email,
        username: state.persona.username,
      });
      localStorage.setItem('users', JSON.stringify(state.personas))

      state.persona.id = '';
      state.persona.name = '';
      state.persona.email = '';
      state.persona.username = '';
    },
    verFormActualizar(state, index) {
      state.idActualizar = index
      state.personaActualizar.id = state.personas[index].id;
      state.personaActualizar.name = state.personas[index].name;
      state.personaActualizar.email = state.personas[index].email;
      state.personaActualizar.username = state.personas[index].username;

      state.formActualizar = true
    },
    confirmarActualizacion(state, index) {
      state.formActualizar = false;
      state.personas[index].name = state.personaActualizar.name;
      state.personas[index].email = state.personaActualizar.email;
      state.personas[index].username = state.personaActualizar.username;
      localStorage.setItem('users', JSON.stringify(state.personas))
    }
  },
  actions: {
    listaPersonas: async function ({ commit }) {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      commit('llenarPersonas', data)
    },
  },
  modules: {
  },
})
