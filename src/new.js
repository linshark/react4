import React, {Component} from 'react';

export default class NewComponent extends Component {
    constructor(props) {
        super(props);
    }

    renderItem(item, idx){
        console.log('Item', item);
        console.log('Index', idx);
    }

    render() {
        console.log('This.', this.props.array);
        return (
            <ul>
                { this.props.array.map(this.renderItem.bind(this)) }
            </ul>
        );
    }
}
