import { screen } from '@testing-library/react';
import { userEvent, mockRender } from 'utils/test';

import { DetailBarbecue, ListBarbecue } from 'screens';

const components = [
  { path: '/churras/:id', component: DetailBarbecue },
  { path: '/churras', component: ListBarbecue },
];

describe('DetailBarbecue', () => {
  console.error = jest.fn();

  const render = () => mockRender(components);

  it('should navigate to List Barbecue screen when clicking "Voltar" ', () => {
    render();

    userEvent.click(screen.getByText('Voltar'));

    screen.debug();

    expect(screen.queryByText('Adicionar Churras')).toBeInTheDocument();
  });
});
