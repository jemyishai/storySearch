import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import { Rating, Container, Header, Input, Card, Image, CardContent as Content, CardHeader, CardMeta, CardDescription, Radio} from 'semantic-ui-react'


class storyinfo extends Component {
  constructor (props){
    super(props)
  }



render (){
  const{ books } = this.props
  return (
    console.log(this.props)
  )
}

}

const mapStateToProps = ({storySearch}) => ({storySearch})

const mapDispatchToProps = (dispatch) => {
  return {
    storySearch(){
      dispatch(getStory(story))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(storyinfo));
