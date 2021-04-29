<template>
  <div class="home">
    <h1>Tarefas</h1>
    <input v-model="titulo">
    <button v-on:click="adicionarTarefa()">
      Nova tarefa
    </button>
    <ul>
      <li v-for="tarefa in tarefas" :key="tarefa.id">
        {{tarefa.titulo}}
        <button v-on:click="concluirTarefa(tarefa)">✔</button>
      </li>
    </ul>
  </div>
</template>

<script>
import supabase from '../supabase-client';

export default {
  name: 'Home',
  data: () => {
    return {
      titulo: '',
      tarefas: []
    };
  },
  methods: {
    async adicionarTarefa() {
      // this.tarefas.push({
      //   id: 4,
      //   titulo: this.titulo
      // });
      // this.titulo = '';
      try {

        const res = await supabase.from('tarefas')
          .insert({
            user_id: supabase.auth.user().id,
            titulo: this.titulo
          });

        if (res.error) {
          alert(res.error.message);
        } else {
          // DEU CERTO!
          this.titulo = '';
          this.carregarTarefas();
          // this.tarefas.push(res.data[0]);
        }

      } catch (err) {
        console.error(err);
        alert('Não foi possível cadastrar a tarefa!');
      }
    },
    async concluirTarefa(tarefa) {
      // const idx = this.tarefas.indexOf(tarefa);
      // this.tarefas.splice(idx, 1);
      // this.tarefas = this.tarefas.filter(x => x !== tarefa);
      try {

        const res = await supabase.from('tarefas')
          .update({
            concluida: true
          })
          .eq('id', tarefa.id);

        if (res.error) {
          alert(res.error.message);
        } else {
          // DEU CERTO!
          this.carregarTarefas();
          // this.tarefas = this.tarefas.filter(x => x !== tarefa);
        }

      } catch (err) {
        console.error(err);
        alert('Não foi possível concluir a tarefa!');
      }
    },
    async carregarTarefas() {
      try {

        const res = await supabase.from('tarefas')
          .select('id, titulo')
          .filter('concluida', 'eq', false);

        if (res.error) {
          alert(res.error.message);
        } else {
          // DEU CERTO!
          this.tarefas = res.data;
        }

      } catch (err) {
        console.error(err);
        alert('Não foi possível carregar suas tarefas!');
      }
    }
  },
  mounted() {
    this.carregarTarefas();
  },
  components: {}
}
</script>
