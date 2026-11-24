import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    axios.post('http://localhost:3000/api/new/create', formData)
    .then((res) => {
        toast.success('Post created successfully')
        console.log(res)
    })
    .catch((err) => {
        toast.error('Error creating post')
        console.log(err)
    })
  }

  return (
    <section className="create-post">
        <h1>Postify</h1>

        <form onSubmit={handleSubmit}>
            <input type="file" name="image" id="image" accept='image/*' />
            <input type="text" name="caption" id="caption" placeholder='Caption' required/>
            <button type='submit'>Submit</button>
        </form>
    </section>
  )
}

export default CreatePost