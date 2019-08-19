import React from 'react';


const SimpleMenuItem = (props) => {
  const { content, setContent } = props;
  return (
    <li>
      <a href="#" onClick={() => content && setContent(content)}>{props.label}</a>
    </li>)
}

export default SimpleMenuItem;