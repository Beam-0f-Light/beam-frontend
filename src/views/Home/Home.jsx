import './Home.css'
import Banner from '../../components/Banner'
import Card from '../../components/Card'

function Home() {
    return (
        <div className='home-container'>
            <Banner />
            <section className="products-section">
                <h2>OUR PRODUCTS</h2>
                <div className='products-container'>
                    <Card title='pepe' old_price='99' newPricea='33' dollar='3' exp_date='3' images='public/energy-drink.svg' />
                    <Card title='other' old_price='99' newPricea='33' dollar='3' exp_date='3' images='public/energy-drink.svg' />
                </div>
            </section>
        </div>
    )
}

export default Home
