import { LoginPage } from "../../components/LoginPage";
import websiteImage from "../../assets/website.jpg";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="flex absolute justify-center items-center">
        <img
          src={websiteImage}
          alt="Website"
          className="h-screen w-screen object-cover"
        />
      </div>
      <div className="flex relative justify-center items-center">
        <LoginPage />
      </div>
    </div>
  );
};

export default Login;
