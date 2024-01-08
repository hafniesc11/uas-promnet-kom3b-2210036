import React, { Component } from "react";
import ServiceTransaction from "../services/ServiceTransaction";
import Swal from "sweetalert2";
import HeaderComponent from "./HeaderComponent";

class CreateTransactionComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      date: "",
      description: "",
      amount: "",
      status: "",
      receiver: "",
      jk: "",
      no_telp: "",
      address: "",
    };

    this.changeDate = this.changeDate.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.changeAmount = this.changeAmount.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeReceiver = this.changeReceiver.bind(this);
    this.changeJk = this.changeJk.bind(this);
    this.changeNotelp = this.changeNotelp.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.saveOrUpdateTransaction = this.saveOrUpdateTransaction.bind(this);
  }

  componentDidMount() {
    console.log (this.state.id)
    if (this.state.id === "_add") {
      return;
    } else {
      ServiceTransaction.getTransactionById(this.state.id).then((res) => {
        let transaction = res.data;
        this.setState({
            date: transaction.date,
            description: transaction.description,
            amount: transaction.amount,
            status: transaction.status,
            receiver : transaction.receiver,
            jk: transaction.jk,
            no_telp: transaction.no_telp,
            address: transaction.address,
        });
      });
    }
  }
  
  saveOrUpdateTransaction = (e) => {
    e.preventDefault();

    if (
      !this.state.date ||
      !this.state.description ||
      !this.state.amount ||
      !this.state.status ||
      !this.state.receiver ||
      !this.state.jk ||
      !this.state.no_telp ||
      !this.state.address
    ) {
      Swal.fire({
        title: "Error",
        text: "Please enter the data!",
        icon: "error",
      });
      return; 
    }

    let transaction = {
      date: this.state.date,
      description: this.state.description,
      amount: this.state.amount,
      status: this.state.status,
      receiver: this.state.receiver,
      jk: this.state.jk,
      no_telp: this.state.no_telp,
      address: this.state.address,
    };
    console.log("transaction => " + JSON.stringify(transaction));
  
    if (this.state.id === "_add") {
      ServiceTransaction.createTransaction(transaction).then((res) => {
        Swal.fire({
          title: "Transaction Added",
          text: "Your financial transaction has been added successfully.",
          icon: "success",
        });
        
        this.props.history.push("/");
      });
    } else {
      ServiceTransaction.updateTransaction(transaction, this.state.id).then(
        (res) => {
          Swal.fire({
            title: "Transaction Updated",
            text: "Your financial transaction has been updated successfully.",
            icon: "success",
          });
  
          this.props.history.push("/");
        }
      );
    }
  };
  
  changeDate = (event) => {
    this.setState({ date: event.target.value });
  };

  changeDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  changeAmount = (event) => {
    this.setState({ amount: event.target.value });
  };

  changeStatus = (event) => {
    this.setState({ status: event.target.value });
  };

  changeReceiver = (event) => {
    console.log(event.target.value);
    this.setState({ receiver: event.target.value });
  };

  changeJk = (event) => {
    this.setState({ jk: event.target.value });
  };

  changeNotelp = (event) => {
    this.setState({ no_telp: event.target.value });
  };

  changeAddress = (event) => {
    this.setState({ address: event.target.value });
  };

  cancel() {
    this.props.history.push("/");
  }

  getTitle() {
    const titleStyle = {
      marginTop: '20px',
      fontFamily: 'Times New Roman',
      fontWeight: 'bold',
      backgroundColor: '#3498db', 
      color: '#fff' , 
      borderRadius: '8px',
      padding: '10px',
    };

    if (this.state.id === "_add") {
      return (
        <h3 className="text-center font-weight-bold" style={titleStyle}>
          Add Financial Transactions
        </h3>
      );
    } else {
      return (
        <h3 className="text-center font-weight-bold" style={titleStyle}>
          Update Financial Transactions
        </h3>
      );
    }
  }

  render() {
    return (
      <div>
        <HeaderComponent pageTitle={this.state.title} headerColor="#3498db" showHeader />
        <br></br>
        <div className="container">
          <div className="row">
          <div className="card col-md-8 offset-md-2 shadow" style={{ marginTop: '80px', marginBottom: '100px', borderRadius: '8px'}}>
              {this.getTitle()}
              <div className="card-body">
  <form>
    <div className="form-group">
      <label htmlFor="date">Date :</label>
      <input
        type="date"
        id="date"
        name="date"
        className="form-control"
        value={this.state.date}
        onChange={this.changeDate}
      />
    </div>

    <div className="form-group">
      <label htmlFor="description">Description :</label>
      <input
        id="description"
        placeholder="Enter Deskripsi"
        name="description"
        className="form-control"
        value={this.state.description}
        onChange={this.changeDescription}
      />
    </div>

    <div className="form-group">
      <label htmlFor="status">Status :</label>
      <select
        id="status"
        name="status"
        className="form-control"
        value={this.state.status}
        onChange={this.changeStatus}
      >
        <option value="" disabled>Select transaction status</option>
        <option value="debit">Debit</option>
        <option value="kredit">Kredit</option>
      </select>
    </div>


    <div className="form-group">
      <label htmlFor="amount">Amount :</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">Rp</span>
        </div>
        <input
          type="number"
          id="amount"
          placeholder="Enter amount"
          name="amount"
          className="form-control"
          value={this.state.amount}
          onChange={this.changeAmount}
        />
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="receiver">Receiver :</label>
      <input
        id="receiver"
        placeholder="Enter receiver"
        name="receiver"
        className="form-control"
        value={this.state.receiver}
        onChange={this.changeReceiver}
      />
    </div>

    <div className="form-group">
      <label htmlFor="jk">Jenis Kelamin :</label>
      <select
        id="jk"
        name="jk"
        className="form-control"
        value={this.state.jk}
        onChange={this.changeJk}
      >
        <option value="" disabled>Select jenis kelamin</option>
        <option value="l">Laki-Laki</option>
        <option value="p">Perempuan</option>
      </select>
    </div>

    <div className="form-group">
      <label htmlFor="no_telp">Number Phone :</label>
      <input
        id="no_telp"
        placeholder="Enter your Number Phone"
        name="no_telp"
        className="form-control"
        value={this.state.no_telp}
        onChange={this.changeNotelp}
      />
    </div>

    <div className="form-group">
      <label htmlFor="address">Address :</label>
      <input
        id="address"
        placeholder="Enter your address"
        name="address"
        className="form-control"
        value={this.state.address}
        onChange={this.changeAddress}
      />
    </div>

    <div className="form-group text-center">
      <button
        className="btn btn-success mr-2"
        onClick={this.saveOrUpdateTransaction}
      >
        Save
      </button>
      <button
        className="btn btn-danger mr-2"
        onClick={this.cancel.bind(this)}
      >
        Cancel
      </button>
      <button
        className="btn btn-primary"
        onClick={this.cancel.bind(this)}
      >
        back
      </button>
    </div>
  </form>
</div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateTransactionComponent;
