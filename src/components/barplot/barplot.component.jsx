import React from 'react';
import { connect } from 'react-redux';
import ReactEcharts from 'echarts-for-react';
class BarPlot extends React.Component{
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
        data:this.props.xSeries  
      },
      yAxis:{
        type:'value',
        axisLabel:{
          fontSize:this.props.fontSize
        }
      },
      series:[
        {
          name:`${this.props.data[0][this.props.fields[1]]}`,
          type:'bar', 
          data:this.props.ySeries
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