interface SkillI {
  title: string
  experience: number
}

interface UserI {
  name?: string
  email: string
  password: string
  skills: Array<string | SkillI>
}

export const createUser = ({name = '', email, password, skills}: UserI) => {
  const user = {
    name,
    email,
    password,
    skills
  }

  return user
}