import { screen, waitFor } from '@testing-library/react';
import { userEvent, mockRender } from 'utils/test';

import { SignIn } from 'screens';
import { ErrorMessages } from 'utils/constants';

jest.mock('axios');

const components = [{ path: '/', component: SignIn }];

describe('SignIn', () => {
  console.error = jest.fn();

  const render = () => mockRender(components);

  it('should show error messages for required fields', async () => {
    render();

    userEvent.click(screen.getByText('Entrar'));

    expect(
      await screen.findByText(ErrorMessages.loginRequired),
    ).toBeInTheDocument();

    expect(
      await screen.findByText(ErrorMessages.passwordRequired),
    ).toBeInTheDocument();
  });

  it('should show error message when email is invalid', async () => {
    render();

    userEvent.change(
      await screen.findByPlaceholderText('Digite seu email'),
      'email@@email.com',
    );

    userEvent.click(screen.getByText('Entrar'));

    expect(
      await screen.findByText(ErrorMessages.invalidEmail),
    ).toBeInTheDocument();
  });

  it('should hide errors after filling in the fields', async () => {
    render();

    userEvent.click(screen.getByText('Entrar'));

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
      userEvent.click(screen.getByText('Entrar'));
    });

    screen.debug();

    expect(
      screen.queryByText(ErrorMessages.loginRequired),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText(ErrorMessages.passwordRequired),
    ).not.toBeInTheDocument();
  });
});
