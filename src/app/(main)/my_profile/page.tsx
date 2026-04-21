"use client";

import ChangePassword from "@/components/setting/ChangePassword";
import MyReview from "@/components/setting/MyReview";
import ProfilePage from "@/components/setting/ProfilePage";
import Input from "@/components/ui/Input";
import PasswordInput from "@/components/ui/PasswordInput";
import { useState } from "react";
import { IoCameraOutline } from "react-icons/io5";

const menuItems = [
  "Profile",
  "My Reviews",
  "My Orders",
  "Change Password",
];

const Setting = () => {
  const [active, setActive] = useState("Profile");
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) setImage(file);
  };

  return (
    <div className="min-h-screen  ">

      <div className=" grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">

        {/* LEFT SIDEBAR */}
        <div className="md:col-span-3 bg-white border border-border rounded-2xl p-4 h-fit shadow-sm">

          <h2 className="text-lg font-bold mb-4 text-text">
            My Account
          </h2>

          <div className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition text-left
                ${
                  active === item
                    ? "bg-primary text-white"
                    : "hover:bg-gray-100 text-text-secondary"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:col-span-9 bg-white border border-border rounded-2xl p-6 shadow-sm">

          {/* PROFILE SECTION */}
          {active === "Profile" && (
            <ProfilePage></ProfilePage>
          )}

          {/* REVIEWS */}
          {active === "My Reviews" && (
            <MyReview></MyReview>
          )}

          {/* ORDERS */}
          {active === "My Orders" && (
            <div>
              <h2 className="text-xl font-bold mb-2">My Orders</h2>
              <p className="text-gray-500">Your order history will appear here.</p>
            </div>
          )}

          {/* PASSWORD */}
          {active === "Change Password" && (
          <ChangePassword></ChangePassword>
          )}

        </div>

      </div>
    </div>
  );
};

export default Setting;