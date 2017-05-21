import React, { PropTypes } from 'react';
import './todo.css'

export default class Todo extends React.Component {
    static propTypes = {
        todo: PropTypes.object,
        toggleCompletedTodo: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {};
    }
    
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const propsNotEqual = !this.shallowEqual(nextProps, this.props);
        const stateNotEqual = !this.shallowEqual(nextState, this.state);
        const contextNotEqual = !this.shallowEqual(nextContext, this.context);

        const retVal = propsNotEqual || stateNotEqual || contextNotEqual;

        console.log(`Todo ${this.props.todo.id} is ${ retVal }`);

        return retVal;
    }

    shallowEqual(objA, objB, log=false) {
        if (Object.is(objA, objB)) {
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
                console.log('!is(objA[keysA[i]], objB[keysA[i]]): ', !Object.is(objA[keysA[i]], objB[keysA[i]]));
            }
            if (!Object.hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
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