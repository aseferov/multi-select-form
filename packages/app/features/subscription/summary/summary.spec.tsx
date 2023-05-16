import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Summary from '../Summary';
import SubscriptionFormProvider from '../context/SubscriptionFormProvider';

describe('Summary component', () => {
  test('renders correctly', () => {
    const { getByText } = render(
      (
        <SubscriptionFormProvider>
          <Summary />
        </SubscriptionFormProvider>
      ) as React.ReactElement
    );

    expect(getByText('Finishing up')).toBeDefined();
    expect(
      getByText('Double-check everything looks OK before confirming.')
    ).toBeDefined();
    expect(getByText('Total (per month)')).toBeDefined();
  });

  test('displays success message after form submission', () => {
    const { getByText } = render(
      <SubscriptionFormProvider>
        <Summary />
      </SubscriptionFormProvider>
    );

    fireEvent.press(getByText('Confirm'));

    expect(getByText('Thank you!')).toBeDefined();
  });
});
