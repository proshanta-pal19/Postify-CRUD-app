import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={'Postify | Home'}></Route>
        <Route path='/create' element={<CreatePost />}></Route>
        <Route path='/feed' element={<Feed />}></Route>
      </Routes>
    </Router>
  )
}

export default App