import { render, fireEvent } from '@testing-library/react';
import { Checkbox } from './';

describe('Checkbox Web', () => {
  it('renders with the correct label', () => {
    const { getByText } = render(<Checkbox label="My checkbox" />);
    expect(getByText('My checkbox')).toBeInTheDocument();
  });

  it('calls the onValueChange prop when checked', () => {
    const onValueChange = jest.fn();
    const { getByRole } = render(
      <Checkbox label="My checkbox" onValueChange={onValueChange} />
    );
    const checkbox = getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(onValueChange).toHaveBeenCalledTimes(1);
    expect(onValueChange).toHaveBeenCalledWith(true);
  });

  it('sets the checked state based on the value prop', () => {
    const { getByRole } = render(<Checkbox value={true} />);
    const checkbox = getByRole('checkbox');

    expect(checkbox).toBeChecked();
  });
});
