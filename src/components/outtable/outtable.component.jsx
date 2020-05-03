import React from 'react';

import { connect } from 'react-redux';
/*
  Simple HTML Table
  usage: <OutTable data={data} cols={cols} />
    data:Array<Array<any> >;
    cols:Array<{name:string, key:number|string}>;
*/
class OutTable extends React.Component {
	render() { 
    return (
      <table>
        <tbody>
          {this.props.data.map(
            (row,id) => (<tr key={id}>{row.map(
              (index,id) => (<td key={id}>{index}</td>))}</tr>))}
        </tbody>
      </table>
    ); 
  };
};

const mapStateToProps = state => ({
  data: state.worksheet.data
})

export default connect(mapStateToProps,null)(OutTable);