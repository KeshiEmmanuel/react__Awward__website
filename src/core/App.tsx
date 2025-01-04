import About from "../components/ABout";
import Hero from "../components/Hero";

const App = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <Navbar />
            <Hero />
            <About />
        </main>
    );
};

export default App;
