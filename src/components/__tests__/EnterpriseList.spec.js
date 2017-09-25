import React from 'react';
import { shallow } from 'enzyme';
import EnterpriseList from '../EnterpriseList';
 
it('renders enterprise list', () => {
  const wrapper = shallow(<EnterpriseList/>);
  const textTitle = <h4 className="enterpriseTitle">Empresa</h4>;
  const option = <option>Socaltur</option>;
  expect(wrapper.contains(textTitle)).toEqual(true);
  expect(wrapper.contains(option)).toEqual(true);
});