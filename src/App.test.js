import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import Main from './pages/Main';
import  { Provider } from 'react-redux';
import store from './store';

it('Verificar se está exibindo o provider do redux está englobando toda aplicação', () => {
  const wrapper = mount( <App/> );
  expect(wrapper.contains(<Provider store={store}><Main/></Provider>)).toBe(true);
})
