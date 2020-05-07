import React from 'react';
import { connect } from 'react-redux';
import { editData } from '../../redux/editeddata/editeddata.actions';

class EditTable extends React.Component {
  componentDidMount() {
    const { editData } = this.props
    document.getElementById('table').onblur = (e) => {
      const nativeData = e.target.innerText.replace(/[\t\r\n]/g,",").split(",");
      const newData = [];
      for (let i = 0; i < this.props.data.length; i++) {
        let temp = [];
        for (let j = 0; j < this.props.fields.length; j++) {
          temp.push(nativeData.shift());
        }
        newData.push(temp);
      }
      editData(newData)
    }
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
  data:state.worksheet.data,
  fields:state.fields.fields
})

const mapDispatchToProps = dispatch => ({
  editData: editeddata => dispatch(editData(editeddata))
});

export default connect(mapStateToProps,mapDispatchToProps)(EditTable);