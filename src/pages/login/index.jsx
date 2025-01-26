import { useContext} from "react";
import CommonForm from "../../components/common-form";
import { loginFormControls } from "../../config";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { loginFormData, setLoginFormData, loginWithFirebase, } =
    useContext(AuthContext);
    const navigate = useNavigate();

  function handleLoginOnSubmit(event) {
    event.preventDefault();

    loginWithFirebase().then((result) => {
      console.log(result, "result");
      if(result) navigate('/profile')
    });
  };


  return (
      <div>
        <CommonForm
          formControls={loginFormControls}
          formData={loginFormData}
          setFormData={setLoginFormData}
          onSubmit={handleLoginOnSubmit}
          buttonText={"Login"}
        />
      </div>
  );
}
