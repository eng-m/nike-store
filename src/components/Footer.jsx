import React from "react";

const Footer = ({ footer: { titles, links } }) => {
    return (
        <>
            <footer className="bg-gradient-to-br from-gray-900 to-slate-500 pt-7 pb-5">
                <div className="nike-container text-slate-200">
                    <div className="grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5">
                        {titles.map((title, index) => (
                            <div key={index} className="grid items-center">
                                <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">
                                    {title.title}
                                </h1>
                            </div>
                        ))}
                        {links.map((list, index) => (
                            <ul key={index} className="grid items-center gap-1">
                                {list.map((link, index) => (
                                    <li key={index} className="text-sm sm:text-xs">
                                        {link.link}
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                    <div className="mt-5 text-center">
                        <p className="text-sm md:text-center">
                            Copyright<sup className="text-base font-bold">&copy;</sup> All Reserved
                            Rights <span className="font-semibold"> WEB WEAVERS</span>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
