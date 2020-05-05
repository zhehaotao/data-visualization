import React from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'antd';

class CheckBox extends React.Component {
  onChange(checkedValues) {
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

  defaultValue = () => {
    try {
      return ([`${this.props.data[0][0]} ${this.props.data[1][0]}`]);
    } catch {
      return;
    }
  }

  render() {
    return (
      <div>
        <Checkbox.Group 
          options={this.options()} 
          defaultValue={this.defaultValue()} 
          onChange={this.onChange} 
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.worksheet.data
})

export default connect(mapStateToProps,null)(CheckBox);


