import React from 'react';
import { saveAs } from 'file-saver';
import { Button } from 'antd';

import './plotexport.styles.scss';

class PlotExport extends React.Component {
  downloadPNG = () => {
    try {
      const canvas = document.getElementsByTagName("canvas");
      canvas[0].toBlob(function(blob){
      saveAs(blob, 'plot.png');
      });
    } catch (err) {
      alert("Can't find plot");
    }
  }

  downloadJPG = () => {
    try {
      const canvas = document.getElementsByTagName("canvas");
      canvas[0].toBlob(function(blob){
      saveAs(blob, 'plot.jpg');
      });
    } catch (err) {
      alert("Can't find plot");
    }
  }

  render () {
    return (
      <div className='png-container'>
        <div className='plot'>
          图表
        </div>
        <div>
          <Button type="primary" size='small' onClick={this.downloadPNG}>.png导出</Button>&emsp;
          <Button type="primary" size='small' onClick={this.downloadJPG}>.jpg导出</Button>
        </div>
      </div>
    )
  }
}

export default PlotExport;



