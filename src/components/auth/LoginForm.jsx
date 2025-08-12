import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInput from "../forms/CustomFileds/CustomInput";
import { useUserStore } from "@/stores/useUserStore";
import { useNavigate } from "react-router-dom";

// Zod schema
const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email("Invalid email address"),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters"),
});

function LoginForm() {
  const methods = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const { login, loading } = useUserStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = methods;

  const onSubmit = async (data) => {
    await login(data.email, data.password);
    navigate("/");
  };

  return (
    <div className="md:w-[450px] w-full px-4 md:px-0">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-5 md:gap-6 pt-2"
        >
          <CustomInput
            name="email"
            register={register}
            errors={errors}
            type="email"
            placeholder="Email"
          />

          <CustomInput
            name="password"
            register={register}
            errors={errors}
            type="password"
            placeholder="Enter your password"
          />

          <button
            disabled={!isValid || loading}
            type="submit"
            className={`py-3 px-6 rounded-[8px] flex items-center justify-center 
              ${
                !isValid || loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#9414FF] text-white"
              }`}
          >
            {loading ? "Signing in..." : "Submit"}
          </button>

          <p className="text-center text-sm text-gray-500 pt-5">
            Don&apos;t have an account?{" "}
            <a href="/" className="text-[#62626B] hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </FormProvider>
    </div>
  );
}

export default LoginForm;
