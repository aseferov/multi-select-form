import React from 'react'
import { PlanEntity } from 'api-services/PlansService'
import { AddOnEntity } from 'api-services/AddOnsService'

export type SubscriptionFormData = {
  plansDuration: 'monthly' | 'yearly'
  email: string
  firstName: string
  phoneNumber: string
  addOns: AddOnEntity[]
  plan: null | PlanEntity
}

export type SubscriptionFormContextValues = {
  step: number
  nextStep: () => void
  previousStep: () => void
  goStep: (number: number) => void
  plans: PlanEntity[]
  addOns: AddOnEntity[]
  submit: () => Promise<void>
  data: SubscriptionFormData
  setData: (data: SubscriptionFormData) => void
}

export default React.createContext<SubscriptionFormContextValues>(
  {} as SubscriptionFormContextValues
)
