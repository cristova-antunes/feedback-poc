import Picker from "../ui/Picker"
import { useRef, useState, useContext, ChangeEvent } from "react"
import { v4 as uuidv4 } from "uuid"
import Card from "../ui/Card"
import FeedbackCtx from "../../context/Feedback"

function FeedbackForm() {
  const { addFeedback } = useContext(FeedbackCtx)

  const nameRef = useRef<HTMLInputElement | null>(null)
  const feedbackRef = useRef<HTMLTextAreaElement | null>(null)

  const [pickerValue, setPickerValue] = useState<number>(0)
  const onPickerChange = (curr: number) => {
    setPickerValue(curr)
  }

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    addFeedback({
      id: uuidv4(),
      user: nameRef.current!.value,
      text: feedbackRef.current!.value,
      rating: pickerValue,
    })

    nameRef.current!.value = ""
    feedbackRef.current!.value = ""
    setPickerValue(0)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h1 className="text-4xl font-semibold text-gray-800 text-center mb-8">
          How would you rate this service?
        </h1>
        <Picker defaultValue={pickerValue} max={10} onChange={onPickerChange} />

        <fieldset className="mx-auto w-1/2 mt-8">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={nameRef}
            className="w-full"
            required
          />

          <label htmlFor="feedback">Enter your feedback</label>
          <textarea
            name="feedback"
            id="feedback"
            ref={feedbackRef}
            className="w-full"
            required
          />

          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </Card>
  )
}
export default FeedbackForm
