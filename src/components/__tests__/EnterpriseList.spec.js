import React from 'react';
import { shallow } from 'enzyme';
import EnterpriseList from '../EnterpriseList';
 
it('render EnterpriseList', () => {
  const wrapper = shallow(<EnterpriseList/>);
  const defaultTitle = <h4 className="enterpriseTitle">Lista de Empresas</h4>;
  const emptySelect = <select></select>;
  expect(wrapper.contains(defaultTitle)).toEqual(true);
  expect(wrapper.contains(emptySelect)).toEqual(true);  
});

it('render EnterpriseList with props', () => {
  const items = ['Socaltur','Wendling'];
  const title = 'Empresa';
  const wrapper = shallow(<EnterpriseList title={title} items={items}/>);
  const textTitle = <h4 className="enterpriseTitle">{title}</h4>;
  const option = <option>{items[0]}</option>;
  expect(wrapper.contains(textTitle)).toEqual(true);
  expect(wrapper.contains(option)).toEqual(true);
});