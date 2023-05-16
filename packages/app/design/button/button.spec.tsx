import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from './';

describe('Button', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      (<Button>Click me</Button>) as React.ReactElement
    );
    expect(getByText('Click me')).toBeTruthy();
  });

  it('calls onPress handler when clicked', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      (<Button onPress={onPress}>Click me</Button>) as React.ReactElement
    );
    fireEvent.press(getByText('Click me'));
    expect(onPress).toHaveBeenCalled();
  });
});
