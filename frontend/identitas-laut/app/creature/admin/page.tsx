import React from "react";
import { Icon, InlineIcon } from "@iconify/react";

export default function adminCreature() {
  return (
    <div>
      <div>
        <header className="bg-emerald-800 p-4 text-white">
          <nav className="">
            <div className="text-center space-x-10">
              <a className="text-md font-semibold">Home</a>
              <a className="text-md font-semibold">Creature</a>
              <a className="text-md font-semibold text-end">Plant</a>
            </div>
            <div className="text-end">
              <a className="text-md font-semibold">Login</a>
            </div>
          </nav>
        </header>
      </div>

      <div className="m-10 text-sm">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="w-1/12 border-solid border-2 p-3 bg-emerald-800">
                No
              </th>
              <th className="w-2/12 border-solid border-2 p-3 bg-emerald-800">
                Nama ID
              </th>
              <th className="w-2/12 border-solid border-2 p-3 bg-emerald-800">
                Nama EN
              </th>
              <th className="w-2/12 border-solid border-2 p-3 bg-emerald-800">
                Domain
              </th>
              <th className="w-2/12 border-solid border-2 p-3 bg-emerald-800">
                Kingdom
              </th>
              <th className="w-2/12 border-solid border-2 p-3 bg-emerald-800">
                Phylum
              </th>
              <th className="w-2/12 border-solid border-2 p-3 bg-emerald-800">
                Class
              </th>
              <th className="w-2/12 border-solid border-2 p-3 bg-emerald-800">
                Order
              </th>
              <th className="w-2/12 border-solid border-2 p-3 bg-emerald-800">
                Infraorder
              </th>
              <th className="w-2/12 border-solid border-2 p-3 bg-emerald-800">
                Family
              </th>
              <th className="w-2/12 border-solid border-2 p-3 bg-emerald-800">
                Genus
              </th>
              <th className="w-2/12 border-solid border-2 p-3 bg-emerald-800">
                Species
              </th>
              <th className="w-2/12 border-solid border-2 p-3 bg-emerald-800">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center border-solid border-2">1</td>
              <td className="border-solid border-2">Ubur-ubur</td>
              <td className="border-solid border-2">Ubur-ubur</td>
              <td className="border-solid border-2">Ubur-ubur</td>
              <td className="border-solid border-2">Ubur-ubur</td>
              <td className="border-solid border-2">Ubur-ubur</td>
              <td className="border-solid border-2">Ubur-ubur</td>
              <td className="border-solid border-2">Ubur-ubur</td>
              <td className="border-solid border-2">Ubur-ubur</td>
              <td className="border-solid border-2">Ubur-ubur</td>
              <td className="border-solid border-2">Ubur-ubur</td>
              <td className="border-solid border-2">Ubur-ubur</td>
              <td className="text-center border-solid border-2">
                <button className="bg-yellow-300 rounded-md px-4 m-0.5 inline-flex items-center justify-start space-x-1">
                  <Icon icon="basil:edit-outline" />
                  <span>Edit</span>
                </button>
                <button className="bg-red-600 rounded-md px-1.5 m-0.5 inline-flex items-center space-x-1">
                  <InlineIcon icon="mdi-light:alert" />
                  <span>Delete</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
