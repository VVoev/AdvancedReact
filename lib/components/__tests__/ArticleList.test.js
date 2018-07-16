import React from 'react';
import ArticleList from './../ArticleList';
// import renderer from 'react-test-renderer';

import * as enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new ReactSixteenAdapter() });
const { shallow } = enzyme;

describe('ArticleList', () => {

    const testProps = {
        articles: {
            a: { id: 'a' },
            b: { id: 'b' }
        },
        store: {
            lookupAuthor: jest.fn
        }
    };

    it('renders correctly', () => {
        const wrapper = shallow(
            <ArticleList
                {...testProps}
            />
        );

        expect(wrapper.find('ArticleContainer').length).toEqual(2);
    });
});