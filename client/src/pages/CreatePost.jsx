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

  const handleSubmit = () => {

  }
  const handleChange = () => {

  }
  const handleSupriseMe = () => {

  }
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
        <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-5'>
            <FormField 
              LabelName = "Your Name"
              type = "text"
              name = "name"
              placeholder = "John Doe"
              value = {form.name}
              handleChange = {handleChange}
            />
            <FormField 
              LabelName = "Prompt"
              type = "text"
              name = "prompt"
              placeholder = "an armchair in the shape of an avocado"
              value = {form.prompt}
              handleChange = {handleChange}
              isSupriseMe
              handleSupriseMe = {handleSupriseMe}
            /> 
          </div>
        </form>
    </section>
  )
}
export default CreatePost
