import React, { PropsWithChildren, useCallback, useState } from 'react'
import { useQuery, QueryClient, QueryClientProvider } from 'react-query'
import SubscriptionFormContext, {
  SubscriptionFormData,
} from './SubscriptionFormContext'
import { PlansService } from 'api-services/PlansService'
import { AddOnsService } from 'api-services/AddOnsService'

const SubscriptionFormProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<SubscriptionFormData>({
    plansDuration: 'monthly',
    email: '',
    firstName: '',
    phoneNumber: '',
    addOns: [],
    plan: null,
  })

  // Queries
  const { data: plans = [] } = useQuery('plans', PlansService.get, {
    select: (data) => data.data,
  })
  const { data: addOns = [] } = useQuery('addOns', AddOnsService.get, {
    select: (data) => data.data,
  })

  const nextStep = () => {
    if (step < 3) {
      setStep((s) => s + 1)
    }
  }

  const previousStep = () => {
    if (step > 0) {
      setStep((s) => s - 1)
    }
  }

  const submit = useCallback(() => {
    return Promise.resolve()
  }, [])

  const goStep = useCallback((step: number) => {
    setStep(step)
  }, [])

  return (
    <SubscriptionFormContext.Provider
      value={{
        submit,
        goStep,
        step,
        plans,
        addOns,
        nextStep,
        previousStep,
        data,
        setData,
      }}
    >
      {children}
    </SubscriptionFormContext.Provider>
  )
}

const queryClient = new QueryClient()
const SubscriptionFormProviderWithQuery: React.FC<PropsWithChildren> = (
  props
) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SubscriptionFormProvider {...props} />
    </QueryClientProvider>
  )
}

export default SubscriptionFormProviderWithQuery
