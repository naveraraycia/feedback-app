import { Navigate, useNavigate, Routes, Route } from 'react-router-dom'

function Post() {
  const status = 200

  // define navigate
  const navigate = useNavigate();

  const onClick = () => {
    console.log('Hello');
    navigate('/about')
  }
  if(status === 404) {
    // If the status is 404 NOT FOUND, then navigate to a different page
    return <Navigate to='/notfound' />
  }
  return (
    <div>
      <h1>Post is okay!</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path='/show' element={<h1>hello world</h1>} />
      </Routes>
 
    </div>
  )
}

export default Post