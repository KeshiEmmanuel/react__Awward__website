import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const Navbar = () => {
    const navContainerRef = useRef(null);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const NavItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];
    const audioElementRef = useRef<HTMLAudioElement>(null);
    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev);
        setIsIndicatorActive((prev) => !prev);
    };

    useEffect(() => {
        if (audioElementRef.current) {
            if (isAudioPlaying) {
                audioElementRef.current.play();
            } else {
                audioElementRef.current.pause();
            }
        } else {
            console.error("Error audio element is null");
        }
    }, [isAudioPlaying]);
    return (
        <div
            ref={navContainerRef}
            className="fixed inset-x-0 top-0 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
        >
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex size-full items-center justify-between p-4">
                    <div className="flex items-center gap-7">
                        <img src="/img/logo.png" alt="logo" className="w-10" />
                        <Button
                            id="product-button"
                            title="Products"
                            containerClass="bg-blue-50 md:flex hidden items-center gap-1"
                            rightIcon={<TiLocationArrow />}
                        />
                    </div>

                    <div className="flex h-full items-center">
                        <div className="hidden md:block">
                            {NavItems.map((item) => (
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="nav-hover-btn"
                                    key={item}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                        <button
                            onClick={toggleAudioIndicator}
                            className="ml-10 flex items-center space-x-0.5"
                        >
                            <audio
                                src="/audio/loop.mp3"
                                ref={audioElementRef}
                                className="hidden"
                                loop
                            />
                            {[1, 2, 3, 4].map((bar) => (
                                <div
                                    className={`indicator-line ${
                                        isIndicatorActive ? "active" : ""
                                    }`}
                                    style={{
                                        animationDelay: `${bar * 0.1}s`,
                                    }}
                                    key={bar}
                                />
                            ))}
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
