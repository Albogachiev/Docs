import Link from 'next/link';

const Home = () => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-500'>
      Click
      <Link href='/documents/123'>
        <span className='text-blue-500 underline'>here </span>
      </Link>{' '}
      to go to document
    </div>
  );
};

export default Home;
