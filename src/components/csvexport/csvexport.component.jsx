import React from 'react';
import { connect } from 'react-redux';
import { saveAs } from 'file-saver';
import { Button } from 'antd';

import './csvexport.styles.scss';

class CSVExport extends React.Component {
  downloadCSV = () => {
    try {
      const csv = [];
      for (let i = 0; i < this.props.data.length; i++) {
        for (let j = 0; j < this.props.fields.length; j++) {
          csv.push(this.props.data[i][this.props.fields[j]])
        }
      }
      csv.join(',');
      let blob = new Blob(['\uFEFF' + csv], {
        type: 'text/plaincharset=utf-8'
      })
      saveAs(blob, '数据.csv')
    } catch (err) {
      alert("Can't find csv");
    }
  }

  render () {
    return (
      <div className='csv-container'>
        <div className='plot'>
          数据
        </div>
        <div>
          <Button type="primary" size='small' onClick={this.downloadCSV}>.csv导出</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.worksheet.data,
  fields:state.fields.fields
})

export default connect(mapStateToProps,null)(CSVExport);



