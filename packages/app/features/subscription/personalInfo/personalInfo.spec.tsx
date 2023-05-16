import { render, fireEvent, waitFor } from '@testing-library/react-native';
import PersonalInfo from './';
import useSubscriptionForm from '../context/useSubscriptionForm';

jest.mock('../context/useSubscriptionForm');

describe('PersonalInfo component', () => {
  it('should render and submit form with valid data', async () => {
    const mockSetData = jest.fn();
    const mockNextStep = jest.fn();

    (useSubscriptionForm as jest.Mock).mockReturnValue({
      data: { firstName: '', email: '', phoneNumber: '' },
      setData: mockSetData,
      nextStep: mockNextStep,
    });

    const { getByPlaceholderText, getByText } = render(<PersonalInfo />);

    const nameInput = getByPlaceholderText('e.g. Stephen King');
    const emailInput = getByPlaceholderText('e.g stephenking@lorem.com');
    const phoneInput = getByPlaceholderText('e.g +1 234 567 890');

    fireEvent.changeText(nameInput, 'John Doe');
    fireEvent.changeText(emailInput, 'john.doe@example.com');
    fireEvent.changeText(phoneInput, '+1 234 567 890');
    fireEvent(nameInput, 'blur');
    fireEvent(emailInput, 'blur');
    fireEvent(phoneInput, 'blur');

    fireEvent.press(getByText('Next Step'));

    await waitFor(() => {
      expect(mockSetData).toHaveBeenCalledWith({
        firstName: 'John Doe',
        email: 'john.doe@example.com',
        phoneNumber: '+1 234 567 890',
      });
      expect(mockNextStep).toHaveBeenCalledTimes(1);
    });
  });
});
