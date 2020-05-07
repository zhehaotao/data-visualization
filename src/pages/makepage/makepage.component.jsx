import React from 'react';
import ShowType from '../../components/showtype/showtype.component';
import EditTable from '../../components/edittable/edittable.component';
import { Input } from 'antd';

import './makepage.styles.scss';

class MakePage extends React.Component {
  handleChange = e => {
    console.log(e.target.value);   
  }

  render () {
    return (
      <div className='content-container'>
        <div className='show-container'>
          <div className='plot-container'>
            <ShowType height='450px' fontSize='10' rotate='0'/>
          </div>
          <div className='edit-container'>
            <EditTable editable='true'/>
          </div>
        </div>
        <div className='config-container'>
          <div className='title'>
            配置区域
          </div>
          <div className='subtitle'>
            画布
          </div>
          <div>
            <Input 
              addonBefore='标题' 
              style={{width:'85%',padding:'8px 0'}} 
              onChange={this.handleChange}
            />
            <Input addonBefore='副标题' style={{width:'85%'}} />
          </div>
        </div>
      </div>
    )
  }
}
  


export default MakePage;