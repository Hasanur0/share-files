import supabase from './supabase'

export const getFiles = async (id) => {
  console.log(id)
  const { data, error } = await supabase.from('files').select().eq('userId', id)
  if (error) throw new Error(error.message)
  console.log(data)
  return data
}

export const uploadFile = async ({ fileName, file, id }) => {
  const uploadName = `${Math.random()}${file.name}`
  const url = `https://ocjpdeixflntcizjppeb.supabase.co/storage/v1/object/public/files/${uploadName}`
  const { data, error } = await supabase.storage
    .from('files')
    .upload(uploadName, file, {
      cacheControl: '3600',
      upsert: false,
    })
  if (data) {
    const { error } = await supabase
      .from('files')
      .insert({ fileName, userId: id, url })
  }
  if (error) throw new Error(error.message)
}

export const deleteFile = async ({ fileName, id }) => {
  console.log(fileName, id)
  const { data, error } = await supabase.storage
    .from('files')
    .remove([`${fileName}`])
  if (error) throw new Error(error.message)

  const { error: fileDbError } = await supabase
    .from('files')
    .delete()
    .eq('id', id)
  //   if (data) {
  //   }
  console.log(fileDbError)
}
