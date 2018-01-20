import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import { Rating, Container, Header, Input, Card, Image, CardContent as Content, CardHeader, CardMeta, CardDescription, Radio} from 'semantic-ui-react';
import Storydetail from './storydetail';
import {getStory} from '../store/story'


class storyinfo extends Component {
  constructor (props){
    super(props)

    this.search = this.search.bind(this);
    this.renderSearchBar = this.renderSearchBar.bind(this);
  }

search(event){
  event.preventDefault();
  console.log('made it here', event.target.search.value)
  this.props.getStory(event.target.search.value)
  event.target.search.value = '';
}

  render (){
    const { story } = this.props
    let primer = story
    if (!primer) return 'Data Loading'
    return (
      <div>
      {this.renderSearchBar()}
      {
        primer.map((info) => <Storydetail key={info.id} info={info} />)
      }
      </div>
    )
  }

renderSearchBar(){
  return (
    <div>
    <form onSubmit={this.search }>
      <Input
      name="search"
      type="text"
      focus placeholder="Harry Potter"
      />
      <button type="submit">SEARCH</button>
      </form>
    </div>
  )
}

}

const mapStateToProps = ({story}) => ({story})

const mapDispatchToProps = { getStory }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(storyinfo));
