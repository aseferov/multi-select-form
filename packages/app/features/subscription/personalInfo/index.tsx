import { TextInput } from 'app/design/textInput'
import { useForm, Controller } from 'react-hook-form'
import useSubscriptionForm from '../context/useSubscriptionForm'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import FormContainer from '../formContainer'

// Define the form validation schema using zod
const formSchema = z.object({
  firstName: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
})

type FormSchemaType = z.infer<typeof formSchema>

export function PersonalInfo() {
  const { data, setData, nextStep } = useSubscriptionForm()
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormSchemaType>({
    defaultValues: { ...data },
    resolver: zodResolver(formSchema),
  })

  const saveData = (_data: FormSchemaType) => {
    setData({ ...data, ..._data })
    nextStep()
  }

  return (
    <FormContainer
      title="Personal info"
      desc="Please provide your name, email address, and phone number."
      onSubmit={handleSubmit(saveData)}
    >
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Name"
            placeholder="e.g. Stephen King"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={errors.firstName?.message as string}
          />
        )}
        name="firstName"
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Email Address"
            placeholder="e.g stephenking@lorem.com"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={errors.email?.message as string}
          />
        )}
        name="email"
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Phone Number"
            placeholder="e.g +1 234 567 890"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={errors.phoneNumber?.message as string}
          />
        )}
        name="phoneNumber"
      />
    </FormContainer>
  )
}

export default PersonalInfo
