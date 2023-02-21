import React from 'react';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store/index';
import DetailsPage from '../Components/DetailsPage';

describe('DetailsPage', () => {
  it('renders DetailsPage component', () => {
    const m = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <DetailsPage />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(m).toMatchSnapshot();
  });
});
