import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFriends } from '../actions'
import Friend from './Friend'
import { Grid } from '@material-ui/core'

class FriendList extends Component {
    componentDidMount() {
        this.props.getFriends()
    }

    render() {
        console.log(this.props)
        return (
            <Grid container spacing={16} style={{ width: 1000, margin: 'auto' }}>
                {this.props.friends.map(friend => (
                    <Friend friend={friend} key={friend.id} />
                ))}
            </Grid>


        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends
    }
}

export default connect(mapStateToProps, { getFriends })(FriendList)