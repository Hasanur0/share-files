import SpinnerSmall from './SpinnerSmall'

export default function Modal({ onClose, onClick, isDeleting }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900/10 backdrop-blur-sm z-10">
      <div className="bg-gray-50 py-4 px-4 rounded-md">
        <h2 className="text-xl font-medium">
          Do you want to delete this file?
        </h2>
        <div className="flex justify-between mt-6 text-base">
          <button className="border py-2 px-3 rounded-md" onClick={onClose}>
            Cancel
          </button>
          <button
            className=" py-2 px-3 rounded-md bg-red-400 hover:bg-red-500 transition-colors duration-200 text-white"
            onClick={onClick}
            disabled={isDeleting}
          >
            {isDeleting ? <SpinnerSmall /> : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  )
}
