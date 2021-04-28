const renderizeTarefa = (tarefas) => {
  tarefas.forEach((tarefa) => {
    $todoList.innerHTML += `
            <li data-id="${tarefa.id}">
              <input type="text" name="tarefa" value="${tarefa.task}" />
              <button name="remove">✔</button>
            </li>
          `;
  });
};

const busqueTarefas = async () => {
    let { data: todos, error } = await supabase
      .from("todos")
      .select("*")
      .order("inserted_at", { ascending: true });

    if (error) {
      console.error(error);
      return;
    }

    renderizeTarefa(todos);
}

const adicioneTarefa = async ({ tarefa }) => {
  // Ignore input vazio
  if (tarefa) {
    const { data, error } = await supabase.from("todos").insert([
      {
        user_id: userSession.id,
        task: tarefa,
      },
    ]);

    if (error) {
      console.error(error);
      toggleAlert(ALERT.ERROR_TAREFA);
      return;
    }

    renderizeTarefa(data);
  }
};

const atualizeTarefa = async ({ id, task }) => {
  const { error } = await supabase
    .from("todos")
    .update({ task })
    .eq("id", id);

  if (error) {
    console.error(error);
    toggleAlert(ALERT.ERROR_TAREFA_UPDATE);
    return;
  }
};

const completeTarefa = async ({ id, is_complete }) => {
  const { error } = await supabase
    .from("todos")
    .update({ is_complete })
    .eq("id", id);

  if (error) {
    console.error(error);
    toggleAlert(ALERT.ERROR_TAREFA_UPDATE);
    return;
  }
};

const removaTarefa = async ({ id, item }) => {
  const { error } = await supabase.from("todos").delete().eq("id", id);

  if (error) {
    console.error(error);
    toggleAlert(ALERT.ERROR_TAREFA_DELETE);
    return;
  }

  item.remove();
};

const onTarefaCrie = async (e) => {
  e.preventDefault();

  const tarefa = e.target.tarefa.value;
  adicioneTarefa({ tarefa });
};

// Se utilize de event propagation para inserir somente um listener para changes
const onTarefaChange = async (e) => {
  let item = e.target.closest("li");
  let id = item.dataset.id;

  if (e.target.type === "text") {
    // caso seja o input de texto
    atualizeTarefa({ id, task: e.target.value });
  } else if (e.target.type === "checkbox") {
    // caso seja o input checkbox
    completeTarefa({ id, is_complete: e.target.checked });
  }
};

// Se utilize de event propagation para inserir somente um listener para clicks
const onTarefaClick = async (e) => {
  let item = e.target.closest("li");
  let id = item.dataset.id;

  if (e.target.nodeName === "BUTTON") {
    // caso seja o botao de deletar
    removaTarefa({ id, item });
  }
};
