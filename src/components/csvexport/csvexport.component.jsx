import React from 'react';
import { connect } from 'react-redux';
import { saveAs } from 'file-saver';
import { Button } from 'antd';

import './csvexport.styles.scss';

class CSVExport extends React.Component {
  downloadCSV = () => {
    try {
      let csv = '';
      for (let i = 0; i < this.props.editeddata.length; i++) {
        for (let j = 0; j < this.props.fields.length; j++) {
          if (j === this.props.fields.length-1) {
            csv += `${this.props.editeddata[i][this.props.fields[j]]}\n`
          } else {
            csv += `${this.props.editeddata[i][this.props.fields[j]]},`
          }
        }
      }
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
  fields:state.fields.fields,
  editeddata:state.editeddata.editeddata
})

export default connect(mapStateToProps,null)(CSVExport);



