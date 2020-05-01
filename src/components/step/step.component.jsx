import React, { Component }  from 'react';
import { withRouter } from 'react-router-dom';
import { Steps } from 'antd';

import './step.styles.scss';

const { Step } = Steps;

class StepComponent extends Component {
  state = {
    current: null,
  };

  onChange = (current) => {
    if (current === 0) {
      this.props.history.push('/upload')
    } else if (current === 1) {
      this.props.history.push('/guide')
    } else if (current === 2) {
      this.props.history.push('/make')
    } else if (current === 3) {
      this.props.history.push('/export')
    }

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

export default withRouter(StepComponent);
