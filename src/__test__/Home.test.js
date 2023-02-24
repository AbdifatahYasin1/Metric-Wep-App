// test this component
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import DetailsPage from '../Components/DetailsPage';
import store from '../redux/store/index';

// snapshot test
test('renders DetailsPage component', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <BrowserRouter>
        <DetailsPage />
      </BrowserRouter>
    </Provider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
