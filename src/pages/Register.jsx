import {Form, Link, useActionData} from "react-router-dom"
import {FormInput , SubmitBtn} from "../components"
import '../css/Auth.css'
// import {FormInput,SubmitBtn} from '../components'

// import { useRegister } from '../hooks/useRegister'
import { useEffect } from "react"

export const action = async ({request}) =>{
    const formData = await request.formData()
    let displayName = formData.get('Name')
    let photoUrl = formData.get('Photo') 
    let email = formData.get('Email')
    let password = formData.get('Password')
    return {displayName,photoUrl,email,password}
}

export default function Register() {
  // const data = useActionData()
  // const {register} = useRegister()
  // console.log(register);

  // useEffect(()=>{
  //   if(register){
  //     console.log(register);
  //     register(data)
  //   }
  // },[data])

    return(
        <div className="min-h-screen  grid place-items-center green-line">
      <div className="sm:max-w-96 w-full max-w-80">
      <div class="wrapper mb-10">
            <svg>
                <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                    Register 
                </text>
            </svg>
        </div>
        <Form method="POST">
        <FormInput type="text" label="user name" name="Name"  url={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4'/%3E%3C/svg%3E"}/>
            <FormInput type="email" label="email" name="Email"  url={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='black' stroke-linecap='round' stroke-width='2'%3E%3Crect width='18' height='14' x='3' y='5' stroke-dasharray='64' stroke-dashoffset='64' rx='1'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' dur='0.6s' values='64;0'/%3E%3C/rect%3E%3Cpath stroke-dasharray='24' stroke-dashoffset='24' d='M3 6.5L12 12L21 6.5'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='0.6s' dur='0.4s' values='24;0'/%3E%3C/path%3E%3C/g%3E%3C/svg%3E"}/>
            <FormInput type="url" label="photo url" name="Photo" url={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M15 8h.01M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z'/%3E%3Cpath d='m3 16l5-5c.928-.893 2.072-.893 3 0l5 5'/%3E%3Cpath d='m14 14l1-1c.928-.893 2.072-.893 3 0l3 3'/%3E%3C/g%3E%3C/svg%3E"}/>
            <FormInput type="password" label="password" name="Password" url={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='black' d='M21 2a8.998 8.998 0 0 0-8.612 11.612L2 24v6h6l10.388-10.388A9 9 0 1 0 21 2m0 16a7.013 7.013 0 0 1-2.032-.302l-1.147-.348l-.847.847l-3.181 3.181L12.414 20L11 21.414l1.379 1.379l-1.586 1.586L9.414 23L8 24.414l1.379 1.379L7.172 28H4v-3.172l9.802-9.802l.848-.847l-.348-1.147A7 7 0 1 1 21 18'/%3E%3Ccircle cx='22' cy='10' r='2' fill='black'/%3E%3C/svg%3E"} />

        <div className="mt-5">
          <SubmitBtn text="Register" />
        <p className="text-center"> You have already a accaunt? <Link to="/login" className="link text-blue-400 text-lg">Login</Link></p>
        </div> 
        </Form>
      </div>
    </div>
    )
}