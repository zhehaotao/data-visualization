import React from 'react';
import { connect } from 'react-redux';
import Footer from '../../components/footer/footer.component';
import ShowType from '../../components/showtype/showtype.component';
import PlotExport from '../../components/plotexport/plotexport.component';
import CSVExport from '../../components/csvexport/csvexport.component';

import './exportpage.styles.scss';

class ExportPage extends React.Component {
  handleEmptyName = () => {
    try {
      return this.props.editeddata[0][1];
    } catch (err) {
      return null;
    }
  }
  render () {
    return (
    <div>
      <div className='export-container'>
        <div className='header-container'>
          选择图表
        </div>
        <div className='subheader-container'>
          选择要导出的数据
        </div>
        <div className='content-container'>
          <div className='plot-container'>
            <div className='button-container'>
              <PlotExport />
            </div>
            <div className='show-container'>
              <ShowType
                titleLeft='10%'
                titleTop='5%'    
                height='320px' 
                fontSize='8' 
                rotate='30'
                xSeries={this.props.editeddata.filter((row, idx) => idx > 0).map(row => (row[0]))}
                ySeries={this.props.editeddata.filter((row, idx) => idx > 0).map(row => (row[1]))}
                series={this.props.editeddata.map((row,idx) => ([row[1],row[2],row[0]]))}
                seriesName={this.handleEmptyName()}
              />
            </div>
            
          </div>
          <div className='data-container'>
            <div className='button-container'>
              <CSVExport />
            </div>
            <div className='show-container'>
              <table border="1">
                <tbody>
                  {this.props.editeddata.map(
                    (row,id) => (<tr key={id}>{row.map(
                      (index,id) => (<td key={id}>{index}</td>))}</tr>))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    )
  }
}

const mapStatetoProps = state => ({
  editeddata: state.editeddata.editeddata
})

export default connect(mapStatetoProps,null)(ExportPage);