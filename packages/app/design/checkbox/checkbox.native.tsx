import ReactNativeCheckBox, { CheckboxProps } from 'expo-checkbox'
import { styled } from 'nativewind'
import { forwardRef } from 'react'

export const StyledCheckBox = styled(ReactNativeCheckBox)

export const Checkbox = forwardRef<ReactNativeCheckBox, CheckboxProps>(
  function Checkbox(props, ref) {
    return <StyledCheckBox {...props} ref={ref} />
  }
)
