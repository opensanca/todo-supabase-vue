# Workshop Vue + Supabase

## Visão geral

* O que vamos desenvolver?

  Uma ferramenta de TO-DO com autenticação, permitindo listar tarefas, adicionar nova tarefa, alterar o texto de uma tarefa existente e concluir tarefas. O frontend será desenvolvido usando Vue2. O backend (tanto autenticação quanto armazenamento da lista de tarefas) será feito usando Supabase.

  https://opensanca.github.io/todo-supabase-vue/

* Como acompanhar? Faça o clone do repositório do workshop usando Git: https://github.com/opensanca/todo-supabase-vue. Vá para a branch `handson` e siga as instruções. De tempos em tempos essa branch vai ser atualizada e as pessoas que não conseguiram acompanhar podem pegar do último código que funciona com os seguintes comandos:

```sh
git fetch
git reset --hard origin/handson
```

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
  - Abra a pasta no editor de sua escolha (caso não tenha preferência use o VS Code com a extensão Vetur);
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

(COMMIT & PUSH)

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
```

  - Está muito feito! Limpe os estilos do App;
  - Para deixar mais bonito instale papercss e importe no projeto (criando também um arquivo estilos.css extra):

```
npm install papercss
```

```js
import 'papercss/dist/paper.min.css';
import './estilos.css';
```

```css
body {
  overflow-y: scroll;
  text-align: center;
}

a {
  font-size: 2rem;
  padding: 0 0.5rem;
}

h1,
h2 {
  margin: 0;
  padding: 1rem;
}

button {
  margin-left: 1rem;
}

input {
  display: inline-block;
}
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

  - Volte no seu dashboard do Supabase, tudo deve estar disponível agora;
  - Vá na parte de banco de dados e crie uma tabela chamada `tarefas` (defina uma primary key do tipo int8);
  - Adicione uma coluna chamada `título` do tipo text e outra chamada `concluida` do tipo boolean. As duas obrigatórias e o default da `concluida` deve ser false;
  - Crie uma coluna chamada `user_id` do tipo uuid referenciando a tabela `auth.users`. É essa coluna que vai garantir a segurança do sistema;

```sql
alter table tarefas add user_id uuid references auth.users not null;
alter table tarefas enable row level security;

create policy "Criar tarefa própria" on tarefas for
    insert with check (auth.uid() = user_id);

create policy "Visualizar suas tarefas" on tarefas for
    select using (auth.uid() = user_id);

create policy "Atualizar suas tarefas" on tarefas for
    update using (auth.uid() = user_id);
```

  - Com a tabela criada é hora de instalar a biblioteca cliente do Supabase e autenticar o usuário:

```sh
npm install @supabase/supabase-js
```

  - Com a biblioteca instalada podemos escrever um módulo que configura uma instância do client (note que aqui precisamos da chave publicável, obtida dentro do dashboard do Supabase):

```js
import { createClient } from '@supabase/supabase-js';


const supabase = createClient(
  process.env.VUE_APP_SUPABASE_URL,
  process.env.VUE_APP_SUPABASE_KEY
);


export default supabase;


export function isLoggedIn() {
  return supabase.auth.user() !== null;
}
```

  - Essas variáveis de ambientes são interpoladas automaticamente do arquivo `.env` (detalhes aqui https://cli.vuejs.org/guide/mode-and-env.html#environment-variables)

```
VUE_APP_SUPABASE_URL=https://XXXXXXXX.supabase.co
VUE_APP_SUPABASE_KEY=eyJhbGciOiJXXXXXXXXXXXXXXXx8sEtDI
```

  - Ainda no dashboard do Supabase troque a URL do site para `localhost:8080`. Desabilite também emails de confirmação;
  - Esse método `isLoggedIn` pode ser usado num guard do roteamento:

```js
import { isLoggedIn } from '../supabase-client';

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isLoggedIn()) next({ name: 'Login' })
  else next()
});
```

  - E criar uma view de login:

```js
},
{
  path: '/login',
  name: 'Login',
  component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
}
```

```vue
<template>
  <div>
    Login
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => {
    return {};
  },
  methods: {},
  components: {}
}
</script>
```

  - Implemente os elementos para login/registro. Note que no final da chamada signIn/signUp o isLoggedIn não vai mais retornar falso (completando a funcionalidade de autenticação):

```vue
<template>
  <div>
    <h1>Registro</h1>
    <p>Email: <input v-model="email"></p>
    <p>Senha: <input type="password" v-model="senha"></p>
    <p>
      <button v-on:click="cadastrar()">Cadastrar</button>
      <button v-on:click="entrar()">Entrar</button>
    </p>
  </div>
</template>

<script>
import supabase from '../supabase-client';
import router from '../router';

export default {
  name: 'Login',
  data: () => {
    return {
      email: '',
      senha: ''
    };
  },
  methods: {
    async entrar() {
      try {
        const res = await supabase.auth.signIn({
          email: this.email,
          password: this.senha
        });
        if (res.error) {
          alert(res.error.message);
        } else {
          router.push('/');
        }
      } catch (err) {
        console.error(err);
        alert('Não foi possível efetuar login!');
      }
    },
    async cadastrar() {
      try {
        const res = await supabase.auth.signUp({
          email: this.email,
          password: this.senha
        });
        if (res.error) {
          alert(res.error.message);
        } else {
          router.push('/');
        }
      } catch (err) {
        console.error(err);
        alert('Não foi possível efetuar o cadastro!');
      }
    }
  },
  components: {}
}
</script>
```

  - Voltando para o componente `Home` agora é possível integrar o cadastro de tarefa:

```js
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
    }
  } catch (err) {
    console.error(err);
    alert('Não foi possível cadastrar a tarefa!');
  }
},
```

  - Com pelo menos uma tarefa cadastrada podemos integrar a consulta (e refresh depois do cadastro):

```js
} else {
  this.titulo = '';
  this.carregarTarefas();
}
```

```js
,
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
```

```js
,
mounted() {
  this.carregarTarefas();
}
```

  - De forma bem similar é possível concluir uma tarefa:

```js
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
```

  - E por fim registrar as alterações de título:

```js
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
```

* (bônus) Deploy usando GitHub Pages e Actions:

  - Habilitar o github pages no repositório
  - npm run build
  - git checkout -b gh-pages
  - cp -R dist/* .
  - git commit
  - git push
