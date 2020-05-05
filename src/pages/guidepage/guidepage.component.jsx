import React from 'react';
import { connect } from 'react-redux';
import OutTable from '../../components/outtable/outtable.component';
import Footer from '../../components/footer/footer.component';
import ShowType from '../../components/showtype/showtype.compoment';
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
                <ShowType height='160px' fontSize='8' rotate='30'/>
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
  data: state.worksheet.data
})

export default connect(mapStateToProps,null)(GuidePage);