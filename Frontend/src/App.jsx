import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={'Postify | Home'}></Route>
        <Route path='/create' element={<CreatePost />}></Route>
      </Routes>
    </Router>
  )
}

export default App