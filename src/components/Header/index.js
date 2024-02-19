import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMoonOutline} from 'react-icons/io5'
import {MdOutlineGTranslate} from 'react-icons/md'
import {FaRegBell} from 'react-icons/fa'
import './index.css'

const Header = () => {
  return (
    <nav className="navbar">
      <div className="my-dashboard">
        <GiHamburgerMenu />
        <p className="dashboard-txt">Dashboard</p>
      </div>
      <div className="nav-btn-container">
        <button className="nav-btn">
          <IoMoonOutline color="black" size={26} />
        </button>

        <button className="nav-btn">
          <FaRegBell size={26} />
        </button>
        <button className="nav-btn">
          <MdOutlineGTranslate size={26} />
        </button>
        <img
          src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1708353635/man_f0gx4u.png"
          alt=""
          height={40}
          className="avatar"
        />
      </div>
    </nav>
  )
}

export default Header
