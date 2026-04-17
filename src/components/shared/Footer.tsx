import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg text-dark-text">

      {/* Top Section */}
      <div className="container mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            ShopNest
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Discover the best deals across electronics, fashion, and home essentials.
            Our marketplace connects buyers with trusted sellers for a seamless
            shopping experience.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Information
          </h3>

          <div className="flex flex-col gap-3 text-sm text-gray-400">
            <Link href="/about" className="hover:text-white transition">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact Us
            </Link>
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms & Condition
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Help & Support
          </h3>

          <div className="space-y-4 text-sm text-gray-400">

            <div className="flex items-start gap-3">
              <CiMail className="text-xl mt-1" aria-label="email icon" />
              <div>
                <p>foisalrk2@gmail.com</p>
                <p>rkfoisal2@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FiPhone className="text-xl mt-1" aria-label="phone icon" />
              <div>
                <p>+8801725300330</p>
                <p>+8801605722887</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700" />

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 py-5">
        © {year} ShopNest. All rights reserved.
      </div>

    </footer>
  );
}