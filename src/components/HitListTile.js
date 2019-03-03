import React from 'react';
import HitModal from './HitModal';

class HitListTile extends React.Component {
  state = {
    open: false
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    return(
      <div onClick={this.handleOpen}>
        <img src={this.props.data.img} alt={this.props.data.alt} />
        <HitModal open={this.state.open} close={this.handleClose}/>
      </div>
    )
  }
}

export default HitListTile;
