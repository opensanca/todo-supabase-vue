<template>
  <div class="home">
    <h1>Tarefas</h1>
    <input v-model="titulo">
    <button v-on:click="adicionarTarefa()">Nova tarefa</button>
    <ul>
      <Tarefa
        v-for="tarefa in tarefas"
        :key="tarefa.id"
        v-bind:tarefa="tarefa"
        v-on:concluir="concluirTarefa(tarefa)"
      />
    </ul>
  </div>
</template>

<script>
import Tarefa from '../components/Tarefa';
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
      // console.log(this.tarefas);
      // const proxima = this.tarefas.length + 1;
      // this.tarefas.push({
      //   id: proxima,
      //   titulo: this.titulo
      // });
      // this.titulo = '';
      try {
        const res = await supabase.from('tarefas').insert({
          user_id: supabase.auth.user().id,
          titulo: this.titulo
        });
        if (res.error) {
          alert(res.error.message);
        } else {
          this.titulo = '';
          this.carregarTarefas();
        }
      } catch (err) {
        console.error(err);
        alert('Não foi possível cadastrar a tarefa!');
      }
    },
    async concluirTarefa(tarefa) {
      // console.log(this.tarefas);
      // const idx = this.tarefas.indexOf(tarefa);
      // this.tarefas.splice(idx, 1);
      // this.tarefas = this.tarefas.filter(x => x !== tarefa);
      try {
        const res = await supabase.from('tarefas')
          .update({ concluida: true })
          .eq("id", tarefa.id);
        if (res.error) {
          alert(res.error.message);
        } else {
          this.carregarTarefas();
        }
      } catch (err) {
        console.error(err);
        alert('Não foi possível concluir a tarefa!');
      }
    },
    async carregarTarefas() {
      this.tarefas = [];
      try {
        const res = await supabase.from('tarefas')
          .select("id, titulo")
          .filter("concluida", "eq", false);
        if (res.error) {
          alert(res.error.message);
        } else {
          this.tarefas = res.data;
        }
      } catch (err) {
        console.error(err);
        alert('Não foi possível carregar as tarefas!');
      }
    }
  },
  mounted() {
    this.carregarTarefas();
  },
  components: {
    Tarefa
  }
}
</script>
