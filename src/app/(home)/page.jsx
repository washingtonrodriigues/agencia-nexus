import Banners from '../banners/page'
import About from '../about/page'
import Solutions from '../solutions/page'
import Customers from '../customers/page'
import Experts from '../experts/page'
import Contact from '../contact/page'
import Footer from '../footer/page'

const Home = () => {
    return (
        <div>
            <Banners />
            <About />
            <Solutions />
            <Customers />
            <Experts />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;