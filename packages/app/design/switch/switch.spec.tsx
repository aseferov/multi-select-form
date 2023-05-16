import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Switch } from './';

describe('Switch component', () => {
  it('should call onValueChange function when switch is pressed', () => {
    const onValueChange = jest.fn();
    const { getByTestId } = render(
      (
        <Switch value={false} onValueChange={onValueChange} testID="switch" />
      ) as React.ReactElement
    );

    fireEvent.press(getByTestId('switch'));

    expect(onValueChange).toHaveBeenCalledWith(true);
  });
});
