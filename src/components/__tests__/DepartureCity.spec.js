import React from 'react';
import { shallow } from 'enzyme';
import DepartureCity from '../DepartureCity';
 
it('render DepartureCity', () => {
  const wrapper = shallow(<DepartureCity/>);
  const defaultTitle = <h4 className="departureTitle">Cidade de partida</h4>;
  const emptySelect = <select></select>;
  expect(wrapper.contains(defaultTitle)).toEqual(true);
  expect(wrapper.contains(emptySelect)).toEqual(true);
});

it('render DepartureCity with props', () => {
  const items = ['Ivoti','Estância Velha', 'Novo Hamburgo'];
  const title = 'Partida';
  const wrapper = shallow(<DepartureCity title={title} items={items}/>);
  const textTitle = <h4 className="departureTitle">{title}</h4>;
  const option = <option>{items[0]}</option>;
  expect(wrapper.contains(textTitle)).toEqual(true);
  expect(wrapper.contains(option)).toEqual(true);
});