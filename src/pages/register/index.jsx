import { useContext } from "react";
import CommonForm from "../../components/common-form";
import { AuthContext } from "../../context";
import { resgisterFormControl } from "../../config";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";

export default function RegisterPage() {
  const { registerFormData, setRegisterFormData, registerWithFirebase} =
    useContext(AuthContext);

  const navigate = useNavigate();

  // console.log(registerFormData);

  // useEffect(() => {
  //   if (user) {
  //     navigate("/profile");
  //   }
  // }, [user, navigate]);

  // function handleRegisterFormSubmit(event) {
  //   event.preventDefault();

  //   registerWithFirebase()
  //     .then((result) => {
  //       if (result.user) {
  //         updateProfile(result.user, {
  //           displayName: registerFormData.name,
  //         })
  //           .then(() => {
  //             return result.user.reload();
  //           })
  //           .then(() => {
  //             console.log("Updated user:", auth.currentUser); // Check the updated displayName
  //             navigate("/profile");
  //           })
  //           .catch((error) => console.error("Error updating profile:", error));
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // }

  function handleRegisterFormSubmit(event) {
      event.preventDefault();
  
      registerWithFirebase().then((result) => {
        updateProfile(result?.user , {
          displayName: registerFormData.name,
        }).then(() => {
          console.log("auth.currentUser.displayName", auth.currentUser.displayName)

          if (auth.currentUser.displayName) {
            navigate('/profile');
          }
        }).catch((error) => console.error("Error updating profile",error))
      })
  }

  return (
    <div>
      <div>
        <div>
          <CommonForm
            formControls={resgisterFormControl}
            formData={registerFormData}
            setFormData={setRegisterFormData}
            onSubmit={handleRegisterFormSubmit}
            buttonText={"Register"}
          />
        </div>
      </div>
    </div>
  );
}
