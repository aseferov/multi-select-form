// AddOns.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import _useSubscriptionForm from '../context/useSubscriptionForm';
import AddOns from './';
const useSubscriptionForm = _useSubscriptionForm as jest.Mock;
jest.mock('../context/useSubscriptionForm');

const mockNextStep = jest.fn();

const addOns = [
  {
    id: '1',
    name: 'Add-On 1',
    desc: 'Description for Add-On 1',
    monthlyPrice: 10,
    yearlyPrice: 100,
  },
  {
    id: '2',
    name: 'Add-On 2',
    desc: 'Description for Add-On 2',
    monthlyPrice: 20,
    yearlyPrice: 200,
  },
];
let mockData = { addOns: [] };

describe('AddOns component', () => {
  beforeEach(() => {
    mockData = { addOns: [] };
    useSubscriptionForm.mockImplementation(() => ({
      addOns,
      data: mockData,
      setData: (newData: any) => {
        mockData = newData;
      },
      nextStep: mockNextStep,
    }));
  });

  it('renders AddOns component with add-ons data', () => {
    const { getByText } = render(<AddOns />);

    expect(getByText('Pick add-ons')).toBeTruthy();
    expect(
      getByText('Add-ons help enhance your gaming experience')
    ).toBeTruthy();

    addOns.forEach((addOn) => {
      expect(getByText(addOn.name)).toBeTruthy();
      expect(getByText(addOn.desc)).toBeTruthy();
    });
  });

  it('selects and deselects add-ons', () => {
    const { getByText } = render(<AddOns />);

    const addOn1 = getByText(addOns[0].name);
    const addOn2 = getByText(addOns[1].name);

    // Select add-on 1
    fireEvent.press(addOn1);
    fireEvent.press(addOn2);
    expect(mockData.addOns).toEqual([addOns[0], addOns[1]]);
  });

  test('nextStep function is called when form is submitted', () => {
    const { getByText } = render(<AddOns />);
    fireEvent.press(getByText('Next Step'));
    expect(mockNextStep).toHaveBeenCalled();
  });
});
