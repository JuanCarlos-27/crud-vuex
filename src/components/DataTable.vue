<template>
    <table class="table w-75 mt-4 table-dark shadow table-hover">
        <thead class="table-dark text-center">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Usuario</th>
            <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody class="text-center">
            <tr v-for="(person, index) in personas" :key="person.id">
                <th scope="row">{{person.id}}</th>
                <td>
                    <span v-if="formActualizar && idActualizar === index">
                       <input v-model="personaActualizar.name" type="text" class="form-control">
                    </span>
                    <span v-else>{{ person.name }}</span>
                </td>
                <td>
                    <span v-if="formActualizar && idActualizar === index">
                       <input v-model="personaActualizar.email" type="text" class="form-control">
                    </span>
                    <span v-else>{{person.email}}</span>
                </td>
                <td>
                    <span v-if="formActualizar && idActualizar === index">
                       <input v-model="personaActualizar.username" type="text" class="form-control">
                    </span>
                    <span v-else>{{person.username}}</span>
                </td>

                <td>
                    <span v-if="formActualizar && idActualizar === index">
                        <button @click="confirmarActualizacion(index)" class="btn btn-success">Aceptar</button>
                    </span>
                    <span v-else>
                        <button @click="verFormActualizar(index)" class="btn btn-warning me-2"><i class="bi bi-pencil-square"></i></button>
                        <button @click="deletePersona(person.id, $event)" class="btn btn-danger"><i class="bi bi-trash"></i></button>
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
  </template>
  
  <script>
import { mapState, mapActions, mapMutations } from 'vuex';

  export default {
    name: 'DataTable',
    created(){
        this.listaPersonas()
    },
    computed:{
        ...mapState(['personas', 'formActualizar','personaActualizar', 'idActualizar'])
    },
    methods:{
        ...mapActions(['listaPersonas']),
        ...mapMutations(['deletePersona', 'verFormActualizar','confirmarActualizacion'])
    },

  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    input {
        border: 2px solid #212529;
        box-shadow: inset 0px 1px 6px 0px #000;
        border: none;
        outline: none;
        text-align: center;
    }
    input:focus{
        border: none;
        outline: none;
        box-shadow: inset 0px 1px 6px 0px rgb(25, 128, 219);
    }
  </style>
  