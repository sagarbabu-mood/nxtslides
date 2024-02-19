import {LuArrowLeftSquare} from 'react-icons/lu'
import {IoPrintOutline} from 'react-icons/io5'
import {AiOutlineSend} from 'react-icons/ai'
import {IoIosArrowDown} from 'react-icons/io'
import {RiRefreshLine} from 'react-icons/ri'
import {RiExpandUpDownFill} from 'react-icons/ri'
import {TiFilter} from 'react-icons/ti'
import {FaPlus} from 'react-icons/fa6'
import {IoIosSearch} from 'react-icons/io'
import {MdArrowBackIos} from 'react-icons/md'
import {MdArrowForwardIos} from 'react-icons/md'
import './index.css'

const tableData = [
  {
    order_no: '#TKN20203754',
    order_date: '2022-05-04',
    city: 'Lucknow',
    customer_name: 'Abhishek Dixit',
    order_value: '0.00',
    status: 'Pending',
  },
  {
    order_no: '#TKN20203754',
    order_date: '2022-05-04',
    city: 'Lucknow',
    customer_name: 'Abhishek Dixit',
    order_value: '0.00',
    status: 'Pending',
  },
  {
    order_no: '#TKN20203754',
    order_date: '2022-05-04',
    city: 'Lucknow',
    customer_name: 'Abhishek Dixit',
    order_value: '0.00',
    status: 'Pending',
  },
]

const OrdersTab = () => (
  <div className="order-details-container">
    <div className="section-btn-container">
      <button className="order-btn">
        <LuArrowLeftSquare className="icon" />
        <p className="icon-txt">Import Orders</p>
      </button>
      <button className="order-btn">
        <AiOutlineSend className="icon" />
        <p className="icon-txt">Accept</p>
      </button>
      <button className="order-btn">
        <IoPrintOutline className="icon" />
        <p className="icon-txt">Print</p>
        <IoIosArrowDown size={20} style={{marginLeft: '6px'}} />
      </button>
      <button className="refresh-btn order-btn">
        <RiRefreshLine size={20} style={{marginLeft: '6px'}} />
        <p className="refresh">Refresh</p>
      </button>
    </div>
    <div className="table-container">
      <div className="table-header">
        <div className="item item1">
          <input type="checkbox" />
        </div>
        <div className="item item2">
          <p className="item-description" style={{marginRight: 'auto'}}>
            Channel
          </p>
          <RiExpandUpDownFill size={16} />
          <TiFilter size={16} />
        </div>
        <div className="item item3">
          <p className="item-description" style={{marginRight: 'auto'}}>
            Order No
          </p>
          <RiExpandUpDownFill size={16} />
          <IoIosSearch size={16} />
        </div>
        <div className="item item4">
          <p className="item-description" style={{marginRight: 'auto'}}>
            Order Date
          </p>
          <RiExpandUpDownFill size={16} />
          <IoIosSearch size={16} />
        </div>
        <div className="item item4">
          <p className="item-description" style={{marginRight: 'auto'}}>
            City
          </p>
          <RiExpandUpDownFill size={16} />{' '}
        </div>
        <div className="item item5">
          <p className="item-description" style={{marginRight: 'auto'}}>
            Customer Name
          </p>
          <IoIosSearch size={16} />{' '}
        </div>
        <div className="item item6">
          <p className="item-description" style={{marginRight: 'auto'}}>
            Order Value
          </p>
          <RiExpandUpDownFill size={16} />{' '}
        </div>
        <div className="item item7">
          <p className="item-description" style={{marginRight: 'auto'}}>
            Status
          </p>
          <RiExpandUpDownFill size={16} />{' '}
        </div>
        <div className="item item-8">
          <p className="item-description" style={{marginRight: 'auto'}}>
            Operation
          </p>
          <RiExpandUpDownFill size={16} />{' '}
        </div>
      </div>
      <div>
        {tableData.map(each => (
          <div className="table-row">
            <div className="item item1">
              <FaPlus size={16} />
              <input type="checkbox" />
            </div>
            <div className="item item2">
              <p className="item-description" style={{marginRight: 'auto'}}>
                <img
                  height={30}
                  src="https://oddeveninfotech.com/images/serv_icons/shopify-services.png"
                  alt="shopify-img"
                />
              </p>
            </div>
            <div className="item item3">
              <p className="item-description" style={{marginRight: 'auto'}}>
                {each.order_no}
              </p>
            </div>
            <div className="item item3">
              <p className="item-description" style={{marginRight: 'auto'}}>
                {each.order_date}
              </p>
            </div>
            <div className="item item4">
              <p className="item-description" style={{marginRight: 'auto'}}>
                {each.city}
              </p>
            </div>
            <div className="item item5">
              <p className="item-description" style={{marginRight: 'auto'}}>
                {each.customer_name}
              </p>
            </div>
            <div className="item item6">
              <p className="item-description" style={{marginRight: 'auto'}}>
                {each.order_value}
              </p>
            </div>
            <div className="item item7">
              <p className="item-description" style={{marginRight: 'auto'}}>
                {each.status}
              </p>
            </div>
            <div className="item item8">
              <select className="item-select">
                <option value="actions" className="actions">
                  Actions
                </option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="page-change-btn-container">
      <button className="change-page-btn">
        <MdArrowBackIos size={20} className="page" />
      </button>
      <button className="change-no">1</button>
      <button className="change-page-btn">
        <MdArrowForwardIos size={20} className="page" />
      </button>
      <div className="page-count">20 / Page</div>
    </div>
  </div>
)

export default OrdersTab
