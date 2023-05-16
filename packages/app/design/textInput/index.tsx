import {
  TextInput as ReactNativeTextInput,
  TextInputProps as ReactNativeTextInputProps,
} from 'react-native';
import { styled, StyledProps } from 'nativewind';
import { forwardRef } from 'react';
import clsx from 'clsx';
import { View } from '../view';
import { Text } from '../typography';

export const StyledTextInput = styled(ReactNativeTextInput);

export interface TextInputProps extends ReactNativeTextInputProps {
  label?: string;
  error?: string;
}

export const TextInput = forwardRef<
  ReactNativeTextInput,
  StyledProps<TextInputProps>
>(function Button({ className = '', label, error, ...props }, ref) {
  const errorStyles = error
    ? 'border-red-500 text-red-500 focus:border-red-500'
    : '';
  return (
    <View className="relative mb-4">
      <Text className="text-marine mb-1 block text-sm">{label}</Text>
      <StyledTextInput
        className={clsx(
          `border-lightgray placeholder-cool focus:border-marine block w-full rounded-md border bg-white px-4 py-2 text-sm ${errorStyles} ${className}`
        )}
        {...props}
        ref={ref}
      />
      {error && (
        <Text className="text-strawberry absolute right-0 top-0 mr-2 mt-1 text-sm font-medium">
          {error}
        </Text>
      )}
    </View>
  );
});
