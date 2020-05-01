import React from 'react';
import './head.styles.scss';

import { ReactComponent as Data } from '../../assets/data.svg'

const Header = () => (
  <div className='header'>
    <div className='logo-container'>
      <Data/>
    </div>
    <div className='title'>
      数据可视化
    </div>
  </div>
)

export default Header;