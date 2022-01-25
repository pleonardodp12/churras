import axios from 'axios';
import { render, fireEvent } from '@testing-library/react';
import { Providers } from 'providers/Providers';
import { FC } from 'react';
import { MemoryRouter, Route, Switch } from 'react-router-dom';

type TComponent = {
  path: string;
  component: FC;
};

export const mockRender = (components: FC | TComponent[]) => {
  axios.defaults.adapter = require('axios/lib/adapters/http');

  return render(
    <Providers>
      <MemoryRouter
        initialEntries={[Array.isArray(components) ? components[0].path : '/']}
      >
        <Switch>
          {Array.isArray(components) ? (
            components.map((component) => (
              <Route
                key={component.path}
                component={component.component}
                path={component.path}
                exact
              />
            ))
          ) : (
            <Route component={components} exact />
          )}
        </Switch>
      </MemoryRouter>
    </Providers>,
  );
};

type UserEventType = 'value' | 'checked';
export const userEvent = {
  click: (field: HTMLElement | Element) => fireEvent.click(field),

  blur: (field: HTMLElement) => fireEvent.blur(field),

  change: (field: HTMLElement, value: any, type: UserEventType = 'value') =>
    fireEvent.change(field, {
      target: { [type]: value },
    }),

  changeThenBlur: (
    field: HTMLElement,
    value: any,
    type: UserEventType = 'value',
  ) => {
    fireEvent.change(field, {
      target: { [type]: value },
    });

    fireEvent.blur(field);
  },
};
