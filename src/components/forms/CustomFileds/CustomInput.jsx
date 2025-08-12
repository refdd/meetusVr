import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

const CustomInput = ({
  name,
  register,
  errors,
  validationRules,
  className,
  placeholder,
  type = "text",
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const getIcon = () => {
    if (type === "email" || name === "email") {
      return <Mail className="w-5 h-5 text-gray-400" />;
    }
    if (type === "password" || name === "password") {
      return <Lock className="w-5 h-5 text-gray-400" />;
    }
    return null;
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className={`relative ${className || ""}`}>
      <div
        className={`
          relative flex items-center
          bg-white rounded-xl border transition-all duration-200
          ${
            errors?.[name]
              ? "border-red-300 shadow-sm"
              : isFocused
              ? "border-purple-400 shadow-lg shadow-purple-100"
              : "border-gray-200 hover:border-gray-300"
          }
        `}
      >
        {getIcon() && <div className="absolute left-4 z-10">{getIcon()}</div>}

        <input
          id={name}
          type={inputType}
          placeholder={placeholder}
          className={`
            w-full px-4 py-4 rounded-xl
            bg-transparent border-none outline-none
            text-gray-700 placeholder-gray-400
            ${getIcon() ? "pl-12" : "pl-4"}
            ${type === "password" ? "pr-12" : "pr-4"}
            text-base font-medium
          `}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...register(name, validationRules)}
          {...rest}
        />

        {type === "password" && (
          <button
            type="button"
            className="absolute right-4 z-10 text-gray-400 hover:text-gray-600 transition-colors"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        )}
      </div>

      {errors?.[name] && (
        <p className="mt-2 text-sm text-red-500 font-medium">
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

export default CustomInput;
