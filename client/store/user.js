import axios from 'axios'
import history from '../history'
const fetch = require('snekfetch');

let AUTH_TOKEN = 'Basic COmAsfoTl5bHFOoHoKl8uQCo12cA8sl2ytzk2RPu3uRB';
axios.defaults.headers.common.Authorization = AUTH_TOKEN;

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const GET_STORY = 'GET_STORY'
/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const storyInfo = (story) =>({type: GET_STORY, story})

/**
 * THUNK CREATORS
 */
export const me = () =>
  dispatch =>
    axios.get('/auth/me')
      .then(res =>
        dispatch(getUser(res.data || defaultUser)))
      .catch(err => console.log(err))

export const auth = (email, password, method) =>
  dispatch =>
    axios.post(`/auth/${method}`, { email, password })
      .then(res => {
        dispatch(getUser(res.data))
        history.push('/home')
      }, authError => { // rare example: a good use case for parallel (non-catch) error handler
        dispatch(getUser({error: authError}))
      })
      .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr))

export const logout = () =>
  dispatch =>
    axios.post('/auth/logout')
      .then(_ => {
        dispatch(removeUser())
        history.push('/login')
      })
      .catch(err => console.log(err))
let query = 'harry';
let offset =0;

  export const getStory = ()=>
      dispatch=>
      fetch.get(`https:/\/api.wattpad.com:443/v4/stories/?query=${query}&limit=5&offset=${offset}`).set('Authorization', AUTH_TOKEN).then(request => JSON.parse(JSON.stringify(request.body.stories)))
      .then(result => dispatch(storyInfo(result)))


/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    case GET_STORY:
    return [action.story]
    default:
      return state
  }
}
