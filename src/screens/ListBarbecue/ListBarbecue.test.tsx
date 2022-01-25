import { screen } from '@testing-library/react';
import { userEvent, mockRender } from 'utils/test';

import { ListBarbecue, CreateBarbecue } from 'screens';

const components = [
  { path: '/churras', component: ListBarbecue },
  { path: '/churras-novo', component: CreateBarbecue },
];

describe('ListBarbecue', () => {
  console.error = jest.fn();

  const render = () => mockRender(components);

  it('should navigate to create screen when clicking "Adicionar churras" ', async () => {
    render();

    userEvent.click(screen.getByText('Adicionar Churras'));

    expect(screen.queryByText('Criar churras')).toBeInTheDocument();
  });
});
