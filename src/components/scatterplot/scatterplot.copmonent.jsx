import React from 'react';
import { connect } from 'react-redux';
import ReactEcharts from 'echarts-for-react';
class ScatterPlot extends React.Component{
  getFieldsOne = () => {
    for (let i = 0; i < this.props.data[0].length; i++) {
      if (this.props.data[0][i] === this.props.fields[1].split(' ')[0]) {
        return i;
      }
    }
  }
  getFieldsTwo = () => {
    for (let i = 0; i < this.props.data[0].length; i++) {
      if (this.props.data[0][i] === this.props.fields[2].split(' ')[0]) {
        return i;
      }
    }
  }

  render () {
    const option = {
      title: {
        text: '散点图',
        left:'10%',
        textStyle: {
          fontSize:14,
          fontWeight:'lighter'
        }
      },
      grid: {
        left:'20%',
        top:'20%',
        bottom:'20%'
      },
      xAxis: {
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        },
        axisLabel:{
          interval:0,
          rotate:this.props.rotate,
          fontSize:this.props.fontSize,
        },
      },
      yAxis: {
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        },
        axisLabel:{
          fontSize:this.props.fontSize
        }
      },
      series: [{
        data: this.props.data.map((row,idx) => ([row[this.getFieldsOne()],row[this.getFieldsTwo()],row[0]])),
        type: 'scatter',
        emphasis: {
          label: {
            show: true,
            formatter: function (param) {
                return param.data[2];
            },
            position: 'top'
          }
        },
      }]
    };

    return(
      <div>
        <ReactEcharts option={option}
          style={{width:'100%',height:`${this.props.height}`}} 
        />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  data: state.worksheet.data,
  fields: state.fields.fields
})

export default connect(mapStateToProps,null)(ScatterPlot);