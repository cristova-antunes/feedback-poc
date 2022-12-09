import { createContext, ReactNode, useState } from "react"
import FeedbackData from "../data/data"
import { Feedback } from "../interfaces/Feedback"

interface FeedbackProviderProps {
  children: ReactNode
}

export interface FeedbackCtxProps {
  feedbackList: Feedback[] | null
  feedbackEdit: Feedback | null
  addFeedback: (item: Feedback) => void
  updateFeedback: (item: Feedback) => void
  SetEditFeedback: (item: Feedback) => void
  deleteFeedback: (feedbackId: string) => void
}

const FeedbackCtx = createContext<FeedbackCtxProps>({} as FeedbackCtxProps)

export const FeedbackProvider = ({ children }: FeedbackProviderProps) => {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>(FeedbackData)
  const [feedbackEdit, setFeedbackEdit] = useState<Feedback | null>(null)

  const addFeedback = (item: Feedback) => {
    setFeedbackList((prev) => [item, ...prev])
  }

  const updateFeedback = (item: Feedback) => {
    setFeedbackList((prev) => {
      return prev.map((previous) =>
        previous.id === item.id ? { ...item } : previous
      )
    })

    setFeedbackEdit(null)
  }

  const SetEditFeedback = (item: Feedback) => {
    setFeedbackEdit(item)
  }

  const deleteFeedback = (feedbackId: string) => {
    setFeedbackList((prev) => prev.filter((item) => item.id !== feedbackId))
  }

  return (
    <FeedbackCtx.Provider
      value={{
        feedbackList,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        updateFeedback,
        SetEditFeedback,
      }}
    >
      {children}
    </FeedbackCtx.Provider>
  )
}

export default FeedbackCtx
