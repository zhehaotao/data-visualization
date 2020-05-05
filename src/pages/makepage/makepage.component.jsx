import React from 'react';
import BarPlot from '../../components/barplot/barplot.component';
import Footer from '../../components/footer/footer.component';

const MakePage = () => (
  <div>
    <BarPlot height='300px' fontSize='16' rotate='0'/>
    <Footer />
  </div>
)

export default MakePage;