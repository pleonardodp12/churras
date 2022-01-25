import { screen, waitFor } from '@testing-library/react';
import { userEvent, mockRender } from 'utils/test';
import { CreateBarbecue } from 'screens';
import { ErrorMessages } from 'utils/constants';

const components = [{ path: '/', component: CreateBarbecue }];

describe('CreateBarbecue', () => {
  console.error = jest.fn();

  const render = () => mockRender(CreateBarbecue);

  it('should show error messages for required fields', async () => {
    render();

    userEvent.click(screen.getByText('Criar'));

    expect(
      await screen.findByText(ErrorMessages.reasonRequired),
    ).toBeInTheDocument();
  });

  it('should show an error when the user tries to add a date less than today', async () => {
    render();

    userEvent.change(await screen.findByPlaceholderText('----'), 2021);

    await waitFor(() => {
      userEvent.click(screen.getByText('Criar'));
    });

    expect(screen.queryByText(ErrorMessages.previousDate)).toBeInTheDocument();
  });

  it('should show error message when user places prices below 1 or above 100', async () => {
    render();

    userEvent.change(
      await screen.findByPlaceholderText('Digite o preço com bebidas'),
      0,
    );
    userEvent.change(
      await screen.findByPlaceholderText('Digite o preço sem bebidas'),
      101,
    );

    await waitFor(() => {
      userEvent.click(screen.getByText('Criar'));
    });

    expect(
      screen.queryByText(ErrorMessages.priceDrinkMaxValue),
    ).toBeInTheDocument();

    expect(
      screen.queryByText(ErrorMessages.priceDrinkMinValue),
    ).toBeInTheDocument();
  });
});
