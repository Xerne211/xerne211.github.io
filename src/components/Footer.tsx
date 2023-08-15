import React from "react";
import {
    FaDiscord as Discord,
    FaGithub as Github,
    FaInstagram as Insta,
    FaLinkedin as Linkedin,
    FaTwitter as Twitter,
    FaRegEnvelope as Mail,
} from "react-icons/fa";

const Footer = () => {
    const navs = [
        {
            url: "https://twitter.com/s_gmss35",
            icon: Twitter,
        },
        {
            url: "https://instagram.com/9gmss",
            icon: Insta,
        },
        {
            url: "https://linkedin.com/in/drackin",
            icon: Linkedin,
        },
        {
            url: "https://discord.com/users/607507574018801664",
            icon: Discord,
        },
        {
            url: "mailto:contact@drackin.me",
            icon: Mail,
        },
    ];

    return (
        <footer className="mobile:hidden z-[99] w-full h-10 border-t border-gray-800 flex justify-between items-center font-fira text-[#607B96]">
            <aside className="flex h-full">

                <p className="border-r text-sm border-gray-800 h-full flex items-center justify-center px-10">
                    i am here:
                </p>

                <div className="flex items-center text-sm h-full">
                    {navs.map((nav, i) => (
                        <a
                            href={nav.url}
                            rel="noreferrer"
                            target="_blank"
                            className="border-r border-gray-800 px-7 h-full flex items-center hover:border-b-2 hover:border-b-orange-500 justify-center hover:text-white transition duration-200"
                            key={i}
                        >
                            <nav.icon />
                        </a>
                    ))}
                </div>
            </aside>

            <a
                href="https://github.com/Drackin"
                className="flex items-center justify-center mobile:hidden px-5 border-l border-gray-800 h-full hover:text-white transition duration-200 hover:border-b-2 hover:border-b-orange-500"
            >
                <Github />
                <p className="pl-2">@Drackin</p>
            </a>
        </footer>
    );
};

export default Footer;
