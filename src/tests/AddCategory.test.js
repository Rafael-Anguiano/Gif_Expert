import React from 'react'
import { shallow } from "enzyme"
import AddCategory from "../components/AddCategory"


describe('Tests in file AddCategory', () => {

    const setCategories = () => {}
    const wrapper = shallow(<AddCategory setCategories={ setCategories } />)

    test('should ', () => {
        expect(wrapper).toMatchSnapshot()
    })
    
    test('should change textbox', () => {
        const input = wrapper.find('input');
        const value = 'Hello World'

        input.simulate('change', { target: {value} } );

    })
})
