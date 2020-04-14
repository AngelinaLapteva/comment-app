import React from 'react';
import renderer from 'react-test-renderer';
import Avatar from './Avatar'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
describe(' Avatar componrnt', () => {
    test('creating component', () => {
        const avWrap = shallow(<Avatar />)
        expect(avWrap.find('img')).toHaveLength(1);
    })
    test('tests avatar component snapshot', () => {
        const component = renderer.create(
            <Avatar avatarPath='/img/catAvatr.png' />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})
