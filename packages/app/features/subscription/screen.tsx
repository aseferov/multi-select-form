import SignUpFormProvider from './context/SubscriptionFormProvider';
import SubscriptionForm from './subscriptionForm';

export function SubscriptionScreen() {
  return (
    <SignUpFormProvider>
      <SubscriptionForm />
    </SignUpFormProvider>
  );
}
