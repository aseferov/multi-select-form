import React from 'react';
import { ViewProps } from 'react-native';
import { StyledProps } from 'nativewind';
import { View } from '../view';
import clsx from 'clsx';

export const Divider: React.FC<StyledProps<ViewProps>> = ({
  className,
  ...props
}) => {
  return (
    <View
      className={clsx('border-lightgray my-3 border-b', className)}
      {...props}
    />
  );
};
