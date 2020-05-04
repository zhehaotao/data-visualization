import React, { Component }  from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Steps } from 'antd';
import { jumpToStep } from '../../redux/step/step.actions';
import './step.styles.scss';

const { Step } = Steps;

class StepComponent extends Component {
  onChange = ( current ) => {
    const { jumpToStep } = this.props;
    if (current === 0) {
      this.props.history.push('/upload');
    } else if (current  === 1) {
      this.props.history.push('/guide');
    } else if (current  === 2) {
      this.props.history.push('/make');
    } else if (current  === 3) {
      this.props.history.push('/export');
    }
    jumpToStep(current);
  };

  render() {
    return (
      <div className='step-container'>
        <div className='step-module'>
          <Steps
            type="navigation"
            current={this.props.current}
            onChange={this.onChange}
            className="site-navigation-steps"
          >
            <Step title="上传数据" />
            <Step title="选择图表" />
            <Step title="配置图表" />
            <Step title="导出图表" />
          </Steps>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  jumpToStep: current => dispatch(jumpToStep(current))
});

const mapStateToProps = state => ({
  current: state.step.current
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(StepComponent));
