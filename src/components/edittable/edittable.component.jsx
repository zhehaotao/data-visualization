import React from 'react';
import { connect } from 'react-redux';
import { editData } from '../../redux/editeddata/editeddata.actions';
import { Button } from 'antd';

import './edittable.styles.scss';

class EditTable extends React.Component {
  componentDidMount() {
    this.handleClick()
  }
  
  handleClick = () => {
    const { editData } = this.props
    const e = document.getElementById('table');
    const nativeData = e.innerText.replace(/[\t\r\n]/g,",").split(",");
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
  render () {
    return (
      <div className='modify-container'>
        <div id='table' contentEditable='true'>
          <table border="1">
            <tbody>
            {this.props.data.map(
              (row,id) => (<tr key={id}>{row.map(
                  (index,id) => (this.props.fields.includes(id)? (<td key={id}>{index}</td>):null))}</tr>))}
            </tbody>
          </table>
        </div>
        <div>
          <Button type='primary' size='large' onClick={this.handleClick}>完成编辑，更新图表</Button>
        </div>
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