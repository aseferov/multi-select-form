import React, { useMemo } from 'react'
import clsx from 'clsx'
import useSubscriptionForm from '../context/useSubscriptionForm'
import PriceDisplay from '../priceDisplay'
import FormContainer from '../formContainer'
import { View } from 'app/design/view'
import { Checkbox } from 'app/design/checkbox'
import { Pressable } from 'app/design/pressable'
import { Text } from 'app/design/typography'
import { AddOnEntity } from 'api-services/AddOnsService'

const AddOns = () => {
  const { addOns, data, setData, nextStep } = useSubscriptionForm()

  const { addOns: selectedAddOns } = data

  const handleAddOnSelect = (addOn: AddOnEntity) => {
    const addOnIndex = selectedAddOns.findIndex((a) => a.id === addOn.id)

    // If the add-on is not selected, add it to the selectedAddOns array
    if (addOnIndex === -1) {
      setData({ ...data, addOns: [...selectedAddOns, addOn] })
    }
    // If the add-on is already selected, remove it from the selectedAddOns array
    else {
      setData({
        ...data,
        addOns: selectedAddOns.filter((p) => p.id !== addOn.id),
      })
    }
  }

  // Creating a Set of selected add-on IDs for efficient lookup
  const selectedAddOnIds = useMemo(
    () => new Set(selectedAddOns.map((addOn) => addOn.id)),
    [selectedAddOns]
  )

  return (
    <FormContainer
      title="Pick add-ons"
      desc="Add-ons help enhance your gaming experience"
      onSubmit={nextStep}
    >
      <View className="flex flex-col gap-3">
        {addOns.map((addOn) => (
          <Pressable
            onPress={() => {
              handleAddOnSelect(addOn)
            }}
            key={addOn.id}
            className={clsx(
              'border-lightgray hover:border-marine flex cursor-pointer flex-row items-center rounded-md border p-4',
              {
                'border-marine bg-alabaster': selectedAddOnIds.has(addOn.id),
              }
            )}
          >
            <View className="mr-3 md:mr-6">
              <Checkbox value={selectedAddOnIds.has(addOn.id)} />
            </View>
            <View className="flex-grow">
              <Text className="text-marine font-medium">{addOn.name}</Text>
              <Text className="text-cool text-xs">{addOn.desc}</Text>
            </View>
            <View>
              <PriceDisplay
                className="text-purplish text-xs"
                monthlyPrice={addOn.monthlyPrice}
                yearlyPrice={addOn.yearlyPrice}
                prefix={'+'}
              />
            </View>
          </Pressable>
        ))}
      </View>
    </FormContainer>
  )
}

export default AddOns
