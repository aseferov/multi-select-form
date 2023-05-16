import React from 'react'
import clsx from 'clsx'
import { View } from 'app/design/view'
import { Text } from 'app/design/typography'

export type StepNumbersProps = {
  active: number
  steps: { name: string }[]
}

const StepNumbers: React.FC<StepNumbersProps> = ({ active, steps }) => {
  return (
    <View className="flex flex-row md:h-full md:flex-col">
      {steps.map((step, i) => (
        <View
          className="mb-6 flex flex-row items-center"
          data-testid={`step-${i + 1}`}
          key={i}
        >
          <View
            data-testid="step-number"
            className={clsx(
              'mr-4 flex h-[32px] w-[32px] items-center justify-center rounded-full border font-bold',
              {
                'border-white': active !== i,
                'bg-light border-transparent': active === i,
              }
            )}
          >
            <Text className={clsx({ 'text-white': active !== i })}>
              {i + 1}
            </Text>
          </View>
          <View className="hidden flex-col md:flex">
            <Text className="text-cool text-xs">STEP {i + 1}</Text>
            <Text className="text-sm font-medium text-white">{step.name}</Text>
          </View>
        </View>
      ))}
    </View>
  )
}

export default React.memo(StepNumbers)
