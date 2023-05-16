import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SubscriptionScreen } from '../../features/subscription/screen'

const Stack = createNativeStackNavigator<{
  subscription: undefined
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="subscription"
        component={SubscriptionScreen}
        options={{
          title: 'Subscription',
        }}
      />
    </Stack.Navigator>
  )
}
