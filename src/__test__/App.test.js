import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from '../App';
import store from '../redux/store/index';

describe('Root component', () => {
  it('render whole the app', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
