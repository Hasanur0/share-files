import { useState } from 'react'
import useUploadFile from './useUploadFile'
import useUser from '../authentication/useUser'
import SpinnerSmall from './../components/SpinnerSmall'

export default function Upload() {
  const [fileName, setFileName] = useState('')
  const [file, setFile] = useState(null)
  const { uploadFile, isUploading } = useUploadFile()
  const { user } = useUser()
  console.log(user)
  const handleSubmit = (e) => {
    e.preventDefault()
    uploadFile({ fileName, file, id: user.id })
  }
  return (
    <div className="col-start-3 h-full col-span-10 bg-neutral-100 flex justify-center pt-24">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col">
          <label className="font-medium  text-gray-500" htmlFor="name">
            File Name
          </label>
          <input
            placeholder="Enter the file name"
            type="text"
            id="name"
            className="text-base py-2 outline-none focus:outline-blue-400 rounded-sm tracking-wide font-normal px-2"
            onChange={(e) => setFileName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium  text-gray-500" htmlFor="file">
            Select a file
          </label>
          <input
            type="file"
            id="file"
            onChange={(e) => {
              setFile(e.target.files[0])
            }}
          />
        </div>
        <button className="bg-blue-500 font-medium text-lg py-2 rounded-md text-gray-50 outline-none focus:outline-blue-500">
          {isUploading ? <SpinnerSmall /> : 'Upload'}
        </button>
      </form>
    </div>
  )
}
