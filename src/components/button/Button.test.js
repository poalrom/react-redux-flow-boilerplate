import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

test('render a button', () => {
  const wrapper = shallow(<Button>Simple button</Button>);
  expect(wrapper).toMatchSnapshot();
});

test('render a loading button', () => {
  const wrapper = shallow(<Button isLoading>Button with loader</Button>);
  expect(wrapper).toMatchSnapshot();
});

test('render a submit button', () => {
  const wrapper = shallow(<Button type="submit">Submit button</Button>);
  expect(wrapper).toMatchSnapshot();
});

test('render a button with custom classname', () => {
  const wrapper = shallow(<Button className="custom-button">Custom button</Button>);
  expect(wrapper).toMatchSnapshot();
});

test('render a disabled button', () => {
  const wrapper = shallow(<Button disabled>Disabled button</Button>);
  expect(wrapper).toMatchSnapshot();
});

test('onClick triggered', () => {
  const onClick = jest.fn();
  const wrapper = shallow(<Button onClick={onClick}>Clickable button</Button>);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('button').simulate('click');
  expect(onClick).toBeCalled();
});

test('onClick not triggered on disabled button', () => {
  const onClick = jest.fn();
  const wrapper = shallow(<Button disabled>Disabled button</Button>);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('button').simulate('click');
  expect(onClick).not.toBeCalled();
});
