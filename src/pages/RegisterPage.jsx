import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

const RegisterPage = () => {
  const { register, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  
  const handleRegister = (e) => {
    e.preventDefault();
    // console.log('register clicked');
    const form = e.target;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const image = e.target.image.value ;
    const name = e.target.name.value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).*$/;

    if (password.length < 6) {
      // alert('Password should be greater than 6 character');
      Swal.fire('Password should be greater than 6 character');
      form.reset();
      return;
    }
    else if (!passwordRegex.test(password)) {
      // alert('Password should contain minimum one capital letter and special character');
      Swal.fire("Password should contain minimum one capital letter and special character");

      form.reset();
      return;
    }

    // console.log(email, password);
    register(email, password)
      .then(result => {
        console.log(result.user);
        // alert('User Registered successfully');
        Swal.fire({
          title: "User Registered successfully",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });

        updateProfile(auth.currentUser,{
          displayName: name ,
          photoURL: image 
        })
          .then(()=>{
            console.log('Profile updated');
          })
          .catch((error)=>{
            console.log('an error occured');
          })

        logOut()
          .then(() => {
            console.log('User logged out');
            navigate('/');
          })
          .catch(error =>
            console.log(error.message))
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  return (
    <div className="h-screen w-3/5 mx-auto">
      <h2 className="mb-10 text-5xl text-center">Register</h2>

      <form className="space-y-2 flex flex-col justify-center" onSubmit={handleRegister}>

        <input type="text" name="name" className="p-3 border-2" placeholder="Name" />
        <input type="text" name="email" className="p-3 border-2" placeholder="Email" />
        <input type="password" name="password" className="p-3 border-2" placeholder="Password" />
        <input type="password" name="image" className="p-3 border-2" placeholder="Image Link" />
        <input type="submit" className="btn btn-primary text-white" value="Register" />
      </form>
    </div>
  );
};

export default RegisterPage;