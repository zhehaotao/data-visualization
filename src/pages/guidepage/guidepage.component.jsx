import React from 'react';
import { connect } from 'react-redux';
import OutTable from '../../components/outtable/outtable.component';
import Footer from '../../components/footer/footer.component';
import ShowType from '../../components/showtype/showtype.component';
import CheckBox from '../../components/checkbox/checkbox.component';
import { Card } from 'antd';

import './guidepage.styles.scss';

class GuidePage extends React.Component {
  handleEmptyFile = () => {
    try {
      return this.props.data[0].length;
    } catch (err) {
      return 0;
    }
  }

  handleEmptyName = () => {
    try {
      return this.props.data[0][this.props.fields[1]];
    } catch (err) {
      return null;
    }
  }
 
  render() {
    return (
      <div>
        <div className='guide-container'>
          <div className='header-container'>
            选择图表
          </div>
          <div className='content-container'>
            <div className='data-preview'>
              <div>
                数据预览
              </div>
              <Card 
                title={`${this.props.data.length}行，${this.handleEmptyFile()}列`} 
                style={{ width: '100%', height:400 }}
              >
                <OutTable />
              </Card>
            </div>
            <div className='select-fields'>
              <div>
                选择合适字段 (不少于2个，不超过3个)
              </div>
              <Card title='字段 示例' 
                style={{ width: '100%', height:190 }}
                bodyStyle={{padding:0}}
              >
                <CheckBox />  
              </Card> 
              <div>
                图表类型
              </div>
              <Card style={{ width: '100%', height:160 }} bodyStyle={{padding:0}}>
                <ShowType
                  barTitle='柱状图'
                  scatterTitle='散点图'
                  titleLeft='8%'
                  titleTop='0'
                  height='160px' 
                  fontSize='8' 
                  rotate='30'
                  xSeries={this.props.data.filter((row, idx) => idx > 0).map(row => (row[this.props.fields[0]]))}
                  ySeries={this.props.data.filter((row, idx) => idx > 0).map(row => (row[this.props.fields[1]]))}
                  series={this.props.data.map((row,idx) => ([row[this.props.fields[1]],row[this.props.fields[2]],row[this.props.fields[0]]]))}
                  seriesName={this.handleEmptyName()}
                />
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }  
}

const mapStateToProps = state => ({
  data: state.worksheet.data,
  fields:state.fields.fields
})

export default connect(mapStateToProps,null)(GuidePage);