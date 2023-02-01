import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function PowerLifting() {
  return (
    <div className="overflow-hidden bg-primary">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-2xl font-medium leading-6 text-black">COMING SOON: 5 Day - Full Body Focused</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">Number of Days</dt>
            <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">5</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">Required Experience</dt>
            <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">All Experience</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">Split Type</dt>
            <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">Push, Legs, Pull, Upper, Lower</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">Plan Focus</dt>
            <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">This plan is going to focus on hypertropphy of the most aesthetic muscles to make you look huge!</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">Description</dt>
            <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">
            Description coming soon!
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">Download Link</dt>
            <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-base">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 w-0 flex-1 truncate">Five Day Hypertrophy Routine</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="" target="_blank" rel="noreferrer" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Coming Soon
                    </a>
                  </div>
                </li>
            
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
