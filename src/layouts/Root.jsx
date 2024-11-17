import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Left from "../components/LayoutCompo/Left";
import Middle from "../components/Middle";
import Right from "../components/LayoutCompo/Right";
import Navbar from "../components/Navbar";


const Root = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="max-w-7xl mx-auto">
                    <LatestNews></LatestNews>
                </section>

            </header>
            <nav>
                <section className="max-w-7xl mx-auto">
                    <Navbar></Navbar>
                </section>

            </nav>

            <main className="max-w-7xl mx-auto pt-5 grid md:grid-cols-12 gap-4">
                <aside className="col-span-3"><Left></Left></aside>
                <section className="col-span-6"><Middle></Middle></section>
                <aside className="col-span-3"><Right></Right></aside>
            </main>
        </div>

    );
};

export default Root;