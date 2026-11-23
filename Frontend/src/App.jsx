import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={'Postify | Home'}></Route>
      </Routes>
    </Router>
  )
}

export default App