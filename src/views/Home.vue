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
export default {
  name: 'Home',
  data: () => {
    return {
      titulo: '',
      tarefas: [
        { id: 1, titulo: 'Tarefa 1' },
        { id: 2, titulo: 'Tarefa 2' },
        { id: 3, titulo: 'Tarefa 3' }
      ]
    };
  },
  methods: {
    adicionarTarefa() {
      this.tarefas.push({
        id: 4,
        titulo: this.titulo
      });
      this.titulo = '';
    },
    concluirTarefa(tarefa) {
      // const idx = this.tarefas.indexOf(tarefa);
      // this.tarefas.splice(idx, 1);
      this.tarefas = this.tarefas.filter(x => x !== tarefa);
    }
  },
  components: {}
}
</script>
