import React from 'react';
import ParseExcel from '../../components/parseexcel/parseexcel.component';
import Footer from '../../components/footer/footer.component';
import { ReactComponent as InfoCircle } from '../../assets/info-circle.svg'

import './uploadpage.styles.scss';

const UploadPage = () => (
  <div>
    <div className='subtitle-container'>
      <div className='subtitle'>
        上传数据
      </div>
      <div className='info-container'>
        <InfoCircle />
      </div>
    </div>
    <ParseExcel />
    <Footer />
  </div>
)

export default UploadPage;