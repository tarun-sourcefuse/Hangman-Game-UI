import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

/*****  import components */

// without redux connected components
import { H1, H2 } from './components/Content';
import Loader from './components/Loader';
import Keyboard from './components/VirtualKeyboard';

// with redux connected components
import Login from './pages/login';

/*****  import components end */

it('renders H1 without crashing', () => {
  shallow(<H1>Hello</H1>);
});

it('renders H2 without crashing', () => {
  shallow(<H2>Hello</H2>);
});

it('renders Loader without crashing', () => {
  shallow(<Loader />);
});

it('renders Virtual keyboard without crashing', () => {
  shallow(<Keyboard />);
});

it('renders content in H1', () => {
  const wrapper = shallow(<H1>Hello</H1>);
  const welcome = <h1>Hello</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

// snapshot testing

it('renders correctly', () => {
  const tree = shallow(<Keyboard />);
  expect(toJson(tree)).toMatchSnapshot();
});

// redux render mock
const mockStore = configureStore([]);

describe('React-Redux Component renders', () => {
  let store, component;

  beforeEach(() => {
    store = mockStore({
      user: { email: 'test@gmail.com', loading: true },
    });

    component = renderer.create(
      <Provider store={store}>
        <Login />
      </Provider>
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  //   it('should dispatch an action on button click', () => {});
});
