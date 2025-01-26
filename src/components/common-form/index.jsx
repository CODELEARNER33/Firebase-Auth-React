/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

import CommonInput from "../common-input";

import myImage from '../../assets/demo-image.jpg'

const formElement = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

export default function CommonForm({
  formControls = [],
  buttonText,
  formData,
  setFormData,
  onSubmit,
}) {
  function renderFormElement(getCurrentFormControl, getFormData) {
    let element = null;

    switch (getCurrentFormControl.componentType) {
      case formElement.INPUT:
        element = (
          <CommonInput
            type={getCurrentFormControl.type}
            placeholder={getCurrentFormControl.placeholder}
            value={getFormData[getCurrentFormControl.name]}
            name={getCurrentFormControl.name}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getCurrentFormControl.name]: event.target.value,
              })
            }
          />
        );
        break;

      default:
        element = (
          <CommonInput
            type={getCurrentFormControl.type}
            placeholder={getCurrentFormControl.placeholder}
            value={getFormData[getCurrentFormControl.name]}
            name={getCurrentFormControl.name}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getCurrentFormControl.name]: event.target.value,
              })
            }
          />
        );
        break;
    }

    return element;
  }

  return (
    // <form onSubmit={onSubmit}>
    //   {formControls.map((singleFormContol) =>
    //     renderFormElement(singleFormContol, formData)
    //   )}

    //   <button type="submit">{buttonText || "Submit"}</button>
    // </form>

    <div className="flex min-h-screen bg-blue-100">
      {/* Left Section: Travel Image and Quote */}
      <div
        className="w-1/2 relative hidden md:flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${myImage})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        <div className="z-10 text-center text-white">
          <h1 className="text-4xl font-bold italic">Login Demo</h1>
          <p className="mt-4 text-lg">
            The true lasting wealth a man can have is his intellect
          </p>
        </div>
      </div>

      {/* Right Section: Login Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-8 py-16 bg-white shadow-lg">
        <h2 className="text-4xl font-bold text-blue-600">Welcome</h2>
        <p className="mt-2 text-sm text-gray-500">Login with Email</p>

        {/* CommonForm Integration */}
        <form onSubmit={onSubmit} className="w-full max-w-sm mt-6">
          {formControls.map((control) => renderFormElement(control, formData))}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
          >
            {buttonText || "Login"}
          </button>

          {/* OR Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative text-sm text-gray-500 text-center">
              <span className="bg-white px-2">OR</span>
            </div>
          </div>

          {/* Social Login Buttons */}

          <div className="flex space-x-4">
            <button
              type="button"
              className="flex-1 py-2 border rounded-lg text-gray-500 hover:bg-gray-100"
            >
              <FontAwesomeIcon icon={faGoogle} size="lg" />
            </button>
            <button
              type="button"
              className="flex-1 py-2 border rounded-lg text-gray-500 hover:bg-gray-100"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </button>
            <button
              type="button"
              className="flex-1 py-2 border rounded-lg text-gray-500 hover:bg-gray-100"
            >
              <FontAwesomeIcon icon={faApple} size="lg" />
            </button>
          </div>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Dont have an account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Register Now
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
