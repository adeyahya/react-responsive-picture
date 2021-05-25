import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ResponsiveImage, Provider } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider>
        <ResponsiveImage src="https://images.unsplash.com/photo-1603993097397-89c963e325c7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">
          <img width="100%" />
        </ResponsiveImage>
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
