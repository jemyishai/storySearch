import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom'
import {getStory} from '../store/story'
import {  Input} from 'semantic-ui-react';

class Searchbar extends Component {
  constructor (props){
    super(props)

    this.search = this.search.bind(this);
  }

search(event){
  event.preventDefault();
  this.props.getStory(event.target.search.value)
  event.target.search.value = '';
}


render(){
  return (
    <div>
    <form onSubmit={this.search }>
      <Input
      className="story-form"
      name="search"
      type="text"
      focus placeholder="Search For a Story"
      />

      </form>
    </div>
  )
}

}

const mapStateToProps = ({story}) => ({story})

const mapDispatchToProps = { getStory }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Searchbar));
