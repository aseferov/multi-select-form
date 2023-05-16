import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { TextInput } from './';

describe('TextInput', () => {
  it('renders the label', () => {
    const label = 'Username';
    const { getByText } = render(
      (
        <TextInput onChangeText={jest.fn()} value="" label={label} />
      ) as React.ReactElement
    );
    expect(getByText(label)).toBeDefined();
  });

  it('renders the error message', () => {
    const error = 'Invalid input';
    const { getByText } = render(
      (
        <TextInput onChangeText={jest.fn()} value="" error={error} />
      ) as React.ReactElement
    );
    expect(getByText(error)).toBeDefined();
  });

  it('calls the onChangeText function when text changes', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      (
        <TextInput onChangeText={onChangeText} value="" testID="textbox" />
      ) as React.ReactElement
    );
    const input = getByTestId('textbox');
    const text = 'hello';
    fireEvent.changeText(input, text);
    expect(onChangeText).toHaveBeenCalledWith(text);
  });
});
