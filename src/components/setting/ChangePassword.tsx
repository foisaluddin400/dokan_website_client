import React from 'react'
import PasswordInput from '../ui/PasswordInput'

const ChangePassword = () => {
  return (
    <div>
          <div>
              <h2 className="text-xl font-bold mb-6">Change Password</h2>

              <div className="space-y-4">

                <PasswordInput
               
                 
                  placeholder="Current Password"
                />

                <PasswordInput
                
                  placeholder="New Password"
                />

                <PasswordInput
              
                  placeholder="Confirm Password"
                />

              </div>

              <button className="mt-6 px-6 py-3 bg-primary text-white rounded-xl hover:opacity-90 transition">
                Update Password
              </button>
            </div>
    </div>
  )
}

export default ChangePassword