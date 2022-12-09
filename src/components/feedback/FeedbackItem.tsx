import Card from "../ui/Card"
import { useContext } from "react"
import FeedbackCtx from "../../context/Feedback"
import { Feedback } from "../../interfaces/Feedback"
import { BsXLg, BsPencil } from "react-icons/bs"

interface FeedbackItemProps {
  feedbackItem: Feedback
}

function FeedbackItem({ feedbackItem }: FeedbackItemProps) {
  const { deleteFeedback, SetEditFeedback } = useContext(FeedbackCtx)

  return (
    <Card>
      <div className="flex mb-6">
        <div className="flex-1">
          <p className="font-bold">{feedbackItem.user}</p>
        </div>
        <div className="flex gap-5">
          <BsPencil
            size={20}
            className="text-pink-600 hover:text-pink-900"
            onClick={() => SetEditFeedback(feedbackItem)}
          />
          <BsXLg
            size={20}
            className="text-pink-600 hover:text-pink-900"
            onClick={() => deleteFeedback(feedbackItem.id)}
          />
        </div>
      </div>

      <div className="flex gap-3 lg:items-center">
        <p className="h-8 w-8 aspect-square rounded-full bg-pink-600 text-white grid place-content-center">
          {feedbackItem.rating}
        </p>

        <div>
          <p>{feedbackItem.text}</p>
        </div>
      </div>
    </Card>
  )
}

export default FeedbackItem
