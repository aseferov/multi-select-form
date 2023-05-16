import React from 'react'
import clsx from 'clsx'
import useSubscriptionForm from '../context/useSubscriptionForm'
import { SolitoImage } from 'solito/image'
import PriceDisplay from '../priceDisplay'
import FormContainer from '../formContainer'
import { View } from 'app/design/view'
import { Switch } from 'app/design/switch'
import { Pressable } from 'app/design/pressable'
import { Text } from 'app/design/typography'

const PlanSelect = () => {
  const { plans, data, setData, nextStep } = useSubscriptionForm()
  const { plan: selectedPlan, plansDuration } = data

  return (
    <FormContainer
      desc="You have the option of monthly or yearly billing."
      title="Select your plan"
      onSubmit={nextStep}
    >
      <View className="mb-4 flex flex-col gap-5 md:flex-row">
        {plans.map((plan) => (
          <Pressable
            key={plan.id}
            onPress={() => {
              setData({ ...data, plan })
            }}
            className={clsx(
              'border-lightgray hover:border-marine flex flex-1 cursor-pointer flex-row rounded-md border p-4 md:h-[150px] md:flex-col md:justify-between',
              {
                'border-marine bg-alabaster': selectedPlan?.id === plan.id,
              }
            )}
          >
            <View className="mr-3">
              <SolitoImage src={plan.icon} height={35} width={35} alt="" />
            </View>
            <View>
              <Text className="text-marine font-medium">{plan.name}</Text>
              <PriceDisplay
                className="text-cool mb-1 text-sm"
                monthlyPrice={plan.monthlyPrice}
                yearlyPrice={plan.yearlyPrice}
              />
              {plansDuration === 'yearly' && plan.yearlyFreeMonths && (
                <Text className="text-marine text-xs">
                  {plan.yearlyFreeMonths} months free
                </Text>
              )}
            </View>
          </Pressable>
        ))}
      </View>

      <View className="bg-alabaster mb-3 flex items-center justify-center rounded-lg py-4">
        <Switch
          onValueChange={(checked) => {
            setData({ ...data, plansDuration: checked ? 'yearly' : 'monthly' })
          }}
          value={plansDuration === 'yearly'}
          labelLeft="Monthly"
          labelRight="Yearly"
        />
      </View>
    </FormContainer>
  )
}

export default PlanSelect
