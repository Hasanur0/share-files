import supabase from './supabase'

export async function signup({ fullName, email, password }) {
  console.log(fullName, email, password)

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
      },
    },
  })

  if (error) {
    throw new Error(error.message)
  }
  console.log(data)
  return data
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    throw new Error(error.message)
  }
  console.log(data)
  return data
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession()
  // console.log('session', session)
  if (!session.session) return null
  const { data, error } = await supabase.auth.getUser()
  // console.log(data)
  if (error) {
    throw new Error(error.message)
  }
  return data?.user
}

export async function logout() {
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.log(error)
    throw new Error(error.message)
  }
}
