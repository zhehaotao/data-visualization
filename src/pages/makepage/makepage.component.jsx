import React from 'react';
import { connect } from 'react-redux';
import { editTitle } from '../../redux/plottitle/plottitle.actions';
import { selectColor } from '../../redux/color/color.actions';
import ShowType from '../../components/showtype/showtype.component';
import EditTable from '../../components/edittable/edittable.component';
import { Input } from 'antd';

import './makepage.styles.scss';

class MakePage extends React.Component {
  handleTitle = e => {
    const { editTitle } = this.props;
    editTitle(e.target.value);   
  }

  handleColor = e => {
    const { selectColor } = this.props;
    selectColor(e.target.value);
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
              scatterTitle={this.props.plottitle}
              barTitle={this.props.plottitle}              
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
              style={{width:'85%'}} 
              onChange={this.handleTitle}
            />
          </div>
          <br />
          <div className='subtitle'>
            图形属性
          </div>
          <div>
            <Input
              addonBefore='颜色'  
              type='color'
              style={{width:'85%'}} 
              onChange={this.handleColor}
              value={this.props.color}
            />
          </div>
        </div>
      </div>
    )
  }
}
  
const mapStateToProps = state => ({
  editeddata: state.editeddata.editeddata,
  plottitle: state.plottitle.plottitle,
  color: state.color.color
})

const mapDispatchToProps = dispatch => ({
  editTitle: plottitle => dispatch(editTitle(plottitle)),
  selectColor: color => dispatch(selectColor(color))
});

export default connect(mapStateToProps,mapDispatchToProps)(MakePage);