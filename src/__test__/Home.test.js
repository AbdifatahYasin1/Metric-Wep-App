import React from 'react';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store/index';
import Home from '../Components/Home';

describe('Missions', () => {
  it('renders Missions component', () => {
    const m = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(m).toMatchSnapshot();
  });
});
