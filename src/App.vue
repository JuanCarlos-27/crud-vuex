<template>
    <div class="container d-flex justify-content-center flex-wrap">
      <FormRegister></FormRegister>
      <DataTable></DataTable>
    </div>
</template>

<script>
import FormRegister from './components/FormRegister.vue'
import DataTable from './components/DataTable.vue'

export default {
  name: 'App',
  components: {
    FormRegister,
    DataTable,
  }
}
</script>

<style>
  @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");
  body{
        background-image: linear-gradient(to left,#1198ff, #097784);
        height: 100vh;
    }
</style>
