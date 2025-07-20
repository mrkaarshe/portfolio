import React from 'react'

export default function Section() {
  return (
   <section className='bg-white shadow-md hover:shadow-sm hover:duration-300 py-10 rounded-4xl px-10 my-1'>
  <ol className='flex justify-around items-center w-full list-decimal list-inside'>
    <li className='text-gray-700 font-bold font-sans text-xs '><a href="https://www.toptal.com/">Toptal</a></li>
    <li className='text-gray-700 font-bold font-sans text-xs'><a href="https://www.accenture.com/de-de">Fjord</a></li>
    <li className='text-gray-700 font-bold font-sans text-xs'><a href="https://flexiple.com/"></a>Flexiple</li>
    <li className='text-gray-700 font-bold font-sans text-xs'><a href="https://www.topcoder.com/">Topcoder</a></li>
  </ol>
</section>

  )
}
