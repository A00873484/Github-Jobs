import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MyComponent from './MyComponent'

Enzyme.configure({ adapter: new Adapter() })

describe('MyComponent', () => {
  it('should show text', () => {
    const wrapper = shallow(<MyComponent />)
    const text = wrapper.find('div div')
    expect(text.text()).toBe('Text goes here')
  })
  it('should hide text when button is clicked', () => {
    const wrapper = shallow(<MyComponent/>)
    const button = wrapper.find('button')
    button.simulate('click')
    const text = wrapper.find('div div')
    expect(text.length).toBe(0)
  })
})
