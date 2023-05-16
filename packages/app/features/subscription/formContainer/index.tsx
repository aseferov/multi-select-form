import React, { PropsWithChildren } from 'react'
import useSubscriptionForm from '../context/useSubscriptionForm'
import { View } from 'app/design/view'
import { Button } from 'app/design/button'
import { Text } from 'app/design/typography'

type FormContainerProps = {
  title?: string
  desc?: string
  onSubmit: () => void
  hideActionButtons?: boolean
  nextButtonLabel?: string
}

const FormContainer: React.FC<PropsWithChildren<FormContainerProps>> = ({
  title,
  desc,
  onSubmit,
  children,
  hideActionButtons = false,
  nextButtonLabel = 'Next Step',
}) => {
  const { step, previousStep } = useSubscriptionForm()

  return (
    <View className="web:flex-grow relative flex flex-shrink flex-col md:px-20 md:pt-8">
      <View className="flex-grow px-3 md:px-0">
        <View className="web:-translate-y-12 web:md:-translate-y-0 rounded-md bg-white p-6 shadow-sm md:p-0 md:shadow-none">
          <Text className="text-marine mb-2 text-3xl font-bold">
            {title || ''}
          </Text>
          <Text className="text-cool mb-6 text-sm">{desc || ''}</Text>
          {children}
        </View>
      </View>

      {!hideActionButtons && (
        <View className="flex flex-row items-center justify-between bg-white p-2 md:p-0">
          {step > 0 && (
            <Button color="text" onPress={previousStep}>
              Go Back
            </Button>
          )}

          <Button className="ml-auto" onPress={onSubmit}>
            {nextButtonLabel as string}
          </Button>
        </View>
      )}
    </View>
  )
}

export default FormContainer
