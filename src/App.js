import React , { Component } from 'react';
import MultiLevelMenu from './MultiLevelMenu';

import './style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items:[],
      content: "Multi level CSS- only push menu"
    }

    this.setContent = this.setContent.bind(this);
  }

  componentDidMount() {

    fetch('http://localhost:4000/data')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded:true,
        items: json,
      })
    }).catch(error => console.log(error.message));
  }


  setContent(content) {
    this.setState({
      content
    })
  }

  render() {
    const { items, content } = this.state;

    return (
      <React.Fragment>
        <article>
          <h1>Nested Menu</h1>
          <nav id="main_nav">
            <MultiLevelMenu items={items} setContent={this.setContent}/>
          </nav>
        </article>
        <div id="info">
          <div id="info-content">
            {content}
          </div>
        </div>
      </React.Fragment>);
  }
}





export default App;
