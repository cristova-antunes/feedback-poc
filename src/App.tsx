import Header from "./components/layout/Header"
import FeedbackList from "./components/feedback/FeedbackList"
import { FeedbackProvider } from "./context/Feedback"
import FeedbackForm from "./components/feedback/FeedbackForm"

function App() {
  return (
    <div className="App">
      <Header />
      <FeedbackProvider>
        <main className="main">
          <FeedbackForm />
          <FeedbackList />
        </main>
      </FeedbackProvider>
    </div>
  )
}

export default App
