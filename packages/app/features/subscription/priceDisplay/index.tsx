import React from 'react'
import { Text } from 'app/design/typography'
import useSubscriptionForm from '../context/useSubscriptionForm'
import { StyledProps } from 'nativewind'
import { TextProps } from 'react-native'

interface Props extends StyledProps<TextProps> {
  monthlyPrice: number
  yearlyPrice: number
  prefix?: string
}

const PriceDisplay: React.FC<Props> = ({
  prefix,
  monthlyPrice,
  yearlyPrice,
  ...props
}) => {
  const { data } = useSubscriptionForm()

  return (
    <Text {...props}>
      {prefix}
      {data.plansDuration === 'monthly'
        ? `$${monthlyPrice}/mo`
        : `$${yearlyPrice}/yr`}
    </Text>
  )
}

export default React.memo(PriceDisplay)
