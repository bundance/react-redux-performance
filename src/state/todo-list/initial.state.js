import { fromJS } from 'immutable';
import * as todoListConstants from '../../constants/todo-list/todo-list.constants'

export default fromJS({
    [todoListConstants.TODOS]: {},
    [todoListConstants.NEW_TODO]: ''
});