import React from 'react';

function renderItems(items, setContent) {
  return (
    <ul>
    {items.length && items.map(item => {
      const isNested = !!item.child; 
      return (
        <li key={item.key} onClick={(e) => { e.stopPropagation(); item.content && setContent(item.content);}}>
          <a>{item.label}</a>
          {isNested && renderItems(item.child, setContent)}
        </li>
        );
    })}
    </ul>
    
    );
}

const MultiLevelMenu = (props) => {
  const { items, setContent } = props;
  return renderItems(items, setContent);
};

export default MultiLevelMenu;