import { forwardRef } from 'react'
import { CheckboxProps } from './types'

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ value, label, error, onValueChange }, ref) {
    return (
      <div className="block">
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="accent-purplish h-4 w-4"
              onChange={(e) => {
                onValueChange && onValueChange(e.target.checked)
              }}
              checked={value}
              ref={ref}
            />
            {label && (
              <span className="ml-2">Medium size checkbox (recommended) </span>
            )}
          </label>
        </div>
      </div>
    )
  }
)
