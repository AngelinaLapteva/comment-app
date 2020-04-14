
import React from 'react';
import { render } from '@testing-library/react';
import CommentComponent from './CommentComponent';
import renderer from 'react-test-renderer';
import Avatar from '../avatar-component/Avatar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
const comments = [
    {
        id: 'dji7492ds',
        authorName: 'TestName',
        type: 'author',
        timeStamp: '2 minutes ago',
        amountOfReplies: 21,
        upCount: 123,
        downCount: 0,
        avatarPath: '/img/catAvatr.png',
        commentText: 'So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from prototype bodyworks.'
    }
]
const commentsTest2 = [
    {
        id: 'dji7492ds',
        authorName: 'TestName',
        type: 'author',
        timeStamp: '2 minutes ago',
        amountOfReplies: 1,
        upCount: 123,
        downCount: 0,
        avatarPath: '/img/catAvatr.png',
        commentText: 'So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from prototype bodyworks.'
    }
]

describe(' Comment  component', () => {
    test('renders comment component with multiple replies', () => {

        const { getByText } = render(<CommentComponent comments={comments} />);
        const linkElement = getByText(/TestName/i);
        const replies = getByText(/replies/i);
        expect(linkElement).toBeInTheDocument();
        expect(replies).toBeInTheDocument();
    });

    test('renders comment component with one reply', () => {

        const { getAllByText } = render(<CommentComponent comments={commentsTest2} />);
        const replies = getAllByText(/reply/i);
        expect(replies).toHaveLength(2);
    });
    test('check the snapshot', () => {
        const component = renderer.create(
            <CommentComponent comments={comments} />
        );
        let commentCmp = component.toJSON();
        expect(commentCmp).toMatchSnapshot();
    })
    test('check if Avatar and FontAwesome component created', () => {
        const comWrap = shallow(<CommentComponent comments={comments}/>)
        expect(comWrap.find(Avatar)).toHaveLength(1);
        expect(comWrap.find(FontAwesomeIcon)).toHaveLength(3)
    })
})