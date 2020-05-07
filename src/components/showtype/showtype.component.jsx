import React from 'react';
import BarPlot from '../barplot/barplot.component';
import ScatterPlot from '../scatterplot/scatterplot.copmonent';
import { connect } from 'react-redux';

class ShowType extends React.Component {
  render () {
    if (this.props.fields.length === 2) {
      return (
        <BarPlot
          titleLeft={this.props.titleLeft}
          titleTop={this.props.titleTop} 
          height={this.props.height} 
          fontSize={this.props.fontSize} 
          rotate={this.props.rotate}
          xSeries={this.props.xSeries}
          ySeries={this.props.ySeries}
          seriesName={this.props.seriesName}
        />
      )
    } else if (this.props.fields.length === 3) {
      return (
        <ScatterPlot
          titleLeft={this.props.titleLeft}
          titleTop={this.props.titleTop}   
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
