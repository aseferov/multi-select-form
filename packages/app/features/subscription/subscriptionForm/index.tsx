import PersonalInfo from '../personalInfo'
import PlanSelect from '../planSelect'
import AddOns from '../addOns'
import Summary from '../summary'
import { View } from 'app/design/view'
import useSubscriptionForm from '../context/useSubscriptionForm'
import StepNumbers from '../stepNumbers'
import SidebarImage from '../sidebarImage/sidebarImage.web'

// Define the steps array with corresponding components
const steps = [
  {
    Component: PersonalInfo,
  },
  {
    Component: PlanSelect,
  },
  {
    Component: AddOns,
  },
  {
    Component: Summary,
  },
]

export function SubscriptionForm() {
  const { step } = useSubscriptionForm()

  const CurrentStep = steps[step]
  if (!CurrentStep) {
    return null
  }

  return (
    <View className="bg-magnolia min-h-screen md:flex md:items-center md:justify-center">
      <View className="flex min-h-screen flex-col md:h-[500px] md:min-h-min md:w-3/5 md:flex-row md:rounded-lg md:bg-white md:p-4">
        <View className="relative flex h-40 items-center bg-cover pt-8 md:h-full md:w-[242px] md:items-start md:justify-center md:pl-8 md:pt-8">
          <SidebarImage />
          <StepNumbers
            active={step}
            steps={[
              { name: 'YOUR INFO' },
              { name: 'SELECT PLAN' },
              { name: 'ADD-ONS' },
              { name: 'SUMMARY' },
            ]}
          />
        </View>

        <CurrentStep.Component />
      </View>
    </View>
  )
}

export default SubscriptionForm
