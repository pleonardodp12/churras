export enum ErrorMessages {
  loginRequired = 'Insira o login corretamente!',
  nameRequired = 'Insira o nome corretamente!',
  passwordRequired = 'Insira a senha corretamente!',
  passwordConfirmRequired = 'Insira a confirmação de senha corretamente!',
  confirmPasswordEquals = 'Senhas não correspondem!',
  reasonRequired = 'Insira um motivo para o churrasco!',
  dateRequired = 'Insira a data corretamente!',
  invalidDate = 'Data inválida!',
  invalidEmail = 'Email inválido!',
  previousDate = 'Selecione uma data futura!',
  minPassword = 'A senha precisa ter no mínimo 6 dígitos',

  alreadySomeoneInChurras = 'Ja existe alguém com esse nome!',
  failedOnCreateChurras = 'Não conseguimos salvar o seu churras! Tente novamente mais tarde!',
  failedToGetChurras = 'Não conseguimos carregar o seu churras!',
  failedToSaveConfirmations = 'Não conseguimos salvar as alterações!',
  failedToGetAllChurras = 'Não conseguimos carregar os churras!',
}

export enum SuccessMessages {
  succesSignUpUser = 'Usuário registrado com sucesso!',
  successOnCreateChurras = 'Churras criado com sucesso!',
  successOnSaveConfirmations = 'Alterações feitas com sucesso!',
}
