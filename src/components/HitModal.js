import React from 'react';
import Modal from '@material-ui/core/Modal';
import HitCard from './HitCard';

class HitModal extends React.Component {
  render() {
    return(
      <div>
        <Modal open={this.props.open} onClose={this.props.close}>
          <HitCard />
        </Modal>
      </div>
    )
  }
}

export default HitModal;
