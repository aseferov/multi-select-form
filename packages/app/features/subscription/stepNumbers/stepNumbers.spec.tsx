import { render } from '@testing-library/react-native';
import StepNumbers from './';

describe('StepNumbers component', () => {
  it('should render correctly with step names and active step', () => {
    const mockSteps = [
      { name: 'Step 1' },
      { name: 'Step 2' },
      { name: 'Step 3' },
    ];
    const activeStep = 1; // Zero-indexed, this is the second step

    const { getAllByTestId } = render(
      <StepNumbers active={activeStep} steps={mockSteps} />
    );

    const stepNumberElements = getAllByTestId('step-number');
    mockSteps.forEach((step, index) => {
      expect(stepNumberElements[index].children[0]).toEqual(`${index + 1}`);
    });
  });
});
