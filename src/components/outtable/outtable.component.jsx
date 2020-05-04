import React from 'react';

import { connect } from 'react-redux';
class OutTable extends React.Component {

	render() {
    return (
      <table border="1">
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