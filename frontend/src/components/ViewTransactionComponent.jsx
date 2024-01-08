// ViewTransactionComponent.js
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ServiceTransaction from "../services/ServiceTransaction";
import HeaderComponent from "./HeaderComponent"; 

class ViewTransactionComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      transaction: {},
    };
  }

  componentDidMount() {
    ServiceTransaction.getTransactionById(this.state.id).then((res) => {
      this.setState({ transaction: res.data });
    });
  }

  render() {
    return (
      <div>
        <HeaderComponent pageTitle={this.state.title} headerColor="#3498db" showHeader />

        <div className="container mt-8" style={{marginTop: '180px'}}>
          <div className="card mx-auto mt-4 shadow" 
            style={{width: '70%', 
                    fontFamily: 'Times New Roman', 
                    fontSize: '20px', 
                    marginTop: '30px', 
                    borderRadius: '8px' 
                  }}>
                    
            <h3 className="card-header text-center" 
            style={{width: '95%', 
                    fontFamily: 'Times New Roman', 
                    fontWeight: 'bold', 
                    backgroundColor: '#3498db', 
                    color: '#fff' , 
                    borderRadius: '8px',
                    margin: 'auto',
                    marginTop: '10px'
                  }}>
              View Financial Transactions
            </h3>

            <div className="card-body" style={{ margin: '20px', border: '5px solid #ddd', borderRadius: '8px', padding: '20px' }}>
              <div className="row mb-2" style={{ marginBottom: '20px' }}>
                <div className="col-sm-6 ">
                  <strong>ID:</strong>
                  <p style={{ fontSize: '1em', marginBottom: '0' }}>{this.state.transaction.id}</p>
                </div>
                <div className="col-sm-6">
                  <strong>Receiver:</strong>
                  <p style={{ fontSize: '1em', marginBottom: '0' }}>{this.state.transaction.receiver}</p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-6">
                  <strong>Date :</strong>
                  <p>{this.state.transaction.date}</p>
                </div>
                <div className="col-sm-6">
                  <strong>Jenis Kelamin :</strong>
                  <p>{this.state.transaction.jk}</p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-6">
                  <strong>Description :</strong>
                  <p>{this.state.transaction.description}</p>
                </div>
                <div className="col-sm-6">
                  <strong>No. Telepon :</strong>
                  <p>{this.state.transaction.no_telp}</p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-6">
                  <strong>Amount :</strong>
                  <p>{this.state.transaction.amount}</p>
                </div>
                <div className="col-sm-6">
                  <strong>Address :</strong>
                  <p>{this.state.transaction.address}</p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-6">
                  <strong>Status :</strong>
                  <p>{this.state.transaction.status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
              <Link to="/" className="btn btn-primary" style={{fontSize: '18px'}}>
                Back
              </Link>
            </div>
      </div>
    );
  }
}

export default ViewTransactionComponent;
