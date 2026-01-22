import React from 'react'

export default function App() {
  return (
<div className="flex gap-5 bg-amber-300 p-4 m-4 w-[900px] items-stretch">
      
      {/* Image */}
      <div className="flex-shrink-0">
        <img
          src="https://ychef.files.bbci.co.uk/1280x720/p01z199k.jpg"
          alt="Pulp Fiction"
          className="w-80 h-full object-cover rounded-xl shadow-2xl"
        />
      </div>

      {/* Content */}
      <div>
        <h1 className="text-2xl font-bold">
          Pulp Fiction{" "}
          <sup className="text-lg font-semibold">1994</sup>
        </h1>

        <p className="font-normal">2hr 35min</p>

        <div className="flex gap-3 mt-3">
          <p className="bg-fuchsia-600 rounded-xl text-amber-50 p-2 text-lg flex items-center justify-center">
            Comedy
          </p>
          <p className="bg-fuchsia-600 rounded-xl text-amber-50 p-2 text-lg flex items-center justify-center">
            Horror
          </p>
          <p className="bg-fuchsia-600 rounded-xl text-amber-50 p-2 text-lg flex items-center justify-center">
            Romantic
          </p>
        </div>

        <h1 className="text-2xl font-bold mt-4">Summary</h1>
        <p className="mt-2 text-justify p-3">
          The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair
          of diner bandits intertwine in four tales of violence and redemption.
          With its nonlinear storytelling, eclectic dialogue, and ironic mix of
          humor and violence, Pulp Fiction is widely regarded as Tarantino’s
          masterpiece. The film weaves together stories of Los Angeles mobsters,
          fringe players, small-time criminals, and a mysterious briefcase, all
          told out of chronological order.
        </p>
      </div>
    </div>
  )
}
