import React, { Component } from 'react';
import ServiceTransaction from '../services/ServiceTransaction';
import Swal from 'sweetalert2';

class ListTransactionComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transaction: [],
      searchQuery: '',
      filteredTransaction: [],
    };

    this.addTransaction = this.addTransaction.bind(this);
    this.editTransaction = this.editTransaction.bind(this);
    this.deleteTransaction = this.deleteTransaction.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.Kembali = this.Kembali.bind(this);
  }

  componentDidMount() {
    ServiceTransaction.getTransaction().then((res) => {
      if (res.data == null) {
        this.props.history.push('/');
      }

      const transactions = res.data;
      this.setState({
        transaction: transactions,
        filteredTransaction: transactions,
      });
    });
  }

  deleteTransaction(id) {
    Swal.fire({
      title: 'Are you sure you want to delete this post?',
      text: 'This will delete the post permanently, you cannot undo this action!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        ServiceTransaction.deleteTransaction(id).then((res) => {
          const updatedTransactions = this.state.transaction.filter(
            (transaction) => transaction.id !== id
          );
          this.setState({
            transaction: updatedTransactions,
            filteredTransaction: updatedTransactions,
          });
        });
        Swal.fire('Deleted!', 'Your transaction has been deleted.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your transaction is safe ><', 'info');
      }
    });
  }

  handleSearchChange(event) {
    const query = event.target.value.toLowerCase();

    const filteredTransaction = this.state.transaction.filter((transaction) => {
      return (
        transaction.date.toLowerCase().includes(query) ||
        transaction.description.toLowerCase().includes(query) ||
        transaction.amount.toLowerCase().includes(query) ||
        transaction.receiver.toLowerCase().includes(query) ||
        transaction.address.toLowerCase().includes(query)
      );
    });

    this.setState({
      searchQuery: query,
      filteredTransaction: filteredTransaction,
    });
  }

  Kembali() {
    this.setState({
      searchQuery: '',
      filteredTransaction: this.state.transaction,
    });
  }

  addTransaction() {
    this.props.history.push('/add/_add');
  }

  editTransaction(id) {
    this.props.history.push(`/${id}`);
  }

  viewTransaction(id) {
    this.props.history.push(`/view/${id}`);
  }

  render() {
    const buttonStyle = {
      fontSize: '18px',
      fontWeight: 'bold',
      fontFamily: 'Times New Roman',
    };

    return (
      <div className="container">
      <h2
  style={{
    color: 'black',
    fontFamily: 'Fredoka One, Times New Roman',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '50px',
    marginTop: '40px',
    fontSize: '40px',
    animation: 'zoomIn 1s',
  }}
>
  LIST FINANCIAL TRANSACTION
</h2>


        <div className="row mb-3">
          <div className="col-md-5 mb-3 mr-auto" style={{marginRight: 'px'}}>
            <input
              type="text"
              className="form-control"
              placeholder="Search by data..."
              value={this.state.searchQuery}
              onChange={this.handleSearchChange}
            />
          </div>
          <div className="col-md-2 mb-9">
            <button className="btn btn-primary" onClick={this.Kembali} style={buttonStyle}>
              Reset
            </button>
          </div>
          <div className="col-md-5 mb-1 text-md-right" >
            <button className="btn btn-primary" onClick={this.addTransaction} style={buttonStyle}>
              + Add Transaction
            </button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            
              <table
                className="table table-bordered- table-striped custom-table"
                style={{
                  fontSize: '23px',
                  fontFamily: 'Times New Roman',
                  marginLeft: '-280px',
                  marginTop: '30px',
                  border: '1px solid black',
                }}
              >
                <thead>
                <tr style={{ backgroundColor: '#2980b9', color: 'white' }}>
                  <th className="text-center align-middle" style={{ borderTop: '1px solid black', borderBottom: '1px solid black', borderRight: '1px solid black', color: 'white' }}>No</th>
                  <th className="text-center align-middle" style={{ borderTop: '1px solid black', borderBottom: '1px solid black', borderRight: '1px solid black', color: 'white' }}>Date</th>
                  <th className="text-center align-middle" style={{ borderTop: '1px solid black', borderBottom: '1px solid black', borderRight: '1px solid black', color: 'white' }}>Description</th>
                  <th className="text-center align-middle" style={{ borderTop: '1px solid black', borderBottom: '1px solid black', borderRight: '1px solid black', color: 'white' }}>Amount</th>
                  <th className="text-center align-middle" style={{ borderTop: '1px solid black', borderBottom: '1px solid black', borderRight: '1px solid black', color: 'white' }}>Status</th>
                  <th className="text-center align-middle" style={{ borderTop: '1px solid black', borderBottom: '1px solid black', borderRight: '1px solid black', color: 'white' }}>Receiver</th>
                  <th className="text-center align-middle" style={{ borderTop: '1px solid black', borderBottom: '1px solid black', borderRight: '1px solid black', color: 'white' }}>Jenis Kelamin</th>
                  <th className="text-center align-middle" style={{ borderTop: '1px solid black', borderBottom: '1px solid black', borderRight: '1px solid black', color: 'white' }}>No Telephone</th>
                  <th className="text-center align-middle" style={{ borderTop: '1px solid black', borderBottom: '1px solid black', borderRight: '1px solid black', color: 'white' }}>Address</th>
                  <th className="text-center align-middle" style={{ borderTop: '1px solid black', borderBottom: '1px solid black', color: 'white' }}>Actions</th>
                </tr>
                </thead>

                <tbody>
                  {this.state.filteredTransaction.map((transaction) => (
                    <tr key={transaction.id} >
                       <td style={{whiteSpace: 'nowrap', border: '1px solid black'}}>{transaction.id}</td>
                      <td style={{whiteSpace: 'nowrap', border: '1px solid black'}}>{transaction.date}</td>
                      <td style={{whiteSpace: 'nowrap', border: '1px solid black'}}> {transaction.description}</td>
                      <td style={{whiteSpace: 'nowrap', border: '1px solid black'}}>{transaction.amount}</td>
                      <td style={{whiteSpace: 'nowrap', border: '1px solid black'}}>{transaction.status}</td>
                      <td style={{whiteSpace: 'nowrap', border: '1px solid black'}}>{transaction.receiver}</td>
                      <td style={{whiteSpace: 'nowrap', border: '1px solid black' }}>{transaction.jk}</td>
                      <td style={{whiteSpace: 'nowrap', border: '1px solid black'}}>{transaction.no_telp}</td>
                      <td style={{whiteSpace: 'nowrap', border: '1px solid black'}}> {transaction.address}</td>
                      <td style={{whiteSpace: 'nowrap', border: '1px solid black'}}>
                        <div className="d-flex justify-content-center">
                          <button
                            onClick={() => this.viewTransaction(transaction.id)}
                            className="btn btn-info mx-2"
                            style={{fontSize: '20px'}}
                          >
                            View
                          </button>
                          <button
                            onClick={() => this.editTransaction(transaction.id)}
                            className="btn btn-info mx-2"
                            style={{fontSize: '20px'}}
                          >
                            Update
                          </button>
                          <button
                            onClick={() => this.deleteTransaction(transaction.id)}
                            className="btn btn-danger mx-2"
                            style={{fontSize: '20px'}}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ListTransactionComponent;
