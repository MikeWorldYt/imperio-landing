import {
    Facebook,
    Instagram,
    Mail,
    Phone,
    MapPin,
    Languages,
} from "lucide-react";
import { Button } from "../ui/Button";
import { a } from "framer-motion/client";

interface FooterProps {
    lang: string;
}

const Footer = ({ lang }: FooterProps) => {
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
                        <li><a href={`/${lang}/home`} className="hover:underline">Home</a></li>
                        <li><a href={`/${lang}/gallery`} className="hover:underline">Gallery</a></li>
                        <li><a href={`/${lang}/services`} className="hover:underline">Services</a></li>
                        <li><a href={`/${lang}/get-quote/form`} className="hover:underline">Get Quote</a></li>
                    </ul>
                </div>
                {/* Legal */}
                <div className="space-y-2">
                    <h4 className="font-semibold">Legal</h4>
                    <ul className="space-y-1">
                        <li><a href={`/en/legal`} className="hover:underline">Legal Stuff</a></li>
                        <li><a href={`/en/privacy`} className="hover:underline">Privacy Policy</a></li>
                    </ul>
                </div>
                {/* Social + Language */}
                <div className="space-y-3">
                    <h4 className="font-semibold">Follow Us</h4>
                    <div className="flex gap-4">
                        <a target="_blank" href="https://www.facebook.com/people/Imperio-pools-patios/61563309971169/"><Facebook size={20} /></a>
                        <a target="_blank" href="https://www.instagram.com/imperiopools.patios/"><Instagram size={20} /></a>
                        {/* <a href="#"><Tiktok size={20} /></a> */}
                        <Button
                            text="Mail"
                            variant="transparent"
                            onClick={() => {
                                navigator.clipboard.writeText('alexmijangos@imperiopoolsandpatios.com');
                                alert(lang === "es" ? "Copiado al portapapeles!" : "Copied to clipboard!" )
                            }} 
                        >
                            <Mail size={20} />
                        </Button>
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

export default Footer;