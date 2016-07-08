import React, { Component, PropTypes } from 'react';

import { Button } from 'react-bootstrap';

import { getClickComponent } from '../../common/modal/ModalWrapper';

import CancelDeployModal from './CancelDeployModal';

export default class CancelDeployButton extends Component {
  static propTypes = {
    requestId: PropTypes.string.isRequired,
    deployId: PropTypes.string.isRequired
  };

  static defaultProps = {
    children: (
      <Button
        bsStyle="warning"
        style={{float: 'right'}}>
        Cancel Deploy
      </Button>
    )
  };

  render() {
    return (
      <span>
        {getClickComponent(this)}
        <CancelDeployModal
          ref="modal"
          deployId={this.props.deployId}
          requestId={this.props.requestId}
        />
      </span>
    );
  }
}
