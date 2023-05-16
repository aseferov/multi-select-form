import { useContext } from 'react'
import SubscriptionFormContext from './SubscriptionFormContext'

const useSubscriptionForm = () => {
  return useContext(SubscriptionFormContext)
}

export default useSubscriptionForm
