import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex h-screen flex-col items-center justify-center '>
      <div className='bg-[#a592b9] w-full h-full py-16 px-6 flex flex-col gap-32 '>
        <div className='w-full h-14  '>
          <input
            type='number'
            className='w-full h-full rounded-2xl outline-none px-4'
          />
        </div>

        <div class='bg-[#b4a3c5] px-10 py-8 rounded-xl grid grid-cols-4 gap-12'>
          <button class='btn'>1</button>
          <button class='btn'>2</button>
          <button class='btn'>3</button>
          <button class='btn'>+</button>

          <button class='btn'>4</button>
          <button class='btn'>5</button>
          <button class='btn'>6</button>
          <button class='btn'>-</button>

          <button class='btn'>7</button>
          <button class='btn'>8</button>
          <button class='btn'>9</button>
          <button class='btn'>/</button>

          <button class='btn'>0</button>
          <button class='btn'>.</button>
          <button class='btn'>=</button>
          <button class='btn'>*</button>
        </div>
      </div>
    </main>
  );
}
