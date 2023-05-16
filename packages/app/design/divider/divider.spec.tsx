import React from 'react';
import { render } from '@testing-library/react-native';
import { Divider } from './';

describe('Divider', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      (<Divider testID="divider" />) as React.ReactElement
    );
    const divider = getByTestId('divider');
    expect(divider).toBeDefined();
  });
});
