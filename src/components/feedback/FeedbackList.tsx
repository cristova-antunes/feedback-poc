import { useContext } from "react"
import FeedbackCtx, { FeedbackCtxProps } from "../../context/Feedback"
import FeedbackItem from "./FeedbackItem"
import { Feedback } from "../../interfaces/Feedback"

function FeedbackList() {
  const { feedbackList } = useContext(FeedbackCtx)

  return (
    <div className="flex flex-col">
      {feedbackList?.map((item: Feedback) => (
        <FeedbackItem key={item.id} feedbackItem={item} />
      ))}
    </div>
  )
}
export default FeedbackList
