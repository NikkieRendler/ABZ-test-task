import React, { Component } from 'react';
import axios from 'axios';
import caretDown from '../../../icons/caret-down.svg';

class Position extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positionList: [],
            checkedPosition: 'Select your position',
            positionListVisible: 'auth-form-positionList invisible'
        }
    }


    componentDidMount() {
        axios({
            method: 'GET',
            url: 'https://frontend-test-assignment-api.abz.agency/api/v1/positions'
        })
            .then(response => {
                let positionList = response.data.positions;
                this.setState({ positionList: positionList })
            })
    }

    render() {
        let showPositionList = () => {
            this.setState({ positionListVisible: 'auth-form-positionList-item' })
        }
        let selectPosition = (position) => {
            this.setState({ checkedPosition: position })
            this.setState({ positionListVisible: 'auth-form-positionList-item invisible' })
        }
        const positionList = this.state.positionList.map((position, id) =>
            <div
                className={this.state.positionListVisible}
                key={id}
                onClick={() => selectPosition(position.name)}>
                {position.name}
            </div>
        )

        return (
            <div className='auth-form-positionList'>
                <div className='auth-form-positionList-header'
                    onClick={() => showPositionList()}>
                    {this.state.checkedPosition}<img src={caretDown} />
                </div>
                {positionList}
            </div>

        )
    }
}

export default Position