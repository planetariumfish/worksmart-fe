export type User = {
  name: string;
  email: string;
  photo: string | null;
};

export type FinancialPicture = {
  year: number;
  netsales: number;
  cogs: number;
  sga: number;
  depreciation: number;
  intexp: number;
  taxexp: number;
  rnd: number;
  fixedassets: number;
  debt: number;
  equity: number;
  employees: number;
  daystopayment: number;
  inventories: number;
  receivables: number;
  cashnow: number;
  otherliquid: number;
  payable: number;
  overdraft: number;
  intpayable: number;
  otherpayable: number;
  divsnow: number;
};
