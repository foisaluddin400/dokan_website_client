'use client'
import React, { useState } from 'react'
import { IoCameraOutline } from 'react-icons/io5'
import Input from '../ui/Input';

const ProfilePage = () => {
      const [image, setImage] = useState<File | null>(null);
    
      const handleImageChange = (e: any) => {
        const file = e.target.files?.[0];
        if (file) setImage(file);
      };
  return (
    <div>
        <div>

              <h2 className="text-xl font-bold mb-6">Profile Information</h2>

              {/* AVATAR + INFO */}
              <div className="flex flex-col md:flex-row items-center gap-6 mb-8">

                <div className="relative w-[110px] h-[110px]">
                  <input
                    type="file"
                    id="img"
                    hidden
                    onChange={handleImageChange}
                  />

                  <img
                    src={
                      image
                        ? URL.createObjectURL(image)
                        : "https://avatar.iran.liara.run/public"
                    }
                    className="w-full h-full rounded-full object-cover border"
                  />

                  <label
                    htmlFor="img"
                    className="absolute bottom-1 right-1 bg-white border rounded-full w-8 h-8 flex items-center justify-center cursor-pointer shadow"
                  >
                    <IoCameraOutline className="text-lg text-gray-700" />
                  </label>
                </div>

                <div className="text-center md:text-left">
                  <h3 className="font-semibold text-lg">Rakibul Islam</h3>
                  <p className="text-sm text-gray-500">Buyer Account</p>
                </div>

              </div>

              {/* INPUTS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <Input
                type="text"
                 
                  placeholder="Full Name"
                />

                <Input
                    type="email"
                  placeholder="Email"
                />

                <Input
                   type="number"
                  placeholder="Phone"
                />

                <Input
                  type="text"
                  placeholder="Address"
                />

              </div>

              <button className="mt-6 px-6 py-3 bg-primary text-white rounded-xl hover:opacity-90 transition">
                Update Profile
              </button>

            </div>
    </div>
  )
}

export default ProfilePage