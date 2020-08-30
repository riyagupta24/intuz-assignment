import React from 'react';
import { shallow } from 'enzyme';
import IndexFile from '../src/components/Layout/index';
describe("MyComponent", () => {
  it("should render my component", () => {
    const wrapper = shallow(<IndexFile />);
  });
});