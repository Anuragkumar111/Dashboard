import {
  FaRegQuestionCircle,
  FaCaretDown,
  FaCommentDots,
  FaSearch,
} from 'react-icons/fa';

const navbar = () => {
  return (
    <div className='w-auto flex flex-row justify-between border-b-2 px-4 py-2'>
      <div className='flex flex-row items-center'>
        <p>Payments</p>
        <FaRegQuestionCircle className='mr-2 ml-4 fill-gray-600 text-xs' />
        <p className=' text-gray-600 text-xs'>How it works</p>
      </div>
      <div className='flex flex-row items-center bg-gray-200 rounded-md p-2 space-x-2'>
        <FaSearch className='fill-gray-500' />
        <input
          type='text'
          placeholder='Search features, tutorials, etc.'
          className='bg-gray-200 w-96 placeholder-gray-600 focus:outline-none'
        />
      </div>
      <div className='flex flex-row'>
        <div className='w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center'>
          <FaCommentDots />
        </div>
        <div className='w-8 h-8 ml-2 bg-gray-200 rounded-full flex items-center justify-center'>
          <FaCaretDown />
        </div>
      </div>
    </div>
  );
};

export default navbar;
