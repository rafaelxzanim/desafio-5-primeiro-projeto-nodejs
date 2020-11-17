import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';
import { response } from 'express';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: Request): Transaction {
    //Inserir um dado no repositório do Transaction

    //Se ao tiver saldo nao permitir retirar o dinheiro

    //Se o type de transaction for invalido dar uma zica
    if (!['outcome', 'income'].includes(type)) {
      throw new Error('Transaction type is invalid');
    }

    //normal
    const currentBalance = this.transactionsRepository.getBalance();
    //agora com destructuring    
    const {total}= this.transactionsRepository.getBalance();

    //normal
    //if (type === 'outcome' && ((currentBalance.total - value) < 0) ) {
    //agora com destructuring
    if (type === 'outcome' && ((total - value) < 0) ) {
      throw new Error('You do not have enough balance');
    }

    const transaction = this.transactionsRepository.create({
      title,
      value,
      type,
    });
    return transaction;
  }
}

export default CreateTransactionService;
