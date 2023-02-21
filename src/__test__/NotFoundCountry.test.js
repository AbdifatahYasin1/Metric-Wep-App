// test this component
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store/index';
import NotFoundCountry from '../Components/NotFoundCountry';

describe('NotFoundCountry', () => {
  it('renders NotFoundCountry component', () => {
    const m = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <NotFoundCountry />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(m).toMatchSnapshot();
  });
});
