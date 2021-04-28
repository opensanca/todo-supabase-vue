let userSession;

const onLogin = async ({ email, password }) => {
  let { user, error } = await supabase.auth.signIn({
    email,
    password,
  });

  if (error) {
    toggleAlert(ALERT.ERROR_EMAIL);
    return;
  }

  toggleAlert(ALERT.LOGIN);
  $loginForm.style.display = "none";
  $todos.style.display = "block";

  $todoForm.addEventListener("submit", onTarefaCrie);
  $todoList.addEventListener("click", onTarefaClick);
  $todoList.addEventListener("change", onTarefaChange);

  userSession = user;

  busqueTarefas();
};

const onSignUp = async ({ email, password }) => {
  let { user, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    toggleAlert(ALERT.ERROR_EMAIL);
    return;
  }

  toggleAlert(ALERT.SIGNUP);
  $loginForm.style.display = "none";
  $todos.style.display = "block";

  $todoForm.addEventListener("submit", onCreateTodo);
  $todoList.addEventListener("click", onTodoClick);
  $todoList.addEventListener("change", onTodoChange);

  userSession = user;
  console.log(userSession);
};

const onLoginSubmit = async (e) => {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;
  const signUp = e.target.signup.checked;

  if (signUp) {
    onSignUp({ email, password });
  } else {
    onLogin({ email, password });
  }
};

$loginForm.addEventListener("submit", onLoginSubmit);

