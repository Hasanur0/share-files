import File from '../components/File'
import Spinner from '../components/Spinner'
import useFiles from './useFiles'

export default function Files() {
  const { files, isLoading } = useFiles()
  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    )
  return (
    <div className="flex gap-4 relative">
      {files.map((file) => (
        <File key={file.id} file={file} />
      ))}
    </div>
  )
}
