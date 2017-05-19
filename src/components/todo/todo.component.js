import React, { PropTypes } from 'react';
import './todo.css'

function is(x, y, log) {
    if (x === y) {
        const xEqualY = (x !== 0 || y !== 0 || 1 / x === 1 / y);
        if(log) {
            console.log({ x, y, xEqualY });
        }

        return xEqualY;
    } else {
        const xNotEqualX = (x !== x);
        const yNoyEqualY = (y !== y);  // blobby - the problem's here. y !== y and x !== x. WTF?!

        if (log) {
            console.log({x, y, xNotEqualX, yNoyEqualY});
            console.log('xNotEqualX && yNoyEqualY:', xNotEqualX && yNoyEqualY);
        }
        return xNotEqualX && yNoyEqualY;
    }
}

export default class Todo extends React.Component {
    static propTypes = {
        todo: PropTypes.object,
        toggleCompletedTodo: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {};
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(`------------ TESTING ---- ${ this.props.todo.id } --------------`);
        const propsNotEqual = !this.shallowEqual(nextProps, this.props, true);
        const stateNotEqual = !this.shallowEqual(nextState, this.state);
        const contextNotEqual = !this.shallowEqual(nextContext, this.context);

        const retVal = propsNotEqual || stateNotEqual || contextNotEqual;

        console.log({propsNotEqual, stateNotEqual , contextNotEqual });
        console.log('props:', this.props, ', nextProps:', nextProps, ' - state:', this.state, ', nextState: ', nextState);
        console.log(`>>>>>>>>>> back in sCU for ${this.props.todo.id} RETURNING  ${ retVal } <<<<<<<<<`);

        return retVal;
    }

    shallowEqual(objA, objB, log=false) {
        if (is(objA, objB)) {
            return true;
        }

        if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
            if(log){
                console.log('**** typeof obj returns FALSE');
            }
            return false;
        }

        var keysA = Object.keys(objA);
        var keysB = Object.keys(objB);

        if (keysA.length !== keysB.length) {
            if(log) {
                console.log('**** keylength returns FALSE');
            }
            return false;
        }

        // Test for A's keys different from B.
        for (var i = 0; i < keysA.length; i++) {
            if(log) {
                console.log('::::::::: id: ', this.props.todo.id);
                // console.log('objB: ', objB, 'keysA[i]:', keysA[i]);
                // console.log('Object.hasOwnProperty.call(objB, keysA[i]):', Object.hasOwnProperty.call(objB, keysA[i]));
                console.log('objA[keysA[i]]:', objA[keysA[i]], ', objB[keysA[i]]: ', objB[keysA[i]]);
                console.log('!is(objA[keysA[i]], objB[keysA[i]]): ', !is(objA[keysA[i]], objB[keysA[i]]));
            }
            if (!Object.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]], true)) {
                if(log) {
                    console.log('**** hasOwnProps returns FALSE');
                }
                return false;
            }
        }
        if(log) {
            console.log('**** typeof obj returns TRUE');
        }
        return true;
    }

    render() {
        const { todo, toggleCompletedTodo } = this.props;
        const isCompletedClassname = todo.completed ? 'completed' : 'uncompleted';

        console.log(' ToDo renderered, id:', todo.id);

        return (
            <div>
                <input type="checkbox"
                       name={todo.id}
                       checked={todo.completed}
                       onChange={toggleCompletedTodo}
                />

                <span className={isCompletedClassname} >
                    ToDo: {todo.text}
                </span>
            </div>
        )
    }
}