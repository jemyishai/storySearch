import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import { List, Card, Icon, Image } from 'semantic-ui-react'

class storydetail extends Component {
  constructor (props){
    super(props)
  }

  render (){
    const {info} = this.props
    if (!info) return "Data Loading"
    return (
      <List.Item className="single-list">
        <div className="all-list-container">
        <div className="info-float">
          <Image src={info.cover} />
          </div>
          <div className="info-right">
          <List.Content>
          <List.Header>{info.title}</List.Header>
            {
              (info.mature) ? "CONTAINS MATURE CONTENT" : <em>IS SUITABLE FOR ALL AGES</em>
            } <br />
            <a href={info.url}>READ THIS STORY</a> <br/>
          </List.Content>
              {info.description}<br /> <br />
              Author: {info.user.name}<br />
              <List.Icon name='linkify' />
              <br />
              <hr />
          </div>
      </div>
      </List.Item>

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
