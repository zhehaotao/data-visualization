import React from 'react';
import BarPlot from '../barplot/barplot.component';
import ScatterPlot from '../scatterplot/scatterplot.copmonent';
import { connect } from 'react-redux';

class ShowType extends React.Component {
  render () {
    if (this.props.fields.length === 2) {
      return (
        <BarPlot 
          height={this.props.height} 
          fontSize={this.props.fontSize} 
          rotate={this.props.rotate}
          xSeries={this.props.xSeries}
          ySeries={this.props.ySeries}
        />
      )
    } else if (this.props.fields.length === 3) {
      return (
        <ScatterPlot 
          height={this.props.height} 
          fontSize={this.props.fontSize} 
          rotate={this.props.rotate}
          series={this.props.series}
        />
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
