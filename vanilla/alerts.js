const ALERT = {
  SIGNUP: 0,
  LOGIN: 1,
  ERROR_EMAIL: 2,
  ERROR_TAREFA: 3,
  ERROR_TAREFA_UPDATE: 4,
  ERROR_TAREFA_DELETE: 5,
  TIMEOUT: 2000,
};

const toggleAlert = (alert) => {
  $alerts[alert].style.display = "block";
  setTimeout(() => {
    $alerts[alert].style.display = "none";
  }, ALERT.TIMEOUT);
};
