import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg text-dark-text mt-16">

      {/* TOP */}
      <div className="container mx-auto px-4 md:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            StocklyFire
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            A complete marketplace where you can buy, sell, do wholesale,
            earn through affiliate marketing, and exchange used products
            based on real location.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3 mt-4">
            <div className="p-2 bg-dark-surface rounded-lg cursor-pointer hover:bg-primary transition">
              <FaFacebookF />
            </div>
            <div className="p-2 bg-dark-surface rounded-lg cursor-pointer hover:bg-primary transition">
              <FaWhatsapp />
            </div>
            <div className="p-2 bg-dark-surface rounded-lg cursor-pointer hover:bg-primary transition">
              <FaYoutube />
            </div>
          </div>
        </div>

        {/* BUYER */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            For Buyers
          </h3>

          <div className="flex flex-col gap-3 text-sm text-text-muted">
            <Link href="/products" className="hover:text-white">
              All Products
            </Link>
            <Link href="/shops" className="hover:text-white">
              Explore Shops
            </Link>
            <Link href="/used" className="hover:text-white">
              Used Products
            </Link>
            <Link href="/exchange" className="hover:text-white">
              Exchange Items
            </Link>
          </div>
        </div>

        {/* SELLER */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            For Sellers
          </h3>

          <div className="flex flex-col gap-3 text-sm text-text-muted">
            <Link href="/sell" className="hover:text-white">
              Open Shop
            </Link>
            <Link href="/dashboard" className="hover:text-white">
              Seller Dashboard
            </Link>
            <Link href="/wholesale" className="hover:text-white">
              Wholesale Sell
            </Link>
            <Link href="/add-product" className="hover:text-white">
              Add Product
            </Link>
          </div>
        </div>

        {/* AFFILIATE */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Earn Money
          </h3>

          <div className="flex flex-col gap-3 text-sm text-text-muted">
            <Link href="/affiliate" className="hover:text-white">
              Affiliate Program
            </Link>
            <Link href="/subscription" className="hover:text-white">
              Subscription Plans
            </Link>
            <Link href="/resell" className="hover:text-white">
              Resell Products
            </Link>
            <Link href="/rewards" className="hover:text-white">
              Rewards & Points
            </Link>
          </div>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Support
          </h3>

          <div className="space-y-4 text-sm text-text-muted">

            <Link href="/help" className="block hover:text-white">
              Help Center
            </Link>

            <Link href="/contact" className="block hover:text-white">
              Contact Us
            </Link>

            <Link href="/privacy" className="block hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms" className="block hover:text-white">
              Terms & Condition
            </Link>

            {/* CONTACT */}
            <div className="mt-4 space-y-3">

              <div className="flex items-center gap-2">
                <CiMail />
                <span>support@stocklyfire.com</span>
              </div>

              <div className="flex items-center gap-2">
                <FiPhone />
                <span>+8801725300330</span>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* EXTRA STRIP */}
      <div className="border-t border-dark-surface py-4 text-center text-sm text-text-muted">
        Trusted marketplace for buyers, sellers & resellers across Bangladesh 🇧🇩
      </div>

      {/* BOTTOM */}
      <div className="text-center text-xs text-text-muted py-4 border-t border-dark-surface">
        © {year} StocklyFire. All rights reserved.
      </div>

    </footer>
  );
}