import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
  <div 
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
  <div
    className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }} 
      />
      <div className='content'>
        <h1 className='title'> {title.toUpperCase()} </h1>
        <span className='subtitle'> SHOP NOW </span>
      </div>
  </div>
)

// With router will provide us access to the location, match and history
// props that we need access to.
export default withRouter(MenuItem);