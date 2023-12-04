import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const LoginPage = () => {

  const navigate = useNavigate();

  const {signInWithGoogle, loginWithEmailPassword}= useContext(AuthContext);

  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    console.log('register clicked');
    const form= e.target;
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginWithEmailPassword(email,password)
      .then((user)=>{
        console.log(user);
        form.reset();
        navigate('/');
      })
      .catch(error=>{
        // alert('Invalid User or Password');
        Swal.fire("Invalid User or Password");
        form.reset();
      })
  }

  const loginWithGoogle = (e)=>{
    e.preventDefault();
    
    signInWithGoogle()
      .then(result=>{
        console.log(result.user)
        navigate('/');
      })
      .catch(error=>{
        console.log(error.message);
      })
  }

  return (
    <div>
      <div className="h-screen w-3/5 mx-auto">
        <h2 className="mb-10 text-5xl text-center">Login</h2>

        <form className="space-y-2 flex flex-col justify-center" onSubmit={handleLoginWithEmail}>
          <input type="text" name="email" className="p-3 border-2" placeholder="Email" />
          <input type="password" name="password" className="p-3 border-2" placeholder="Password" />
          <input type="submit" className="btn btn-primary text-white text-lg" value="Login" />

        </form>

        <h2 className="text-xl text-center my-2">Or</h2>
        
        <button onClick={loginWithGoogle} className="w-full btn bg-red-500 text-white text-lg">Login With Google</button>

        <p className="text-center text-xl my-2">New here? 
          <Link to="/register" className="text-blue-500 btn btn-neutral ml-2 text-xl">
          Register
        </Link></p>
      </div>
    </div>
  );
};

export default LoginPage;