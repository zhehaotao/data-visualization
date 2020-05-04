import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';
import { nextStep } from '../../redux/step/step.actions';

import './footer.styles.scss';

class Footer extends React.Component {
  constructor(props) {
		super(props);
    this.handleStep = this.handleStep.bind(this);
  };

  async handleStep() {
    const { nextStep } = this.props
    const U = {0:'upload',1:'guide',2:'make',3:'export'};
    await nextStep();
    this.props.history.push(`${U[this.props.current]}`);   
  }
  
  render() {
    return (
      <div className='foot-container'>
        <Button 
          type="primary" 
          className='next-step' 
          onClick={this.handleStep}
        >
          下一步
        </Button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  nextStep: () => dispatch(nextStep())
});

const mapStateToProps = state => ({
  current: state.step.current
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Footer));