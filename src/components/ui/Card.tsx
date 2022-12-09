import { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  styleClass?: string
}

function Card({ children, styleClass }: CardProps) {
  return (
    <div
      className={`bg-gray-100 shadow-sm p-4 lg:p-6 rounded-md mb-5 max-w-7xl w-full mx-auto ${
        styleClass ? styleClass : ""
      }`}
    >
      {children}
    </div>
  )
}
export default Card
