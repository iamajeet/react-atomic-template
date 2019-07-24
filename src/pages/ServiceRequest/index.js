import React, { Component } from 'react';
import { PSSTable, Block, CardBox } from '../..';
import styled from 'styled-components';
import './styles.css';
import { saveServiceRequest } from '../../../common/serviceRequestHelper';

const StyledBlock = styled(Block)`
  height: 40px;
  background: #e6e6e6;
  line-height: 40px;
  padding: 0 5px;
  text-align: center;
  font-weight: bold;
`;

class ServiceRequest extends Component {
  state = {
    product: '',
    id: '',
    type: '',
    desc: '',
    createddate: '',
    closeddate: '',
    response: '',
    currentstatus: '',
    submitted: false,
    errorMessage: ''
  };

  componentDidMount = () => {
    if (this.props.match.params.id) {
      this.setState({ product: this.props.match.params.id });
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  saveDetails = e => {
    e.preventDefault();
    const { type, desc } = this.state;
    this.setState({ submitted: true });
    if (type !== '' && desc !== '') {
      const requestDetails = { type, desc };
      requestDetails.createddate = new Date();
      requestDetails.closeddate = '';
      requestDetails.response = '';
      requestDetails.currentstatus = 'pending';
      requestDetails.product = this.props.match.params.id;
      requestDetails.userId = localStorage.getItem('username');
      requestDetails.id = Math.random()
        .toString(36)
        .replace('0.', '');
      console.log('request', requestDetails);
      saveServiceRequest(requestDetails).then(() => {
        this.props.history.push(`/page/all-service-request/`);
      });
    }
  };

  render() {
    const { product, type, desc, submitted } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <StyledBlock>Service Request</StyledBlock>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 center-form">
          <div className="panel panel-default">
            <div className="card col-lg-11 col-xl-11 panel-body profile-container--style">
              <form>
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <label className="label-color" htmlFor="product">
                      Product ID
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        name="product"
                        id="product"
                        value={product}
                        className="form-control input-sm"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group">
                      <label className="label-color" htmlFor="type">
                        Service Type
                      </label>
                      <input
                        type="text"
                        name="type"
                        id="type"
                        value={type}
                        onChange={this.handleChange}
                        className="form-control input-sm"
                      />
                      {submitted && !type && (
                        <div className="help-block">
                          Service Type is required
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="label-color" htmlFor="desc">
                    Service Request Description
                  </label>
                  <textarea
                    className="form-control"
                    rows="4"
                    name="desc"
                    value={desc}
                    onChange={this.handleChange}
                    id="desc"
                  />
                  {submitted && !desc && (
                    <div className="help-block">
                      Service Request Description is required
                    </div>
                  )}
                </div>
                <div className="row padding-top-15">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <button
                      type="button"
                      onClick={() => {
                        this.props.history.push(
                          `/page/item-details/${this.props.match.params.id}`
                        );
                      }}
                      // onClick={() => saveFeedback()}
                      className="btn btn-default btn-block btn-color"
                    >
                      CANCEL
                    </button>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <button
                      type="button"
                      onClick={e => this.saveDetails(e)}
                      // onClick={() => saveFeedback()}
                      className="btn btn-default btn-block btn-color"
                    >
                      SAVE DETAILS
                    </button>
                  </div>
                </div>
                <div className="form-group padding-top-15" />
                <div className="col-12">&nbsp;</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceRequest;
