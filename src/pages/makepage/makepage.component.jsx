import React from 'react';
import { connect } from 'react-redux';
import ShowType from '../../components/showtype/showtype.component';
import EditTable from '../../components/edittable/edittable.component';
import { Input } from 'antd';

import './makepage.styles.scss';

class MakePage extends React.Component {
  handleChange = e => {
    console.log(e.target.value);   
  }

  handleEmptyName = () => {
    try {
      return this.props.editeddata[0][1];
    } catch (err) {
      return null;
    }
  }

  render () {
    return (
      <div className='content-container'>
        <div className='show-container'>
          <div className='plot-container'>
            <ShowType
              titleLeft='20%'
              titleTop='10%'    
              height='450px' 
              fontSize='10' 
              rotate='0'
              xSeries={this.props.editeddata.filter((row, idx) => idx > 0).map(row => (row[0]))}
              ySeries={this.props.editeddata.filter((row, idx) => idx > 0).map(row => (row[1]))}
              series={this.props.editeddata.map((row,idx) => ([row[1],row[2],row[0]]))}
              seriesName={this.handleEmptyName()}
            />
          </div>
          <div className='edit-container'>
            <div className='edit-title'>
              数据编辑区域
            </div>
            <EditTable />
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
  
const mapStateToProps = state => ({
  editeddata: state.editeddata.editeddata
})

export default connect(mapStateToProps,null)(MakePage);