import React, { useState } from 'react'

function Login() {
  const [form, setForm] = useState({
    name:"",
    email : "",
    password:""
  })
  const handleInputChange = (e) => {
    const {name,value}= e.target
    setForm ({...form, [name]: value})  
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(form.name.trim()==="" || form.password.trim()===""){
      alert("name and password are required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(form.email)){ 
      alert("invalid email");
      return;
    }
  }
  return (
    <div>
      
        {/* <!-- component --> */}
<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-[50%] m-auto mt-[10rem] " onSubmit={handleSubmit}>
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
      fullname
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="username" type="text"value={form.username} onChange={handleInputChange} placeholder="fullname"/>
    </div>
    <div className="mb-6">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
     email
      </label>
      <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" name="email" type="email" value={form.email} onChange={handleInputChange} placeholder="info@yahoo.com"/>
      <p class="text-red text-xs italic">Please enter email address</p>
    </div>
    <div className="mb-6">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" name="password" type="password" value={form.password} onChange={handleInputChange} placeholder="******************"/>
      <p class="text-red text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button" >
     login
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
        Forgot Password?
      </a>
    </div>
</form>
    </div>
  )
}

export default Login