<template>
  <li>
    <input v-model="tarefa.titulo" v-on:change="salvarAlteracaoDeTitulo()">
    <button v-on:click="concluir()">✔</button>
  </li>
</template>

<script>
import supabase from '../supabase-client';

export default {
  name: 'Tarefa',
  props: [ 'tarefa' ],
  methods: {
    async salvarAlteracaoDeTitulo() {
      // console.log(this.tarefa.titulo);
      // console.log(isLoggedIn());
      // (async () => {
      //   const res = await supabase.from('tarefas').select();
      //   console.log(res);
      // })();
      try {
        const tarefa = this.tarefa;
        const res = await supabase.from('tarefas')
          .update({ titulo: tarefa.titulo })
          .eq("id", tarefa.id);
        if (res.error) {
          alert(res.error.message);
        }
      } catch (err) {
        console.error(err);
        alert('Não foi possível concluir a tarefa!');
      }
    },
    concluir() {
      this.$emit('concluir');
    }
  },
  components: {}
}
</script>
