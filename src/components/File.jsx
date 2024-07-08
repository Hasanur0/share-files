import { FaFilePdf } from 'react-icons/fa'
import { GoFile } from 'react-icons/go'
import { PiFilePdfLight } from 'react-icons/pi'
import useDeleteFile from '../files/useDeleteFile'
import useUser from '../authentication/useUser'
import Modal from './Modal'
import { useState } from 'react'
import toast from 'react-hot-toast'

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
    toast.success('Link copied to clipboard')
    console.log('Text copied to clipboard')
  } catch (err) {
    console.error('Failed to copy text: ', err)
  }
}

export default function File({ file }) {
  const [modalOpen, setModalOpen] = useState(false)
  const toggleModal = () => setModalOpen(!modalOpen)
  const { deleteFile, isDeleting } = useDeleteFile()
  const handleDelete = () => {
    const url = file.url // "https://ocjpdeixflntcizjppeb.supabase.co/storage/v1/object/public/files/0.06798183198717278396977483_1172172243665870_9042474106662892911_n (1).jpg"
    const name = url.slice(72)
    console.log(file)
    deleteFile({ fileName: name, id: file.id })
  }

  return (
    <>
      <div className="group/file flex flex-col relative text-center px-6 py-3 text-gray-600 rounded-md justify-center border">
        <GoFile className="text-8xl" />
        <p className="text-2xl mt-2.5">{file.fileName}</p>
        <div className="pointer-events-none absolute inset-0 flex flex-col gap-3  opacity-0 justify-center items-center bg-gray-100/10 group-hover/file:opacity-100 backdrop-blur-sm transition-all duration-300 scale-75 group-hover/file:scale-100 group-hover/file:pointer-events-auto">
          <button
            className="py-1.5 cursor-pointer bg-blue-500 hover:bg-blue-600 transition-colors duration-200 text-white font-medium px-4 rounded-md"
            onClick={() => copyToClipboard(file.url)}
          >
            Share
          </button>
          <button
            className="py-1.5 cursor-pointer bg-red-400 transition-colors duration-200 hover:bg-red-500 text-white font-medium px-4 rounded-md"
            onClick={toggleModal}
          >
            Delete
          </button>
        </div>
      </div>
      {modalOpen && (
        <Modal
          onClick={handleDelete}
          onClose={toggleModal}
          isDeleting={isDeleting}
        />
      )}
    </>
  )
}
