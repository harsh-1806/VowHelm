import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Social Icons */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-2">
                            <Image
                                src="https://placehold.co/40x40"
                                alt="Logo"
                                width={40}
                                height={40}
                                className="mr-2"
                            />
                            <div className="uppercase font-bold">VOWHELM</div>
                        </div>
                        <p className="text-sm">
                            Ensure your safety
                            <br />
                            in case of accident.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="https://ext.same-assets.com/4226829879/499349214.png"
                                    alt="Instagram"
                                    width={20}
                                    height={20}
                                />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="https://ext.same-assets.com/4226829879/2454383028.png"
                                    alt="Facebook"
                                    width={20}
                                    height={20}
                                />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="https://ext.same-assets.com/4226829879/3796878745.png"
                                    alt="LinkedIn"
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h6 className="text-xs font-bold mb-4 uppercase">
                            COMPANY
                        </h6>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="#"
                                    className="text-xs hover:text-altor-light-blue"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-xs hover:text-altor-light-blue"
                                >
                                    Our Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/business"
                                    className="text-xs hover:text-altor-light-blue"
                                >
                                    For Business
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Help Links */}
                    <div>
                        <h6 className="text-xs font-bold mb-4 uppercase">
                            HELP
                        </h6>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/support"
                                    className="text-xs hover:text-altor-light-blue"
                                >
                                    Customer Support
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/delivery"
                                    className="text-xs hover:text-altor-light-blue"
                                >
                                    Delivery Details
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="text-xs hover:text-altor-light-blue"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-xs hover:text-altor-light-blue"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/refund"
                                    className="text-xs hover:text-altor-light-blue"
                                >
                                    Refund Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* FAQ Links */}
                    <div>
                        <h6 className="text-xs font-bold mb-4 uppercase">
                            FAQ
                        </h6>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/account"
                                    className="text-xs hover:text-altor-light-blue"
                                >
                                    Account
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/deliveries"
                                    className="text-xs hover:text-altor-light-blue"
                                >
                                    Manage Deliveries
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/orders"
                                    className="text-xs hover:text-altor-light-blue"
                                >
                                    Orders
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/payments"
                                    className="text-xs hover:text-altor-light-blue"
                                >
                                    Payments
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-10 pt-6 text-center">
                    <p className="text-xs text-gray-400">
                        © 2025, All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
