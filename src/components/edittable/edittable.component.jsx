import React from 'react';
import { connect } from 'react-redux'; 

class EditTable extends React.Component {
  componentDidMount() {
    document.getElementById('table').onblur = (e) => (console.log(e.target.innerText))
  }
  

  render () {
    return (
      <div id='table' contentEditable={this.props.editable}>
        <table border="1">
          <tbody>
            {this.props.data.map(
              (row,id) => (<tr key={id}>{row.map(
                (index,id) => (this.props.fields.includes(id)? (<td key={id}>{index}</td>):null))}</tr>))}
          </tbody>
        </table>
      </div>
    )
  }
}



const mapStateToProps = state => ({
  data: state.worksheet.data,
  fields: state.fields.fields
})

export default connect(mapStateToProps,null)(EditTable);