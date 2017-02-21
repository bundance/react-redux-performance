import React, { PropTypes } from 'react';

class ToDoList extends React.Component {
    static propTypes = {
        todos: PropTypes.object,
        refreshCount: PropTypes.number.isRequired,
        onRefreshClick: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { refreshCount, onRefreshClick } = this.props;
        
        return (
            <div>
                <ul>
                    <li>
                        <div>Here be a Todo</div>
                    </li>
                </ul>
                <div>
                    RefreshCount: {refreshCount}
                </div>
                <div>
                    <button onClick={() => onRefreshClick()}>Refresh</button>
                </div>
            </div>
        )
    }
}

export default ToDoList;