<template>
    <form v-on:submit="createPerson($event)" class="row w-50 card p-4 mt-3 shadow">
        <h1 class="col-md-12 text-center">Registro de personas
            <img src="../assets/logo.png" alt="vuelogo">
        </h1>
        <div class="col-md-12">
            <label for="nombre" class="form-label fw-bold">Nombre:</label>
            <input type="text" v-model="persona.name" class="form-control" id="Nombre" required>
        </div>
        <div class="col-md-12">
            <label for="email" class="form-label fw-bold">Correo:</label>
            <input type="text" v-model="persona.email" class="form-control" id="email" required>
        </div>
        <div class="col-md-12">
            <label for="username" class="form-label fw-bold">Usuario:</label>
            <input type="text" v-model="persona.username" class="form-control" id="username" required>
        </div>
        <div class="col-md-12 text-center mt-4">
            <button type="submit" class="btn btn-success fw-bold">Registrar</button>
        </div>
        <div v-if="alertaRegistro" class="alert alert-success alert-dismissible fade show text-center mt-3 p-3" role="alert">
            <strong>¡Agregado correctamente!</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </form>

  </template>
  <script>
    import { mapState, mapMutations } from 'vuex';
  export default {

    name: 'FormRegister',
    computed:{
        ...mapState(['persona','alertaRegistro'])
    },
    methods:{
        ...mapMutations(['createPerson'])
    },
  }
  </script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    img{
        width: 50px;
        height: 40px;
    }
  </style>
  