import type { Installment } from 'vtex.search-graphql'

export type InstallmentFragment = Pick<
  Installment,
  | 'Value'
  | 'InterestRate'
  | 'TotalValuePlusInterestRate'
  | 'NumberOfInstallments'
  | 'Name'
  | 'PaymentSystemName'
>

export default {}
