import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'

class storydetail extends Component {
  constructor (props){
    super(props)
  }

  render (){
    const {info} = this.props
    if (!info) return "Data Loading"
    return (
      <Card>
      <Image src={info.cover} />
          <Card.Content>
          {info.title}
          DESCRIPPTION: {info.description}
          </Card.Content>
      {
        (info.mature) ? "CONATAINS MATURE CONTENT" : "Content Not MATURE"
      }
      </Card>

    )
  }

}

const mapStateToProps = ({story}) => ({story})

const mapDispatchToProps = (dispatch) => {
  return {
    storySearch(term){
      dispatch(getStory(term))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(storydetail));
