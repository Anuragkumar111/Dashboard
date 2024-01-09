import { MdChevronRight, MdChevronLeft, MdSearch } from 'react-icons/md';
import { BiSort, BiDownload } from 'react-icons/bi';
import { transactionsConsts } from '../constants/transactionConsts';

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
      <div className='shadow-lg  mt-6 space-y-4 p-4'>
        <div className='flex flex-row justify-between'>
          <div className='border w-1/4 border-gray-300 flex flex-row items-center rounded-md p-2 space-x-2'>
            <MdSearch className='fill-gray-500' size={20} />
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
        <div className='lg:h-[500px] h-full'>
          <table className='w-full h-[480px] border-collapse border-none'>
            <thead>
              <tr className='bg-[#F2F2F2] border-none'>
                <th className='text-left font-medium py-2 pl-4'>Order ID</th>
                <th className='text-left font-medium pl-6'>Order Date</th>
                <th className='font-medium'>Order Amount</th>
                <th className='text-right font-medium pr-4'>Fees</th>
              </tr>
            </thead>
            <tbody className='text-center border-none'>
              {transactionsConsts.map((trans, index) => (
                <tr key={index} className='border-b-[#E6E6E6] border-b '>
                  <td className='text-blue-600 text-left pl-6'>
                    {trans.orderId}
                  </td>
                  <td className='text-left pl-7'>{trans.orderDate}</td>
                  <td className='pl-8'>{trans.orderAmount}</td>
                  <td className='text-right pr-4'>{trans.fees}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='flex justify-center items-center w-full'>
          <div className='text-center flex'>
            <div className='flex flex-row items-center pr-2 space-x-1 border rounded border-cyan-950  hover:cursor-pointer'>
              <MdChevronLeft />
              <p>Previous</p>
            </div>
            <div className='w-[350p] flex overflow-hidden'>
              {Array.from({ length: 6 }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`h-[25px] w-[20px] mx-[6px] rounded-[3px] text-[16px] ${
                    page === 2 ? 'bg-blue-500 text-white' : ''
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <div className='flex flex-row pl-2 space-x-1 items-center border rounded border-gray-300 hover:cursor-pointer'>
              <p>Next</p>
              <MdChevronRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
