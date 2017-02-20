import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import initialState from './initial.state';

export default handleActions({
    'ADD_BUTTON_INSTANCE': addButtonInstance
}, initialState);


function addButtonInstance(state) {
    const instanceCount = state.get('instanceCount');
    return state.mergeDeepIn([], fromJS({
        instanceCount: instanceCount + 1,
        instances: state.get('instances').push(instanceCount + 1)
    }));
}