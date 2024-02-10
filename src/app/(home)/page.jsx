import Banners from '../banners/page'
import About from '../about/page'
import Solutions from '../solutions/page'
import Customers from '../customers/page'
import Experts from '../experts/page'
import Contact from '../contact/page'

const Home = () => {
    return (
        <div>
            <Banners />
            <About />
            <Solutions />
            <Customers />
            <Experts />
            <Contact />
        </div>
    );
}

export default Home;