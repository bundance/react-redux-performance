import { getAllTodosUnmemoized, getAllTodosMemoized } from './todo-list.selectors';
import * as toDoListKeys from '../../constants/todo-list/todo-list.constants';
import { fromJS } from  'immutable';

describe('Selector tests', () => {

    let state = {
        [toDoListKeys.TODO_LIST]: {
            [toDoListKeys.TODOS]: {
                0: {
                    [toDoListKeys.TEXT]: 'text',
                    [toDoListKeys.COMPLETED]: true,
                    id: 0
                },
                1: {
                    [toDoListKeys.TEXT]: 'text1',
                    [toDoListKeys.COMPLETED]: false,
                    id: 1
                }
            }
        }
    };

    describe('memoized selectors', () => {
        it('should return a cached copy when given the same arguments', () => {
            const actual1 = getAllTodosMemoized(state);
            const actual2 = getAllTodosMemoized(state);

            expect(actual1 === actual2).toBeTruthy();
        });
    });

    describe('unMemoized selectors', () => {
        it('should NOT return a cached copy when given the same arguments', () => {
            const actual1 = getAllTodosUnmemoized(state);
            const actual2 = getAllTodosUnmemoized(state);

            expect(actual1 === actual2).toBeFalsy();
        });
    });
});