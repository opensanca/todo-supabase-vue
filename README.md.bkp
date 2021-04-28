# Workshop Vue + Supabase

## Visão geral

* O que vamos desenvolver?

  Uma ferramenta de TO-DO com autenticação, permitindo listar tarefas, adicionar nova tarefa, alterar o texto de uma tarefa existente e concluir tarefas. O frontend será desenvolvido usando Vue2. O backend (tanto autenticação quanto armazenamento da lista de tarefas) será feito usando Supabase.

  *Inserir imagem de mockup da lista de tarefas*

* Criação de conta no Supabase e configurações necessárias para desenvolvimento local:

  - Acesse https://supabase.io/;
  - Vá em Sign in e conecte com sua conta no GitHub;
  - Acesse a opção para criar um novo projeto (pode ser na organização default);
  - Use o nome "todo" e coloque uma senha;
  - Selecione a região SP (isso não é obrigatório);
  - Agora é só aguardar o Supabase terminar de preparar sua conta.

* Criando o projeto usando Vue CLI (com sistema de rotas básico com duas páginas, a principal e uma página de "Sobre"):

  - Por quê não Vue 3? Ainda estamos em fase de transição. vuejs.org oferece Vue 2 por padrão, o que provavelmente vai mudar em breve. https://www.npmjs.com/package/vue compare o número de downloads;

  - Garanta que possui o npm disponível: `npm`;
  - Instale o Vue CLI: `npm install -g @vue/cli`;
  - Crie a base do projeto: `vue create todo1`;
  - Abra a pasta no editor de sua escolha (caso não tenha preferência use o VS Code);
  - Navegue pelos arquivos que foram criados (principalmente o main.js);
  - Abra o arquivo `App.vue` e analise o conteúdo;
  - Rode usando `npm run serve`;
  - Reconstruir o `main.js` de pouco em pouco:

```js
new Vue({
  render: h => h('p', [ 'linha1', h('h2', [ 'subtítulo' ]) ]),
}).$mount('#app')
```

```js
new Vue({
  render: h => ( // eslint-disable-line
    <p>
      linha1
      <h2>subtítulo2</h2>
    </p>
  ),
}).$mount('#app')
```

  - E os estilos?

```js
import './estilo.css';

new Vue({
  render: h => ( // eslint-disable-line
    <p class='paragrafo'>
      linha1
      <h2>subtítulo2</h2>
    </p>
  ),
}).$mount('#app')
```

  - Arquivo estilo.css:

```css
.paragrafo {
  color: red;
}
```

  - O problema obviamente é a ausência de componentização. Fazer inline também não fica muito bonito:

```js
new Vue({
  render: h => ( // eslint-disable-line
    <p style='color: purple'>
      linha1
      <h2>subtítulo2</h2>
    </p>
  ),
}).$mount('#app')
```

  - Aqui já precisamos realmente começar a usar os componentes do Vue, e a extensão `.vue`. Nesse link tem detalhes do que essa extensão traz por baixo: https://vuejs.org/v2/guide/single-file-components.html. Volte para a versão do main.js que usa o componente `App` e a analise.

  - Adicione/retire o atributo scoped da tag style e analise a diferença: https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors. Espere problemas de performance acontecerem para otimizar, não sacrifique legibilidade/segurança nunca.

```vue
<style scoped>
div {
```

  - Apague o componente hello world, retire tudo do `App` e vamos adicionar roteamento:

```vue
<template>
  <div>App</div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style scoped>
</style>
```

  - O roteamento pode ser desenvolvido na mão ou através da biblioteca oficialmente suportada `vue-router`: https://vuejs.org/v2/guide/routing.html e https://router.vuejs.org/:

```sh
vue add router
```

  - Agora analise o que foi gerado;
  - Retire os estilos extras do componente App, retire a dependência ao componente HelloWorld (que não existe mais) e rode;

* Mocando a listagem de tarefas (sem autenticação ainda):

  - Adicione o seguinte template no componente Home:

```html
<h1>Tarefas</h1>
<ul>
  <li>
    Tarefa 1
  </li>
  <li>
    Tarefa 2
  </li>
  <li>
    Tarefa 3
  </li>
  <li>
    Tarefa 4
  </li>
</ul>
</div>
```

  - Mova a lista de tarefas para o "estado" do componente Home e use essa lista para renderizar as tarefas:

