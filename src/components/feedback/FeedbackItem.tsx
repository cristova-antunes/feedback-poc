import Card from "../ui/Card"
import { Feedback } from "../../interfaces/Feedback"

interface FeedbackItemProps {
  feedbackItem: Feedback
}

function FeedbackItem({ feedbackItem }: FeedbackItemProps) {
  return (
    <Card>
      <div className="flex gap-3 lg:items-center">
        <p className="h-8 w-8 aspect-square rounded-full bg-pink-600 text-white grid place-content-center">
          {feedbackItem.rating}
        </p>
        <div>
          <p className="font-bold">{feedbackItem.user}</p>
          <p>{feedbackItem.text}</p>
        </div>
      </div>
    </Card>
  )
}

export default FeedbackItem
