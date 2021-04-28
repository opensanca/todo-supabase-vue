<template>
  <li>
    <input v-model="tarefa.titulo" v-on:change="salvarAlteracaoDeTitulo()">
    <button v-on:click="concluir()">X</button>
  </li>
</template>

<script>
export default {
  name: 'Tarefa',
  props: [ 'tarefa' ],
  methods: {
    salvarAlteracaoDeTitulo() {
      console.log(this.tarefa.titulo);
    },
    concluir() {
      this.$emit('concluir');
    }
  },
  components: {}
}
</script>
