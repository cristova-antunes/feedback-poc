import { ChangeEvent } from "react"

interface PickerProps {
  defaultValue: number
  max: number
  onChange: (curr: number) => void
}

function Picker({ defaultValue, max, onChange }: PickerProps) {
  const onRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(+e.target.value)
  }

  return (
    <ul className="flex gap-2 justify-center picker-form">
      {Array.from({ length: max }).map((_, i) => {
        //Index stuff
        i += 1

        return (
          <li
            key={i}
            className="h-8 w-8 aspect-square rounded-full bg-pink-600 text-white grid place-content-center relative"
          >
            <label htmlFor={`picker_${i}`}>{i}</label>
            <input
              type="radio"
              name="picker"
              id={`picker_${i}`}
              value={i}
              onChange={onRadioChange}
              checked={i === defaultValue}
              className="appearance-none absolute inset-0"
            />
          </li>
        )
      })}
    </ul>
  )
}
export default Picker
