const onCreateTodo = async (e) => {
  e.preventDefault();

  const tarefa = e.target.tarefa.value;

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

const onTodoChange = async (e) => {
  console.log("todo change", e);
  let item = e.target.closest("li");
  let id = item.dataset.id;

  if (e.target.type === "text") {
    // update task
    const { data, error } = await supabase
      .from("todos")
      .update({ task: e.target.value })
      .eq("id", id);

    if (error) {
      console.error(error);
      toggleAlert(ALERT.ERROR_TAREFA_UPDATE);
      return;
    }
  } else if (e.target.type === "checkbox") {
    // complete task
    const { data, error } = await supabase
      .from("todos")
      .update({ is_complete: e.target.checked })
      .eq("id", id);

    if (error) {
      console.error(error);
      toggleAlert(ALERT.ERROR_TAREFA_UPDATE);
      return;
    }
  }
};
const onTodoClick = async (e) => {
  console.log("todo click", e);
  let item = e.target.closest("li");
  let id = item.dataset.id;

  if (e.target.nodeName === "BUTTON") {
    // delete task
    const { data, error } = await supabase.from("todos").delete().eq("id", id);

    if (error) {
      console.error(error);
      toggleAlert(ALERT.ERROR_TAREFA_DELETE);
      return;
    }

    item.remove();
  }
};

const renderizeTarefa = (tarefas) => {
  tarefas.forEach((tarefa) => {
    $todoList.innerHTML += `
            <li data-id="${tarefa.id}">
              <input type="text" name="tarefa" value="${tarefa.task}" />
              <input type="checkbox" name="completa" ${
                tarefa.is_complete ? 'checked="true"' : ""
              } />
              <button name="remove">x</button>
            </li>
          `;
  });
};
