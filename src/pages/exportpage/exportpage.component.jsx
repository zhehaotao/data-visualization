import React from 'react';
import { connect } from 'react-redux';
import Footer from '../../components/footer/footer.component';
import ShowType from '../../components/showtype/showtype.component';
import PlotExport from '../../components/plotexport/plotexport.component';
import EditTable from '../../components/edittable/edittable.component';
import CSVExport from '../../components/csvexport/csvexport.component';

import './exportpage.styles.scss';

const ExportPage = ({editeddata}) => (
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
              height='320px' 
              fontSize='8' 
              rotate='30'
              xSeries={editeddata.filter((row, idx) => idx > 0).map(row => (row[0]))}
              ySeries={editeddata.filter((row, idx) => idx > 0).map(row => (row[1]))}
              series={editeddata.map((row,idx) => ([row[1],row[2],row[0]]))}
            />
          </div>
          
        </div>
        <div className='data-container'>
          <div className='button-container'>
            <CSVExport />
          </div>
          <div className='show-container'>
            <EditTable editable='false' />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

const mapStatetoProps = state => ({
  editeddata: state.editeddata.editeddata
})

export default connect(mapStatetoProps,null)(ExportPage);