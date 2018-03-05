import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount } from 'enzyme';
import ExpenseForm from '../components/expense/expense-form/expense-form';
require('jest');

configure({ adapter: new Adapter() });

describe('<ExpenseForm />', function () {
  describe('Shallow Mounting', function () {
    beforeAll(() => this.wrapper = shallow(<ExpenseForm />));
    afterAll(() => this.wrapper.unmount());

    it('should render a expense form component', () => {
      expect(this.wrapper.length).toBe(1);
      expect(this.wrapper.find('.expense-form').length).toBe(1);
    });

    it('should have a default state object with a name property assigned an empty string', () => {
      expect(this.wrapper.state().name).toEqual('');
    });

    it('should change the state object when form input is provided', () => {
      let event = { target: { name: 'name', value: 'hello' } };
      this.wrapper.find('.expense-form input[type="text"]').simulate('change', event);
      expect(this.wrapper.state().name).toEqual('hello');
    });
  });

  describe('Full Mounting', () => {
    beforeAll(() => {
      this.wrapper = mount(<ExpenseForm />);
      this.wrapper.setProps({ onComplete: jest.fn() });
    });
    afterAll(() => this.wrapper.unmount());

    it('should reset the state.name value to empty string on form submit', () => {
      this.wrapper.setState({ name: 'goodbye world' });
      expect(this.wrapper.state().name).toEqual('goodbye world');
      this.wrapper.simulate('submit', { preventDefault: () => { } });
      expect(this.wrapper.state().name).toEqual('');
    });

    it('should have called onComplete in the previous assertion', () => {
      expect(this.wrapper.props().onComplete).toHaveBeenCalled();
    });
  });
});