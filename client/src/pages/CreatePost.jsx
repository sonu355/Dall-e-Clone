import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { preview } from '../assets'
import { FormField, Loader } from '../components'
import { getRandomPromt } from '../utils'

const CreatePost = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  })
  const [generateImage, setGenerateImage] = useState(false)
  const [loading, setLoading] = useState(false)
  return (
    <section>
      <div>
            <h1 className='font-extrabold text-[#222328] text-[32px]'>
                Create
            </h1>
            <p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>
                Create imaginative and visually images through DALL-E AI and share them with the community
            </p>
        </div>
    </section>
  )
}

export default CreatePost
