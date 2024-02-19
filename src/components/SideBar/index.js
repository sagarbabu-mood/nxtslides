import {AiOutlineDashboard} from 'react-icons/ai'
import {GoListUnordered} from 'react-icons/go'
import {CiShare2} from 'react-icons/ci'
import {MdOutlineLocalShipping, MdOutlineInventory2} from 'react-icons/md'
import './index.css'

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <AiOutlineDashboard size={24} />
          <button className="sidebar-btn">Dashboard</button>
        </li>
        <li className="sidebar-list-item">
          <MdOutlineInventory2 size={24} />
          <button className="sidebar-btn">Inventory</button>
        </li>
        <li className="sidebar-list-item orders">
          <GoListUnordered size={24} />
          <button className="sidebar-btn ">Orders</button>
        </li>
        <li className="sidebar-list-item">
          <MdOutlineLocalShipping size={24} />
          <button className="sidebar-btn">Shipping</button>
        </li>
        <li className="sidebar-list-item">
          <CiShare2 size={24} />
          <button className="sidebar-btn">Channel</button>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
