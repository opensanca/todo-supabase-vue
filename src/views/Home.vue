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

export default {
  name: 'Home',
  data: () => {
    return {
      titulo: '',
      tarefas: [
        { id: 1, titulo: 'Tarefa 1' },
        { id: 2, titulo: 'Tarefa 2' },
        { id: 3, titulo: 'Tarefa 3' },
        { id: 4, titulo: 'Tarefa 4' },
        { id: 5, titulo: 'Tarefa 5' }
      ]
    };
  },
  methods: {
    adicionarTarefa() {
      console.log(this.tarefas);
      const proxima = this.tarefas.length + 1;
      this.tarefas.push({
        id: proxima,
        titulo: this.titulo
      });
      this.titulo = '';
    },
    concluirTarefa(tarefa) {
      // console.log(this.tarefas);
      // const idx = this.tarefas.indexOf(tarefa);
      // this.tarefas.splice(idx, 1);
      this.tarefas = this.tarefas.filter(x => x !== tarefa);
    },
    salvarAlteracaoDeTitulo(tarefa) {
      console.log(tarefa);
      console.log(tarefa.titulo);
    }
  },
  components: {
    Tarefa
  }
}
</script>
