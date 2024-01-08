import { FaSearch } from 'react-icons/fa';
import { BiSort, BiDownload } from 'react-icons/bi';

const Body = () => {
  return (
    <div className='px-4 py-6'>
      <div className='flex flex-row justify-between'>
        <p className='font-semibold'>Overview</p>
        <div className='border border-gray-400 px-2 py-1 rounded-sm'>
          <select className='outline-none'>
            <option value='lastMonth'>Last Month</option>
            <option value='thisMonth'>This Month</option>
            <option value='other'>Other</option>
          </select>
        </div>
      </div>
      <div className='flex flex-row space-x-4 mt-4'>
        <div className='rounded-md w-1/2 p-4 shadow-md'>
          <p>Online orders</p>
          <p className='font-bold text-3xl'>231</p>
        </div>
        <div className='rounded-md w-1/2 p-4 shadow-md'>
          <p>Amount received</p>
          <p className='font-bold text-3xl'>₹23,92,321.19</p>
        </div>
      </div>
      <p className='mt-6 text-2xl font-medium'>Transactions | This Month</p>
      <div className='shadow-lg  mt-6 p-4'>
        <div className='flex flex-row justify-between'>
          <div className='border w-1/4 border-gray-300 flex flex-row items-center rounded-md p-2 space-x-2'>
            <FaSearch className='fill-gray-500' />
            <input
              type='text'
              placeholder='Search by order ID...'
              className=' placeholder-gray-600 focus:outline-none'
            />
          </div>
          <div className='flex flex-row space-x-4'>
            <div className='border border-gray-300 flex flex-row items-center py-2 px-4 rounded space-x-2'>
              <p className='text-xl'>Sort</p>
              <BiSort size={20} />
            </div>
            <div className='flex items-center border rounded border-gray-300 px-2'>
              <BiDownload size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
