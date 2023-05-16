import React, { useMemo, useState } from 'react'
import useSubscriptionForm from '../context/useSubscriptionForm'
import PriceDisplay from '../priceDisplay'
import FormContainer from '../formContainer'
import { SolitoImage } from 'solito/image'
const ThankYouIcon = require('./icon-thank-you.svg')
import { Divider } from 'app/design/divider'
import { View } from 'app/design/view'
import { Text } from 'app/design/typography'

const Summary = () => {
  const [success, setSuccess] = useState(false)
  const { goStep, data } = useSubscriptionForm()

  const { plan, addOns, plansDuration } = data

  const total = useMemo(() => {
    return {
      yearly:
        (plan?.yearlyPrice || 0) +
        addOns.reduce((a, b) => a + b.yearlyPrice, 0),
      monthly:
        (plan?.monthlyPrice || 0) +
        addOns.reduce((a, b) => a + b.monthlyPrice, 0),
    }
  }, [plan, addOns])

  const handleSubmit = () => {
    setSuccess(true)
  }

  if (success) {
    return (
      <FormContainer onSubmit={handleSubmit} hideActionButtons={true}>
        <View className="flex items-center">
          <SolitoImage src={ThankYouIcon} height={80} width={80} alt="" />

          <Text className="mb-4 mt-10 text-4xl font-bold">Thank you!</Text>
          <Text className="text-cool w-full break-words text-center text-xl md:px-20">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com
          </Text>
        </View>
      </FormContainer>
    )
  }

  return (
    <FormContainer
      title="Finishing up"
      desc="Double-check everything looks OK before confirming."
      nextButtonLabel="Confirm"
      onSubmit={handleSubmit}
    >
      <View className="bg-alabaster rounded-md p-4">
        {!!plan && (
          <View
            key={plan.id}
            className="flex flex-row items-center justify-between"
          >
            <View>
              <Text className="text-marine text-sm font-medium">
                {`${plan.name} ${
                  plansDuration === 'monthly' ? '(Monthly)' : '(Yearly)'
                }`}
              </Text>
              <Text
                className="text-cool text-sm underline"
                onPress={() => {
                  goStep(1)
                }}
              >
                Change
              </Text>
            </View>
            <PriceDisplay
              className="text-marine text-sm font-bold"
              monthlyPrice={plan.monthlyPrice}
              yearlyPrice={plan.yearlyPrice}
            />
          </View>
        )}

        {addOns.length > 0 && (
          <>
            <Divider />
            {addOns.map((addOn) => (
              <View
                className="text-cool mb-3 flex flex-row justify-between text-sm"
                key={addOn.id}
              >
                <Text className="text-cool">{addOn.name}</Text>
                <PriceDisplay
                  className="text-marine text-sm"
                  monthlyPrice={addOn.monthlyPrice}
                  yearlyPrice={addOn.yearlyPrice}
                  prefix="+"
                />
              </View>
            ))}
          </>
        )}
      </View>
      <View className="flex flex-row justify-between p-4">
        <Text className="text-cool text-sm">
          Total {plansDuration === 'monthly' ? '(per month)' : '(per year)'}
        </Text>
        <PriceDisplay
          className="text-purplish font-bold"
          monthlyPrice={total.monthly}
          yearlyPrice={total.yearly}
          prefix="+"
        />
      </View>
    </FormContainer>
  )
}

export default Summary
