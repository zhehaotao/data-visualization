import React from 'react';
import XLSX from 'xlsx';
import { connect } from 'react-redux';
import DataInput from '../datainput/datainput.component';
import { parseExcel } from '../../redux/worksheet/worksheet.actions';
import { Button } from 'antd';
// import { ReactComponent as FileExcel } from '../../assets/file-excel.svg'
import './parseexcel.styles.scss';

class ParseExcel extends React.Component {

	handleFile = (file) => {
    /* Boilerplate to set up FileReader */
    const { parseExcel } = this.props
		const reader = new FileReader();
		const rABS = !!reader.readAsBinaryString;
		reader.onload = (e) => {
			/* Parse data */
			const bstr = e.target.result;
			const wb = XLSX.read(bstr, {type:rABS ? 'binary' : 'array'});
			/* Get first worksheet */
			const wsname = wb.SheetNames[0];
			const ws = wb.Sheets[wsname];
			/* Convert array of arrays */
			const data = XLSX.utils.sheet_to_json(ws, {header:1});
      /* Update state */
      parseExcel(data);
		};
		if(rABS) reader.readAsBinaryString(file); else reader.readAsArrayBuffer(file);
  };
  
  exportFile = () => {
		/* convert state to workbook */
		const ws = XLSX.utils.aoa_to_sheet(this.props.data);
		const wb = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, "Sheet");
		/* generate XLSX file and send to client */
		XLSX.writeFile(wb, "样例数据.xlsx")
	};

	render() {
    console.log(this.props.data)
    return (
      <div>
        <div className="download-title">
          <Button type="link" disabled={!this.props.data.length} onClick={this.exportFile}>
          样例数据文件下载
          </Button>
        </div>
        <DataInput handleFile={this.handleFile} />
      </div>
    );
  };
};

const mapDispatchToProps = dispatch => ({
  parseExcel: data => dispatch(parseExcel(data))
});

const mapStateToProps = state => ({
  data: state.worksheet.data
})

export default connect(mapStateToProps,mapDispatchToProps)(ParseExcel);



