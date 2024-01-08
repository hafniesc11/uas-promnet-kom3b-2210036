import axios from 'axios';

const TRANSACTION_API_BASE_URL = "http://localhost:9080/api/reports";

class ServiceTransaction {
    getTransaction(){
        return axios.get(TRANSACTION_API_BASE_URL);
    }

    createTransaction(transaction){
        return axios.post(TRANSACTION_API_BASE_URL, transaction);
    }

    getTransactionById(transactionId){
        return axios.get(TRANSACTION_API_BASE_URL + '/' + transactionId);
    }

    updateTransaction(transaction, transactionId){
        return axios.put(TRANSACTION_API_BASE_URL + '/' + transactionId, transaction);
    }

    deleteTransaction(transactionId){
        return axios.delete(TRANSACTION_API_BASE_URL + '/' + transactionId);
    }
}

export default new ServiceTransaction()