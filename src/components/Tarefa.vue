<template>
  <li>
    <input v-model="tarefa.titulo" v-on:change="salvarAlteracaoDeTitulo()">
    <button v-on:click="concluir()">X</button>
  </li>
</template>

<script>
import supabase, { isLoggedIn } from '../supabase-client';

export default {
  name: 'Tarefa',
  props: [ 'tarefa' ],
  methods: {
    salvarAlteracaoDeTitulo() {
      console.log(this.tarefa.titulo);
      console.log(isLoggedIn());
      (async () => {
        const res = await supabase.from('tarefas').select();
        console.log(res);
      })();
    },
    concluir() {
      this.$emit('concluir');
    }
  },
  components: {}
}
</script>
