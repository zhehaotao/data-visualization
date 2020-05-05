import React from 'react';
import { connect } from 'react-redux';
import ReactEcharts from 'echarts-for-react';
class BarPlot extends React.Component{
  getFieldsOne = () => {
    for (let i = 0; i < this.props.data[0].length; i++) {
      if (this.props.data[0][i] === this.props.fields[0].split(' ')[0]) {
        return i;
      }
    }
  }
  getFieldsTwo = () => {
    for (let i = 0; i < this.props.data[0].length; i++) {
      if (this.props.data[0][i] === this.props.fields[1].split(' ')[0]) {
        return i;
      }
    }
  }
  getOption = () => {
    let option = {
      title: {
        text:'柱状图',
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
      tooltip:{
        trigger:'axis',
      },
      xAxis:{
        axisLabel:{
          interval:0,
          rotate:this.props.rotate,
          fontSize:this.props.fontSize,
        },
        data:this.props.data.filter((row, idx) => idx > 0).map(row => (row[this.getFieldsOne()]))  
      },
      yAxis:{
        type:'value',
        axisLabel:{
          fontSize:this.props.fontSize
        }
      },
      series:[
        {
          name:`${this.props.fields[1].split(' ')[0]}`,
          type:'bar',   //这块要定义type类型，柱形图是bar,饼图是pie
          data:this.props.data.filter((row, idx) => idx > 0).map(row => (row[this.getFieldsTwo()])) 
        }
      ]
    }
    console.log(this.props.data)
   return option
  }

  render(){
    return(
      <div>
        <ReactEcharts option={this.getOption()} 
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

export default connect(mapStateToProps,null)(BarPlot);