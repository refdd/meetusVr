import { useUserStore } from "@/stores/useUserStore";
import React from "react";

function HomePage() {
  const { user, logout } = useUserStore();

  if (!user) {
    return <div className="text-center text-gray-500">No user data</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 space-y-5">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold">
            {user.name?.charAt(0) || "U"}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
        {/* Details */}
        <div className="space-y-3 text-gray-700">
          <div className="flex justify-between">
            <span className="font-medium">ID:</span>
            <span>{user.id}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Status:</span>
            <span
              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                user.status === "ACTIVATED"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {user.status}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Influencer:</span>
            <span>{user.is_influencer ? "Yes" : "No"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Organization ID:</span>
            <span>{user.organization_id}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Shop ID:</span>
            <span>{user.shop_id}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Referral:</span>
            <span>{user.referral}</span>
          </div>
        </div>
        {/* Roles */}
        <div>
          <h2 className="text-sm font-semibold text-gray-500 mb-2">Roles:</h2>
          <div className="flex flex-wrap gap-2">
            {user.roles?.map((role, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
        {/* Addresses */}
        <div>
          <h2 className="text-sm font-semibold text-gray-500 mb-2">
            Addresses:
          </h2>
          {user.addresses?.length > 0 ? (
            <ul className="list-disc list-inside text-sm">
              {user.addresses.map((addr, idx) => (
                <li key={idx}>{addr}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 text-sm">No addresses available</p>
          )}
        </div>
        {/* Logout */}
        <div>
          <button
            onClick={logout}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition duration-200 ease-in-out"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
