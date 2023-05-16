import { View, PressableProps, Platform } from 'react-native';
import { StyledProps } from 'nativewind';
import { forwardRef } from 'react';
import clsx from 'clsx';
import { Text } from '../typography';
import { Pressable } from '../pressable';

export interface ButtonProps extends PressableProps {
  children: string;
  color?: 'primary' | 'text';
}

export const Button = forwardRef<View, StyledProps<ButtonProps>>(
  function Button(
    { children, className = '', color = 'primary', ...props },
    ref
  ) {
    const nativeAProps = Platform.select<Partial<ButtonProps>>({
      web: {},
      default: {},
    });

    return (
      <Pressable
        className={clsx(
          'rounded-md px-6 py-2',
          { 'bg-marine': color === 'primary' },
          className
        )}
        {...props}
        {...nativeAProps}
        ref={ref}
      >
        <Text
          className={clsx('text-sm md:text-base', {
            'text-white': color === 'primary',
            'text-cool': color === 'text',
          })}
        >
          {children}
        </Text>
      </Pressable>
    );
  }
);
