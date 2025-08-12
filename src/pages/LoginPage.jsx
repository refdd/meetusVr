import AuthLogo from "@/components/auth/AuthLogo";
import LayoutFromLogin from "@/components/auth/LayoutFromLogin";

const LoginPage = () => {
  return (
    <div className="  h-[100dvh] flex justify-center bg-[#E9ECF2]  px-6 lg:px-8 overflow-hidden">
      <LayoutFromLogin />
      <AuthLogo />
    </div>
  );
};
export default LoginPage;
