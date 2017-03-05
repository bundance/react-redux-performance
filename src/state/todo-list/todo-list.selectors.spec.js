import selectors, { unMemoizedSelectors } from './todo-list.selectors';
import * as toDoListKeys from '../../constants/todo-list/todo-list.constants';
import { fromJS } from  'immutable';

describe('reselector tests', () => {

    let state = fromJS({
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
            },
            [toDoListKeys.COMPLETED_TODOS]: {
                0: {
                    [toDoListKeys.TEXT]: 'text',
                    [toDoListKeys.COMPLETED]: true,
                    id: 0
                }
            },
            [toDoListKeys.UNCOMPLETED_TODOS]: {
                1: {
                    [toDoListKeys.TEXT]: 'text1',
                    [toDoListKeys.COMPLETED]: false,
                    id: 1
                }
            }
        }
    });

    describe('memoized selectors', () => {
        it('should return a cached copy when given the same arguments', () => {
            const actual1 = selectors.getCompletedTodos(state);
            const actual2 = selectors.getCompletedTodos(state);

            expect(actual1 === actual2).toBeTruthy();
        });
    });

    describe('unMemoized selectors', () => {
        it('should return an cached copy when given the same arguments', () => {
            const actual1 = unMemoizedSelectors.getCompletedTodos(state);
            const actual2 = unMemoizedSelectors.getCompletedTodos(state);

            expect(actual1 === actual2).toBeFalsy();
        });
    });
});