export interface RequestModel {
  id: string;
  number: string;
  date: Date;
  active: boolean;
  transactons: TransactionModel[]
  provider: ProviderModel;
}

export interface TransactionModel {
  type: string;
  number: string;
  date: Date
}

export interface ProviderModel {
  name: string;
  contact: ContactModel;
}

export interface ContactModel {
  name: string;
  telephoneNumber?: string;
  emailAddress: string;
}