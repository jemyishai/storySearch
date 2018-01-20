import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import { Rating, Container, Header, Input, Card, Image, CardContent as Content, CardHeader, CardMeta, CardDescription, Radio} from 'semantic-ui-react'


class storydetail extends Component {
  constructor (props){
    super(props)
  }

  render (){
    const {info} = this.props
    console.log('info',info)
    if (!info) return "Data Loading"
    return (
      <div>
      {info.title}
      COVER:<img src={info.cover}/>
      DESCRIPTION: {info.description}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(storydetail));
