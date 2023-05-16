import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import PlanSelect from './';
import _useSubscriptionForm from '../context/useSubscriptionForm';
const useSubscriptionForm = _useSubscriptionForm as jest.Mock;
jest.mock('../context/useSubscriptionForm');

const mockNextStep = jest.fn();

const plans = [
  {
    id: 1,
    icon: 'icon1',
    name: 'Arcade',
    monthlyPrice: 9,
    yearlyPrice: 120,
    yearlyFreeMonths: 2,
  },
  {
    id: 2,
    icon: 'icon2',
    name: 'Advanced',
    monthlyPrice: 9,
    yearlyPrice: 120,
    yearlyFreeMonths: 2,
  },
  {
    id: 3,
    icon: 'icon3',
    name: 'Pro',
    monthlyPrice: 9,
    yearlyPrice: 120,
    yearlyFreeMonths: 2,
  },
];
let mockData = { plan: null, plansDuration: 'monthly' };

describe('PlanSelect', () => {
  beforeEach(() => {
    mockData = {
      plan: null,
      plansDuration: 'monthly',
    };
    useSubscriptionForm.mockImplementation(() => ({
      plans,
      data: mockData,
      setData: (newData: any) => {
        mockData = newData;
      },
      nextStep: mockNextStep,
    }));
  });

  it('should render all plans', () => {
    const { getByText } = render(<PlanSelect />);

    const basicPlan = getByText('Arcade');
    const advancedPlan = getByText('Advanced');
    const premiumPlan = getByText('Pro');

    expect(basicPlan).toBeDefined();
    expect(advancedPlan).toBeDefined();
    expect(premiumPlan).toBeDefined();
  });

  it('should change selected plan when pressing on a plan', () => {
    const { getByText } = render(<PlanSelect />);

    const proPlan = getByText('Pro');

    fireEvent.press(proPlan);

    expect(mockData.plan).toEqual(plans[2]);
  });
});
