import axios from 'axios';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_RESOLVED = 'LOGIN_RESOLVED';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHING_FRIENDS_START = 'FETCHING_FRIENDS_START';
export const FETCHING_FRIENDS_ERROR = 'FETCHING_FRIENDS_ERROR';
export const POSTING_FRIEND_START = 'POSTING_FRIEND_START'
export const POSTING_FRIEND = 'POSTING_FRIEND'
export const POSTING_FRIEND_ERROR = 'POSTING_FRIEND_ERROR'

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    console.log('object');
    return axios
        .post('http://localhost:5000/api/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: LOGIN_RESOLVED });
        })
        .catch(err => {
            if (err.response.status === 403) {
                localStorage.removeItem('token');
            }
            dispatch({ type: LOGIN_RESOLVED });
        });
};

export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING_FRIENDS_START });
    axios
        .get('http://localhost:5000/api/friends', {
            headers: { authorization: localStorage.getItem('token') }
        })
        .then(res => {
            dispatch({ type: FETCHING_FRIENDS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCHING_FRIENDS_ERROR, payload: err.response });
        });
};

export const addFriend = friend => dispatch => {
    dispatch({ type: POSTING_FRIEND_START })
    return axios
        .post('http://localhost:5000/api/friends', friend, {
            headers: { authorization: localStorage.getItem('token') }
        })
        .then(res => {
            dispatch({ type: POSTING_FRIEND, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: POSTING_FRIEND_ERROR, payload: err.response })
        })
}