import { screen, waitFor } from '@testing-library/react';
import { userEvent, mockRender } from 'utils/test';

import { SignUp, SignIn } from 'screens';
import { ErrorMessages } from 'utils/constants';

const components = [
  { path: '/signup', component: SignUp },
  { path: '/', component: SignIn },
];

describe('SignIn', () => {
  console.error = jest.fn();

  const render = () => mockRender(components);

  it('should show error messages for required fields', async () => {
    render();

    userEvent.click(screen.getByText('Cadastrar'));

    expect(
      await screen.findByText(ErrorMessages.nameRequired),
    ).toBeInTheDocument();

    expect(
      await screen.findByText(ErrorMessages.loginRequired),
    ).toBeInTheDocument();

    expect(
      await screen.findByText(ErrorMessages.passwordRequired),
    ).toBeInTheDocument();

    expect(
      await screen.findByText(ErrorMessages.passwordConfirmRequired),
    ).toBeInTheDocument();
  });

  it('should show error message when email is invalid', async () => {
    render();

    userEvent.change(
      await screen.findByPlaceholderText('Digite seu email'),
      'email@@email.com',
    );

    userEvent.click(screen.getByText('Cadastrar'));

    expect(
      await screen.findByText(ErrorMessages.invalidEmail),
    ).toBeInTheDocument();
  });

  it('should hide errors after filling in the fields', async () => {
    render();

    userEvent.click(screen.getByText('Cadastrar'));

    expect(
      await screen.findByText(ErrorMessages.loginRequired),
    ).toBeInTheDocument();

    expect(
      await screen.findByText(ErrorMessages.passwordRequired),
    ).toBeInTheDocument();

    userEvent.change(
      await screen.findByPlaceholderText('Digite seu email'),
      'teste@email.com',
    );

    userEvent.change(
      await screen.findByPlaceholderText('Digite sua senha'),
      '123456',
    );

    await waitFor(() => {
      userEvent.click(screen.getByText('Cadastrar'));
    });

    screen.debug();

    expect(
      screen.queryByText(ErrorMessages.loginRequired),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText(ErrorMessages.passwordRequired),
    ).not.toBeInTheDocument();
  });

  it('hould show error when password and password confirmation are not equals', async () => {
    render();

    userEvent.change(
      await screen.findByPlaceholderText('Digite sua senha'),
      '123456',
    );

    userEvent.change(
      await screen.findByPlaceholderText('Digite sua senha novamente'),
      '1234567',
    );

    await waitFor(() => {
      userEvent.click(screen.getByText('Cadastrar'));
    });
    expect(
      screen.queryByText(ErrorMessages.confirmPasswordEquals),
    ).toBeInTheDocument();
  });

  it('should return to the login screen by clicking "Voltar" ', async () => {
    render();

    await waitFor(() => {
      userEvent.click(screen.getByText('Voltar'));
    });

    expect(screen.queryByText('Entrar')).toBeInTheDocument();
  });
});
