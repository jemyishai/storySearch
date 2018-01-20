import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import { Rating, Container, Header, Input, Card, Image, CardContent as Content, CardHeader, CardMeta, CardDescription, Radio} from 'semantic-ui-react';
import Storydetail from './storydetail'


class storyinfo extends Component {
  constructor (props){
    super(props)
  }


  render (){
    const{ story }= this.props
    let primer = story[0]
    console.log('storyinfo', primer)
    if (!primer) return "Data Loading"
    return (
      <div>
      {
        primer.map((info) => <Storydetail key={info.id} info={info} />)
      }
      </div>
    )
  }

}

const mapStateToProps = ({story}) => ({story})

const mapDispatchToProps = (dispatch) => {
  return {
    storySearch(){
      dispatch(getStory(story))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(storyinfo));
