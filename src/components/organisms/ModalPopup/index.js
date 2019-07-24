import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
class ModalPopup extends Component {
  state = {};
  render() {
    return (
      <Modal
        id={this.props.idName}
        size={this.props.size}
        show={this.props.show}
        onHide={() => this.props.onHide(false)}
        aria-labelledby={this.props.ariaLabelledby}
      >
        {this.props.headerTitle && (
          <Modal.Header closeButton>
            <Modal.Title id={`${this.props.idName}-title`}>
              {this.props.headerTitle}
            </Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body>{this.props.children}</Modal.Body>
      </Modal>
    );
  }
}
ModalPopup.defaultProps = {
  ariaLabelledby: "rc-modal-sizes",
  idName: "rc-modal-sizes",
  size: "sm",
  show: false
};
ModalPopup.propTypes = {
  idName: PropTypes.string,
  headerTitle: PropTypes.string,
  size: PropTypes.string,
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  notifyBack: PropTypes.func,
  ariaLabelledby: PropTypes.string
};

export default ModalPopup;
