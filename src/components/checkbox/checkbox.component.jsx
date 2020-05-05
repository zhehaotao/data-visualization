import React from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'antd';

import { selectedFields } from '../../redux/fields/fields.actions';

class CheckBox extends React.Component {
  onChange = (checkedValues) => {
    const { selectedFields } = this.props
    selectedFields(checkedValues);
    console.log('checked = ', checkedValues);
  }
  
  options = () => {
    try {
      return this.props.data[0].map(
        (item, idx) => (`${item} ${this.props.data[1][idx]}`));
    } catch(err) {
      return; 
    }
  }

  render() {
    return (
      <div>
        <Checkbox.Group 
          options={this.options()} 
          onChange={this.onChange} 
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  selectedFields: fields => dispatch(selectedFields(fields))
});

const mapStateToProps = state => ({
  data: state.worksheet.data
})

export default connect(mapStateToProps,mapDispatchToProps)(CheckBox);


