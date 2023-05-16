import { render } from '@testing-library/react-native';
import useSubscriptionForm from '../context/useSubscriptionForm';
import PriceDisplay from './';

jest.mock('../context/useSubscriptionForm');

describe('PriceDisplay component', () => {
  it('should render correctly for monthly duration', () => {
    (useSubscriptionForm as jest.Mock).mockReturnValue({
      data: {
        plansDuration: 'monthly',
      },
    });

    const { getByText } = render(
      <PriceDisplay monthlyPrice={10} yearlyPrice={100} />
    );
    expect(getByText('$10/mo')).toBeTruthy();
  });

  it('should render correctly for yearly duration', () => {
    (useSubscriptionForm as jest.Mock).mockReturnValue({
      data: {
        plansDuration: 'yearly',
      },
    });

    const { getByText } = render(
      <PriceDisplay monthlyPrice={10} yearlyPrice={100} />
    );
    expect(getByText('$100/yr')).toBeTruthy();
  });
});
