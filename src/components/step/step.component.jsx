import React, { Component }  from 'react';
import { Steps } from 'antd';

import './step.styles.scss';

const { Step } = Steps;

class StepComponent extends Component {
  state = {
    current: 0,
  };

  onChange = current => {
    console.log('onChange:', current);
    this.setState({ current });
  };

  render() {
    const { current } = this.state;

    return (
      <div className='step-container'>
        <Steps
          type="navigation"
          current={current}
          onChange={this.onChange}
          className="site-navigation-steps"
        >
          <Step title="上传数据" />
          <Step title="选择图表" />
          <Step title="配置图表" />
          <Step title="导出图表" />
        </Steps>
      </div>
    );
  }
}

export default StepComponent;
