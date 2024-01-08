import profilepic from '../assets/profilepic.png';
import {
  FaAngleDown,
  FaMoneyCheck,
  FaPalette,
  FaPercent,
} from 'react-icons/fa';
import { GoHome } from 'react-icons/go';
import { HiOutlineLightningBolt } from 'react-icons/hi';
import {
  BsPeople,
  BsTruck,
  BsBarChartLine,
  BsTools,
  BsMegaphone,
  BsCreditCardFill,
  BsClipboard,
  BsBorderAll,
} from 'react-icons/bs';
const Tabbar = () => {
  const sidebarData = [
    {
      id: 1,
      title: 'Home',
      icon: <GoHome size={20} className='fill-white' />,
      isSelected: false,
    },
    {
      id: 2,
      title: 'Orders',
      icon: <BsClipboard size={20} className='fill-white' />,
      isSelected: false,
    },
    {
      id: 3,
      title: 'Products',
      icon: <BsBorderAll size={20} className='fill-white' />,
      isSelected: false,
    },
    {
      id: 4,
      title: 'Delivery',
      icon: <BsTruck size={20} className='fill-white' />,
      isSelected: false,
    },
    {
      id: 5,
      title: 'Marketing',
      icon: <BsMegaphone size={20} className='fill-white' />,
      isSelected: false,
    },
    {
      id: 6,
      title: 'Analytics',
      icon: <BsBarChartLine size={20} className='fill-white' />,
      isSelected: false,
    },
    {
      id: 7,
      title: 'Payments',
      icon: <BsCreditCardFill size={20} className='fill-white' />,
      isSelected: true,
    },
    {
      id: 8,
      title: 'Tools',
      icon: <BsTools size={20} className='fill-white' />,
      isSelected: false,
    },
    {
      id: 9,
      title: 'Discounts',
      icon: <FaPercent size={20} className='fill-white' />,
      isSelected: false,
    },
    {
      id: 10,
      title: 'Audience',
      icon: <BsPeople size={20} className='fill-white' />,
      isSelected: false,
    },
    {
      id: 11,
      title: 'Appearance',
      icon: <FaPalette color='white' size={20} />,
      isSelected: false,
    },
    {
      id: 12,
      title: 'Plugins',
      icon: <HiOutlineLightningBolt color='white' size={20} />,
      isSelected: false,
    },
  ];

  return (
    <div className='bg-blue-950 p-2 w-48 flex flex-col justify-between'>
      <div>
        <div className='flex flex-row justify-between items-center mb-6 p-2'>
          <div className='flex flex-row space-x-4'>
            <img src={profilepic} className='h-10 w-10 rounded-md' />
            <div>
              <p className='text-white mb-1'>Nishyan</p>
              <p className='text-gray-300 text-xs underline'>Visit store</p>
            </div>
          </div>
          <FaAngleDown className='fill-white' />
        </div>
        {sidebarData.map((data) => (
          <div
            key={data.id}
            className={`flex flex-row items-center mb-4 space-x-2 px-2 hover:cursor-pointer ${
              data.isSelected ? 'bg-gray-700 rounded py-1' : ''
            }`}
          >
            {data.icon}
            <p className='text-white text-lg'>{data.title}</p>
          </div>
        ))}
      </div>
      <div className='bg-blue-900 flex flex-row rounded-sm p-2 space-x-2 mt-4'>
        <div className='bg-blue-800 px-1 rounded-sm'>
          <FaMoneyCheck size={30} />
        </div>
        <div>
          <p className='text-xs text-white'>Available credits</p>
          <p className='text-xs text-white font-bold'>222.10</p>
        </div>
      </div>
    </div>
  );
};

export default Tabbar;
