import React from 'react';
import clsx from 'clsx';
import { View } from '../view';
import { Text } from '../typography';
import { Pressable } from '../pressable';
import { PressableProps } from 'react-native';
import { StyledProps } from 'nativewind';

export interface SwitchProps extends StyledProps<PressableProps> {
  labelLeft?: string;
  labelRight?: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = ({
  onValueChange,
  value,
  labelLeft,
  labelRight,
  ...props
}) => {
  return (
    <View className="flex cursor-pointer flex-row items-center">
      {!!labelLeft && (
        <Text
          className={clsx('mr-3 text-sm font-medium', {
            'text-marine': !value,
            'text-cool': value,
          })}
        >
          {labelLeft}
        </Text>
      )}

      <Pressable
        onPress={() => {
          onValueChange(!value);
        }}
        className="bg-marine flex w-[40px] flex-row items-center justify-between rounded-full px-1 py-1"
        {...props}
      >
        <View
          className={clsx(
            'h-[13px] w-[13px] rounded-full bg-white transition-all',
            {
              'translate-x-5': value,
            }
          )}
        />
      </Pressable>

      {!!labelRight && (
        <Text
          className={clsx('ml-3 text-sm font-medium', {
            'text-marine': value,
            'text-cool': !value,
          })}
        >
          {labelRight}
        </Text>
      )}
    </View>
  );
};
