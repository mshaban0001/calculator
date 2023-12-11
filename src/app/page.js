import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex h-screen flex-col items-center justify-center '>
      <div className='bg-[#a6b992] w-full h-full py-16'>
        <div className='w-full h-14 px-6 '>
          <input
            type='number'
            className='w-full h-full rounded-2xl outline-none px-4'
          />
        </div>
      </div>
    </main>
  );
}
