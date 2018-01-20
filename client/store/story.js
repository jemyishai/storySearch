const fetch = require('snekfetch');



let AUTH_TOKEN = 'Basic COmAsfoTl5bHFOoHoKl8uQCo12cA8sl2ytzk2RPu3uRB';


const GET_STORY = 'GET_STORY'


const storyInfo = (story) => ({type: GET_STORY, story})
// let query = 'harry';

  export const getStory = (query) =>
      dispatch =>
      fetch.get(`https:/\/api.wattpad.com:443/v4/stories/?query=${query}&limit=5&offset=0`).set('Authorization', AUTH_TOKEN).then(request => JSON.parse(JSON.stringify(request.body.stories)))
        .then(result => dispatch(storyInfo(result)))
        .catch(err => console.error(`Something bad happened`, err));


export default function reducer (story = [], action) {
  switch (action.type) {
    case GET_STORY:
      return action.story
    default:
      return story;
  }
}
