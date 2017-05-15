import deepFreeze from 'deep-freeze';
import * as todoListConstants from '../../constants/todo-list/todo-list.constants';
import { toggleCompleted } from './todo-list.reducers';
import * as actions from './todo-list.actions';


describe('reducer: todoList.reducer', () => {
    describe('on TODO_LIST_TOGGLE_COMPLETED', () => {
        it('should toggle the completed state of the todo', () => {

            // perform a deepFreeze on the initial state object
            const initialState = {
                [todoListConstants.TODOS]: {
                    0: {
                        [todoListConstants.COMPLETED]: true
                    }
                }
            };

            deepFreeze(initialState);

            // create the payload
            let payload = {id: 0};

            let changedState = toggleCompleted(initialState, {
                type: actions.TODO_LIST_TOGGLE_COMPLETED,
                payload
            });

            // Verify the changes are correct
            expect(changedState.todos[0].completed).toBeFalsy();
            expect(changedState).not.toEqual(initialState);

        });
    });
});