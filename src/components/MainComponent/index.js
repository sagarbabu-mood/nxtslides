import OrdersTab from '../OrdersTab'
import './index.css'

const tabData = [
  'Pending',
  'Accepted',
  'AWB Created',
  'Ready to ship',
  'Shipped',
  'Completed',
  'Cancelled',
]

const MainComponent = () => {
  return (
    <div className="bg-container">
      <div className="top-container">
        <div className="order">
          <button type="button" className="order">
            Orders <span className="span-txt"> x</span>
          </button>
        </div>
        <img
          src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1708354117/settings-gear-icon_qbvqil.png"
          alt="settings-icon"
          className="settings-img"
        />
      </div>

      <div className="tabs-container">
        {tabData.map(each => (
          <button
            type="button"
            className={`tabs ${each === 'Pending' ? 'pending' : null}`}
          >
            {each}
          </button>
        ))}
      </div>

      <OrdersTab />
    </div>
  )
}

export default MainComponent
