import { createContext, ReactNode, useState } from "react"
import FeedbackData from "../data/data"
import { Feedback } from "../interfaces/Feedback"

interface FeedbackProviderProps {
  children: ReactNode
}

export interface FeedbackCtxProps {
  feedbackList: Feedback[] | null
  addFeedback: (item: Feedback) => void
}

const FeedbackCtx = createContext<FeedbackCtxProps>({} as FeedbackCtxProps)

export const FeedbackProvider = ({ children }: FeedbackProviderProps) => {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>(FeedbackData)

  const addFeedback = (item: Feedback) => {
    setFeedbackList((prev) => [item, ...prev])
  }

  return (
    <FeedbackCtx.Provider value={{ feedbackList, addFeedback }}>
      {children}
    </FeedbackCtx.Provider>
  )
}

export default FeedbackCtx
