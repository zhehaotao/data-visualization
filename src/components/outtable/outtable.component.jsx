import React from 'react';

/*
  Simple HTML Table
  usage: <OutTable data={data} cols={cols} />
    data:Array<Array<any> >;
    cols:Array<{name:string, key:number|string}>;
*/
class OutTable extends React.Component {
	render() { 
    return (
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>{this.props.cols.map((c) => <th key={c.key}>{c.name}</th>)}</tr>
          </thead>
          <tbody>
            {this.props.data.map((r,i) => <tr key={i}>
              {this.props.cols.map(c => <td key={c.key}>{ r[c.key] }</td>)}
              </tr>)}
          </tbody>
        </table>
      </div>
    );
  };
};

export default OutTable;