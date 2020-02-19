import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import { TextField, Button, Grid, Paper, Typography } from '@material-ui/core';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        const credentials = {
            username: this.state.username,
            password: this.state.password
        };
        this.props.login(credentials)
            .then(this.props.history.push('/friends'));
        this.setState({
            username: '',
            password: ''
        })
    };
    render() {
        console.log(this.props);
        return (
            <Grid container justify='center'>
                <Paper className="paper">

                    <form onSubmit={this.handleSubmit}>
                        <Typography variant="h4">Login</Typography>
                        <TextField
                            label='Name'
                            name='username'
                            value={this.state.username}
                            onChange={this.handleChange}
                            margin='normal'
                            type='text'
                        />
                        <TextField
                            label='Password'
                            name='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                            margin='normal'
                            type='password'
                        />
                        <Button variant="contained" color="primary" style={{ marginTop: 10 }} onClick={this.handleSubmit}>Submit</Button>
                    </form>
                </Paper>
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
        logginIn: state.logginIn
    };
};

export default connect(
    mapStateToProps,
    { login }
)(Login);