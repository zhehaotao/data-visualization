import React from 'react';
import ReactDOM from 'react-dom';
import { Input, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

/*
  Simple HTML5 file input wrapper
  usage: <DataInput handleFile={callback} />
    handleFile(file:File):void;
*/
import './datainput.styles.scss';

class DataInput extends React.Component {
	constructor(props) {
		super(props);
    this.handleChange = this.handleChange.bind(this);
    this.showOperationSheet = this.showOperationSheet.bind(this);
  };
  
	handleChange(e) {
    const files = e.target.files;
		if (files && files[0]) {
      const fileName = files[0].name;
      document.getElementById('show-name').innerHTML = fileName;
      this.props.handleFile(files[0]);
    }
  };

  showOperationSheet() {
    ReactDOM.findDOMNode(this.fileInput).click()
  };

	render() { 
    return (
      <div  className="input-container">
        <Button 
          type="primary" 
          ghost 
          icon={<UploadOutlined />} 
          onClick={this.showOperationSheet} 
          block
        >
          文件上传
        </Button>
        <Input 
          type="file" 
          id="file" 
          ref={(input)=>{this.fileInput = input}} 
          accept={FileTYPE} 
          onChange={this.handleChange} 
        />
        <div id='show-name'></div>
      </div>
    ); 
  };
}

const FileTYPE = [".xlsx"];

export default DataInput;