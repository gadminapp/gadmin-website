export type BillingType = 'monthly' | 'yearly'

let typeBilling = 'monthly' as BillingType

export const setTypeBilling = (type: BillingType) => {
  typeBilling = type
  console.log(typeBilling)
}

export const getTypeBilling = () => typeBilling
