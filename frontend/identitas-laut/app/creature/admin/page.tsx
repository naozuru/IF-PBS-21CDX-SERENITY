import React from 'react'

export default function adminCreature() {
  return (
    <div className='m-10'>
        <table className='table-auto w-full'>
            <thead>
                <tr>
                    <th className='w-1/12 border-solid border-2 p-3 bg-emerald-800'>No</th>
                    <th className='w-2/12 border-solid border-2 p-3 bg-emerald-800'>Nama ID</th>
                    <th className='w-2/12 border-solid border-2 p-3 bg-emerald-800'>Nama EN</th>
                    <th className='w-2/12 border-solid border-2 p-3 bg-emerald-800'>Domain</th>
                    <th className='w-2/12 border-solid border-2 p-3 bg-emerald-800'>Kingdom</th>
                    <th className='w-2/12 border-solid border-2 p-3 bg-emerald-800'>Phylum</th>
                    <th className='w-2/12 border-solid border-2 p-3 bg-emerald-800'>Class</th>
                    <th className='w-2/12 border-solid border-2 p-3 bg-emerald-800'>Order</th>
                    <th className='w-2/12 border-solid border-2 p-3 bg-emerald-800'>Infraorder</th>
                    <th className='w-2/12 border-solid border-2 p-3 bg-emerald-800'>Family</th>
                    <th className='w-2/12 border-solid border-2 p-3 bg-emerald-800'>Genus</th>
                    <th className='w-2/12 border-solid border-2 p-3 bg-emerald-800'>Species</th>
                    <th className='w-2/12 border-solid border-2 p-3 bg-emerald-800'>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='text-center border-solid border-2'>1</td>
                    <td className='border-solid border-2'>Ubur-ubur</td>
                    <td className='border-solid border-2'>Ubur-ubur</td>
                    <td className='border-solid border-2'>Ubur-ubur</td>
                    <td className='border-solid border-2'>Ubur-ubur</td>
                    <td className='border-solid border-2'>Ubur-ubur</td>
                    <td className='border-solid border-2'>Ubur-ubur</td>
                    <td className='border-solid border-2'>Ubur-ubur</td>
                    <td className='border-solid border-2'>Ubur-ubur</td>
                    <td className='border-solid border-2'>Ubur-ubur</td>
                    <td className='border-solid border-2'>Ubur-ubur</td>
                    <td className='border-solid border-2'>Ubur-ubur</td>
                    <td className='text-center border-solid border-2'>
                        <button className='bg-yellow-300 rounded-md px-4 m-0.5'>Edit</button>
                        <button className='bg-red-600 rounded-md px-1.5 m-0.5'>Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