```vue
<template>
  <div class="home">
    <h1>Tarefas</h1>
    <ul>
      <li v-for="tarefa in tarefas" :key="tarefa.id">
        {{tarefa.titulo}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => {
    return {
      tarefas: [
        { id: 1, titulo: 'Tarefa 1' },
        { id: 2, titulo: 'Tarefa 2' },
        { id: 3, titulo: 'Tarefa 3' },
        { id: 4, titulo: 'Tarefa 4' },
        { id: 5, titulo: 'Tarefa 5' }
      ]
    };
  },
  components: {}
}
</script>
```

  - Por que precisamos do atributo `key`? https://vuejs.org/v2/guide/list.html#Maintaining-State
  - Adicionando uma mutação de estado (adição de tarefa):

```html
<button v-on:click="adicionarTarefa()">Nova tarefa</button>
```

  - Expondo o método `adicionarTarefa()` (repare que `this.x` permite acessar e modificar o atributo `x` do estado do componente, fechando o ciclo de mutação e renderização):

```js
methods: {
  adicionarTarefa() {
    console.log(this.tarefas);
    const proxima = this.tarefas.length + 1;
    this.tarefas.push({
      id: proxima,
      titulo: `Tarefa ${proxima}`
    });
  }
},
```

  - De forma similar podemos implementar a mutação de encerramento de tarefa:

```html
<li v-for="tarefa in tarefas" :key="tarefa.id">
  {{tarefa.titulo}}
  <button v-on:click="concluirTarefa(tarefa)">X</button>
</li>
```

```js
concluirTarefa(tarefa) {
  console.log(this.tarefas);
  const idx = this.tarefas.indexOf(tarefa);
  this.tarefas.splice(idx, 1);
}
```

  - Como isso funciona? Vue encapsula arrays em um objeto capaz de notificar mudanças de modo a triggar renderizações: https://vuejs.org/v2/guide/list.html#Mutation-Methods. Note que sempre é possível substituir a lista inteira:

```js
concluirTarefa(tarefa) {
  this.tarefas = this.tarefas.filter(x => x !== tarefa);
}
```

  - Qual a melhor solução? Discutível mas a filosofia de imutabilidade sugere que construir arrays novos é sempre melhor. Novamente a preocupação deve sempre ser legibilidade do código antes de performance ou outros aspectos.

  - Ao invés de adicionar um texto fixo está na hora de usarmos um campo de texto:

```html
<input v-model="titulo">
```

```js
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
      const proxima = this.tarefas.length + 1;
      this.tarefas.push({
        id: proxima,
        titulo: this.titulo
      });
      this.titulo = '';
    },
```

  - Também podemos adicionar a capacidade de alterar o título de uma tarefa existente:

```html
<li v-for="tarefa in tarefas" :key="tarefa.id">
  <input v-model="tarefa.titulo" v-on:change="salvarAlteracaoDeTitulo(tarefa)">
  <button v-on:click="concluirTarefa(tarefa)">X</button>
</li>
```

```js
// por enquanto estamos trabalhando na memória mas teremos que aplicar essa mudança no backend (Supabase)
salvarAlteracaoDeTitulo(tarefa) {
  console.log(tarefa);
  console.log(tarefa.titulo);
}
```

  - Algo que pode ser melhorado é a extração da tag `li` para um componente próprio, chamado `Tarefa`. Com isso o código fica menos denso e mais fácil de manter:


```html
<ul>
  <Tarefa
    v-for="tarefa in tarefas"
    :key="tarefa.id"
    v-bind:tarefa="tarefa"
    v-on:concluir="concluirTarefa(tarefa)"
  />
</ul>
```

```vue
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
```

* Integrando com a autenticação do Supabase e busca da lista pessoal de tarefas:

  CUIDADO com a rota de integração com os links enviados por email. Precisa ajustar o link de 3000 para porta 8080.
  [...]

* Integrando o cadastro de nova tarefa:

  [...]

* Integrando a alteração de tarefa existente:

  [...]

* Integrando a conclusão de tarefa pendente (botão "Concluir"):

  [...]

* (bônus) Deploy usando GitHub Pages e Actions:

  CUIDADO com SITE URL na configuração do Supabase.
  CUIDADO com o history mode do router.
  [...]
