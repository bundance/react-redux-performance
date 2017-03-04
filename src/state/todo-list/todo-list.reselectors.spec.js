import reselectors from './todo-list.reselectors';
import * as toDoListKeys from '../../constants/todo-list/todo-list.constants';
import { fromJS } from  'immutable';

describe('reselector tests', () => {

    let state = fromJS({
        [toDoListKeys.TODO_LIST]: {
            [toDoListKeys.TODOS]: {
                0: {
                    [toDoListKeys.TEXT]: 'text',
                    [toDoListKeys.COMPLETED]: 'false',
                    id: 0
                },
                1: {
                    [toDoListKeys.TEXT]: 'text1',
                    [toDoListKeys.COMPLETED]: 'false',
                    id: 1
                }
            }
        }
    });

    it('should return a cached copy when given the same arguments', () => {
        const actual1 = reselectors.getVisibleTodos(state);
        const actual2 = reselectors.getVisibleTodos(state);

        expect(actual1 === actual2).toBeTruthy();
    });
});