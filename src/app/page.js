'use client';

import { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (value) => {
    setInputValue((prevValue) => prevValue + value);
  };

  const handleCalculate = () => {
    try {
      setInputValue(eval(inputValue).toString());
    } catch (error) {
      setInputValue('Error');
    }
  };

  const handleClear = () => {
    setInputValue('');
  };

  return (
    <main className='flex h-screen flex-col items-center justify-center '>
      <div className='bg-[#a592b9] w-full h-full py-16 px-6 flex flex-col gap-32 '>
        <div className='w-full h-14  '>
          <input
            type='text'
            value={inputValue}
            className='w-full max-w-full h-full rounded-2xl outline-none px-4'
            readOnly
          />
        </div>

        <div class='bg-[#b4a3c5] px-10 py-8 rounded-xl grid grid-cols-4 gap-12'>
          {[1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '/', 0, '.', '=', '*'].map(
            (btnValue, index) => (
              <button
                key={index}
                className='btn md:w-1/4'
                onClick={() =>
                  btnValue === '='
                    ? handleCalculate()
                    : handleButtonClick(btnValue)
                }>
                {btnValue}
              </button>
            )
          )}
          <button className='btn md:w-1/4' onClick={handleClear}>
            C
          </button>
        </div>
      </div>
    </main>
  );
}
