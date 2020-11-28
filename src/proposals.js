import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        proposals: []
    }

    componentDidMount() {
        axios.get('https://rosseti-final-back.herokuapp.com/proposals',
            {headers: {"Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIyMTI4ODgzLCJqdGkiOiI5ZDE0MGViYTY4N2M0NTRhODI4YjAxZWVjZjhhMTUwYyIsInVzZXJfaWQiOjN9.cpjPa6B9CN_GW0HMmOVXfmCcNgFH8EF7knuH-VGEvwQ`}})
            .then(res => {
                const proposals = res.data;
                this.setState({proposals});
            })
    }

    render() {
        return (
            <ul>
                {this.state.proposals.map(proposal => <li>{proposal.status}</li>)}
            </ul>
        )
    }
}