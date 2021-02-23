import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../components/App'
import HomePage from '../components/HomePage'
import DetailsPage from '../components/DetailsPage'
import SearchBox from '../components/SearchBox'
import JobsTable from '../components/JobsTable'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { createMemoryHistory } from 'history'
import configureStore from 'redux-mock-store'
import { DataObject, DataArray, DataInstance } from '../utils/testdata'

const mockStore = configureStore()
const store = mockStore({ jobs: DataObject })
Enzyme.configure({ adapter: new Adapter() })

describe('SearchBox', () => {
  it('should contain 2 inputboxs, 1 checkbox, and 1 button ', () => {
    const wrapper = shallow(<SearchBox store={store} />);
    const component = wrapper.dive().dive()
    expect(component.find('#search').prop('placeholder')).toBe('Search')
    expect(component.find('#location').prop('placeholder')).toBe('Location')
    expect(component.find('span.pl-2').text()).toBe('Full Time Only')
    expect(component).toMatchSnapshot()
  })
})

describe('JobsTable', () => {
  const props = {}
  props.jobs = DataArray
  props.history = createMemoryHistory('/')
  const wrapper = shallow(<Router><JobsTable {...props}/></Router>)
  const component = wrapper.dive().dive().dive().dive().dive().dive()

  test('should contain passed in data', () => {
    // Has Title
    expect(component.find('h6.m-0').text()).toBe('Jobs')
    // First Set
    expect(component.find('tbody tr td').at(0).text()).toBe(DataArray[0].company)
    expect(component.find('tbody tr td').at(1).text()).toBe(DataArray[0].title)
    expect(component.find('tbody tr td').at(2).text()).toBe(DataArray[0].location)
    expect(component.find('tbody tr td').at(3).text()).toBe(DataArray[0].type)
    expect(component.find('tbody tr td').at(4).text()).toBe(new Date(DataArray[0].created_at).toDateString())
    // Second Set
    expect(component.find('tbody tr td').at(5).text()).toBe(DataArray[1].company)
    expect(component.find('tbody tr td').at(6).text()).toBe(DataArray[1].title)
    expect(component.find('tbody tr td').at(7).text()).toBe(DataArray[1].location)
    expect(component.find('tbody tr td').at(8).text()).toBe(DataArray[1].type)
    expect(component.find('tbody tr td').at(9).text()).toBe(new Date(DataArray[1].created_at).toDateString())
    expect(component).toMatchSnapshot()
  })
})

describe('DetailsPage', () => {
  const props = {match: {params: {id: "3c5fc02a-159b-4930-92aa-16bbc436f98a"}}}
  props.history = createMemoryHistory('/') 
  
  const wrapper = shallow(<DetailsPage {...props} store={store}/>)
  const component = wrapper.dive().dive()

  test('should contain passed in data', () => {
    expect(component.find('h3.mb-3').text()).toBe(DataInstance.company);
    expect(component.find('a.text-secondary').text()).toBe(DataInstance.company_url);
    expect(component.find('div#location').text()).toBe(DataInstance.location);
    expect(component.find('div#title').text()).toBe(DataInstance.title);
    expect(component.find('div#type').text()).toBe(DataInstance.type);
    expect(component.find('span#date').text()).toBe(new Date(DataInstance.created_at).toDateString());
    expect(component.find('img').prop('src')).toEqual(DataInstance.company_logo);
  })
})

