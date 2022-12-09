import { useContext } from "react"
import FeedbackCtx from "../../context/Feedback"
import FeedbackItem from "./FeedbackItem"
import { Feedback } from "../../interfaces/Feedback"
import Card from "../ui/Card"

function FeedbackList() {
  const { feedbackList } = useContext(FeedbackCtx)
  const avgReviews = () => {
    if (feedbackList) {
      return (
        feedbackList?.reduce((acc, cur) => acc + cur.rating, 0) /
        feedbackList?.length
      )
    }
  }

  return (
    <>
      <Card styleClass="flex justify-between font-bold">
        <p>{feedbackList !== null && `${feedbackList.length} reviews`}</p>
        <p>{feedbackList !== null && `Average: ${avgReviews()}`}</p>
      </Card>
      <div className="flex flex-col">
        {feedbackList?.map((item: Feedback) => (
          <FeedbackItem key={item.id} feedbackItem={item} />
        ))}
      </div>
    </>
  )
}
export default FeedbackList
