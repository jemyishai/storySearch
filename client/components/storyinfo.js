import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import Storydetail from './storydetail';
import {getStory} from '../store/story'
import Searchbar from './searchbar';
import { Card } from 'semantic-ui-react'


class storyinfo extends Component {
  constructor (props){
    super(props)
  }

  render (){
    const { story } = this.props
    let primer = story
    if (!primer) return 'Data Loading'
    return (
      <div>
      <Searchbar className="story-form"/>
       <Card animated verticalAlign='middle' className="list">
      {
        primer.map((info) => <Storydetail key={info.id} info={info} />)
      }
      < hr />
        </Card>
      </div>
    )
  }

}

const mapStateToProps = ({story}) => ({story})

const mapDispatchToProps = { getStory }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(storyinfo));
