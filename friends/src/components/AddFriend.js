import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';
import { Grid, Typography, TextField, Paper, Button } from '@material-ui/core';

class AddFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: null,
            email: ''
        };
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        const friend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        };
        this.props.addFriend(friend).then(this.props.history.push('/friends'));

        this.setState({
            name: '',
            age: null,
            email: ''
        });
    };

    render() {
        return (
            <Grid container justify='center'>
                <Paper className='paper'>
                    <form onSubmit={this.handleSubmit}>
                        <Typography variant='h4'>Add Friend</Typography>
                        <TextField
                            label='Name'
                            name='name'
                            value={this.state.name}
                            onChange={this.handleChange}
                            margin='normal'
                            type='text'
                        />
                        <TextField
                            label='age'
                            name='age'
                            value={this.state.age}
                            onChange={this.handleChange}
                            margin='normal'
                            type='text'
                        />
                        <TextField
                            label='Email'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                            margin='normal'
                            type='text'
                        />
                        <Button
                            variant='contained'
                            color='primary'
                            style={{ marginTop: 10 }}
                            onClick={this.handleSubmit}
                        >
                            Add Friend
            </Button>
                    </form>
                </Paper>
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(
    mapStateToProps,
    { addFriend }
)(AddFriend);