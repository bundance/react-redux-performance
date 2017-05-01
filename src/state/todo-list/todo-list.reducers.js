import { keys } from 'ramda';
import { handleActions } from 'redux-actions';
import initialState from './initial.state';
import * as todoListConstants from '../../constants/todo-list/todo-list.constants';
import update from 'update-immutable';

export default handleActions({
    [todoListConstants.TODO_LIST_ADD_TODO]: addTodo,
    [todoListConstants.TODO_LIST_TODO_CHANGE]: todoChange,
    [todoListConstants.TODO_LIST_TOGGLE_COMPLETED]: toggleCompleted
}, initialState);


function addTodo(state) {
    const [...todos] = keys(state[todoListConstants.TODOS]);
    const id = todos ? todos.length : 0;
    const text = state[todoListConstants.NEW_TODO];

    let newState = update(state, {
        [todoListConstants.TODOS]: {
            $merge: {
                [id]: {
                    [todoListConstants.TEXT]: text,
                    [todoListConstants.COMPLETED]: false,
                    id
                }
            }
        },
        [todoListConstants.UNCOMPLETED_TODOS]: {
            $merge: {
                [id]: {
                    [todoListConstants.TEXT]: text,
                    [todoListConstants.COMPLETED]: false,
                    id
                }
            }
        }
    });
    console.log({ newState });
    return newState;
}

function todoChange(state, action) {
    return update(state, {
        [todoListConstants.NEW_TODO]: {
            $set: action.payload
        }
    });
}

function toggleCompleted(state, action) {
    let todo = state[todoListConstants.TODOS][action.payload.id];
    let newState;
    if (todo[todoListConstants.COMPLETED]) {
        todo = update(todo, { [todoListConstants.COMPLETED]: { $set: false } });
        newState = update(state, {
            [todoListConstants.TODOS]: {
                [action.payload.id]: {
                    [todoListConstants.COMPLETED]: {$set: false}
                }
            },
            [todoListConstants.COMPLETED_TODOS]: {
                $unset: [action.payload.id]
            },
            [todoListConstants.UNCOMPLETED_TODOS]: {
                [action.payload.id]: {$set: todo}
            }
        })
    } else {
        todo = update(todo, { [todoListConstants.COMPLETED]: { $set: true } });
        newState = update(state, {
            [todoListConstants.TODOS]: {
                [action.payload.id]: {
                    [todoListConstants.COMPLETED]: {$set: true}
                }
            },
            [todoListConstants.COMPLETED_TODOS]: {
                $set: { [action.payload.id]: todo }
            },
            [todoListConstants.UNCOMPLETED_TODOS]: {
                $unset: [action.payload.id]
            }
        })

    }
    console.log({ newState});
    return newState;
}