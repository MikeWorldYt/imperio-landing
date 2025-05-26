import {
    Facebook,
    Instagram,
    Mail,
    Phone,
    MapPin,
    Languages,
} from "lucide-react";


export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-[#001f3f] via-[#003366] to-[#001a33] text-white pt-10 pb-6 px-6 md:px-12">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
                {/* Branding + Contact */}
                <div className="space-y-3">
                    <h3 className="text-lg font-bold">Imperio Pools</h3>
                    <p className="flex items-center gap-2"><Phone size={16} /> (909) 430-8805</p>
                    <p className="flex items-center gap-2"><MapPin size={16} /> Inland Empire, Orange, Los Angeles, CA</p>
                </div>
                {/* Navigation */}
                <div className="space-y-2">
                    <h4 className="font-semibold">Pages</h4>
                    <ul className="space-y-1">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/gallery" className="hover:underline">Gallery</a></li>
                        <li><a href="/services" className="hover:underline">Services</a></li>
                        <li><a href="/get-quote" className="hover:underline">Get Quote</a></li>
                    </ul>
                </div>
                {/* Legal */}
                <div className="space-y-2">
                    <h4 className="font-semibold">Legal</h4>
                    <ul className="space-y-1">
                        <li><a href="/legal" className="hover:underline">Legal Stuff</a></li>
                        <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                    </ul>
                </div>
                {/* Social + Language */}
                <div className="space-y-3">
                    <h4 className="font-semibold">Follow Us</h4>
                    <div className="flex gap-4">
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><Instagram size={20} /></a>
                        {/* <a href="#"><Tiktok size={20} /></a> */}
                        <a href="mailto:info@imperiopools.com"><Mail size={20} /></a>
                    </div>
                    <div className="flex items-center gap-2 pt-3">
                        <Languages size={18} />
                        <span>Español | English</span>
                    </div>
                </div>
            </div>
            {/* Divider + Copyright */}
            <div className="border-t border-white/20 mt-8 pt-4 text-center text-xs">
                <p>© 2025 Imperio Pools. All rights reserved.</p>
            </div>
        </footer>
    );
}
