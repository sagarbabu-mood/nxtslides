import Header from '../Header'
import SideBar from '../SideBar'
import MainComponent from '../MainComponent'
import './index.css'

const Home = () => (
  <div className="dashboard">
    <Header />
    <div className="main-content">
      <SideBar />
      <MainComponent />
    </div>
  </div>
)

export default Home
