import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { initListDrivers } from './actions/drivers';
import { sortByStatus } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'antd/dist/antd.css';
import 'react-dates/lib/css/_datepicker.css';
import LoadingPage from './components/LoadingPage';

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

store.dispatch(initListDrivers()).then( _ => {
    renderApp();
});


