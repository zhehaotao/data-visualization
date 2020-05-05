import React from 'react';
import BarPlot from '../../components/barplot/barplot.component';
import { connect } from 'react-redux';

class ShowType extends React.Component {
  render () {
    if (this.props.fields.length === 2) {
      return (
        <BarPlot height={this.props.height} fontSize={this.props.fontSize} rotate={this.props.rotate}/>
      )
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  fields: state.fields.fields
})

export default connect(mapStateToProps, null)(ShowType);
