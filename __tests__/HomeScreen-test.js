import 'react-native'
import React from 'react'
import HomeScreen from '../app/screens/HomeScreen';

import renderer from 'react-test-renderer';

describe('Screens/HomeScreen', () => {
    it('it renders <HomeScreen /> correctly', () => {
        const tree = renderer.create(<HomeScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});