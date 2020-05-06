import React from 'react';
import { saveAs } from 'file-saver';
import { Button } from 'antd';

import './plotexport.styles.scss';

class PlotExport extends React.Component {  
  download = () => {
    try {
      const canvas = document.getElementsByTagName("canvas");
      canvas[0].toBlob(function(blob){
      saveAs(blob, "plot.png");
      },"image/png", 1);
    } catch (err) {
      alert("Can't find plot");
    }
  }
  render () {
    return (
      <div className='export-container'>
        <div>
          <Button onClick={this.download}>PNG导出</Button>
        </div>
      </div>
    )
  }
}

export default PlotExport;



