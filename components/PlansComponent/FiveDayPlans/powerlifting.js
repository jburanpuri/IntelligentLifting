import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function PowerLifting() {
  return (
    <div className="overflow-hidden bg-primary">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-2xl font-medium leading-6 text-black">5 Day - Upper Body Focused</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">Number of Days</dt>
            <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">5</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">Required Experience</dt>
            <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">Begineer/Intermediate</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">Split Type</dt>
            <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">Upper, Lower, Upper, Lower, Upper</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">Plan Focus</dt>
            <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">This split focuses on Bench, Squat and Deadlift specialization, along with hypertrophy of the most aesthetic muscles</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">Description</dt>
            <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">
            Get the best of both worlds with this innovative workout plan! Designed for both beginner and intermediate lifters, this plan combines the strength-building benefits of powerlifting with the muscle-building focus of bodybuilding. 
            Using linear progression for compound lifts, this plan is perfect for those looking to see steady progress in their strength. The exciting addition of supersets and dropsets make each workout enjoyable, while the use of three different rep schemes ensures you are getting a balanced mix of volume and intensity. 
            With our advanced rating system, this plan also tailors the volume for each exercise to optimize muscle growth. No more cookie-cutter workout routines- this plan takes into account individual differences in muscle recovery, adjusting the number of sets for maximum results. 
            Get ready to see gains in both strength and muscle mass!
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">Download Link</dt>
            <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-base">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 w-0 flex-1 truncate">Five Day Powerbuilding Routine</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="https://docs.google.com/spreadsheets/d/1nCH5vzZnDh_IjT96EyHCQ6Vv68knyqcZ/edit?usp=share_link&ouid=110518756502049683097&rtpof=true&sd=true" target="_blank" rel="noreferrer" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
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
