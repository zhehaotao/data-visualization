import React from 'react';
import { connect } from 'react-redux';
import ReactEcharts from 'echarts-for-react';
class BarPlot extends React.Component{
  getOption =()=> {
    let option = {
      tooltip:{
        trigger:'axis',
      },
      xAxis:{
        data:this.props.data.filter((row, idx) => idx > 0).map(row => (row[0]))  
      },
      yAxis:{
        type:'value'
      },
      series:[
        {
          name:'本年累计',
          type:'bar',   //这块要定义type类型，柱形图是bar,饼图是pie
          data:this.props.data.filter((row, idx) => idx > 0).map(row => (row[1])) 
        }
      ]
    }
    console.log(this.props.data)
   return option
  }

  render(){
    return(
      <div>
        <ReactEcharts option={this.getOption()} />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  data: state.worksheet.data
})

export default connect(mapStateToProps,null)(BarPlot);