import { useContext } from "react";
import { AuthContext } from "../Context-Api/ContextApi";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const {user,registerForm}=useContext(AuthContext)

  const navigate=useNavigate()

  const handleSubmitForm=(e)=>{
    e.preventDefault()
    const name=e.target.name.value 
    const email=e.target.email.value 
    const password=e.target.password.value 
    
    console.log(name,email,password ,user,)

    registerForm(email,password)
    .then(result=>{
      console.log(result.user)
      e.target.reset()
      navigate("/")
    })
    .catch(error=>{
      console.error(error)
    })

    
  }
  
    
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="">
          <div className="text-center lg:text-left p-6">
            <h1 className="text-5xl font-bold">Register now!</h1>
            
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmitForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your name</span>
                </label>
                <input type="text" placeholder="your name" className="input input-bordered" name="name" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button  className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;