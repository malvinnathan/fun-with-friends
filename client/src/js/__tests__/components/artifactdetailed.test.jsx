import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ArtifactDetailed from '../../components/ArtifactDetailed';

const mockStore = configureMockStore([thunk]);

describe('ArtifactDetailed', () => {
  it('should render mock information', () => {
    const store = mockStore({
      state: { false: false },
    });
    const wrapper = shallow(
      <Provider store={store}>
        <ArtifactDetailed />
      </Provider>
    );
    expect(wrapper).toContainMatchingElement('ArtifactDetailed');
  });
});
