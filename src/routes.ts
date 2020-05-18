import { Request, Response} from 'express'
import { createUser } from './services/CreateUser.service';

export const helloWorld = (request: Request, response: Response) => {
  const user = createUser({
    name: 'Marília',
    email: 'gabrielesuzart@teste.com',
    password: '1234',
    skills: ['Node.js', 'ReactJS', 'React Native', { title: 'HTML', experience: 100 }],
  })

  return response.json({ message: 'Hello World' })
}
