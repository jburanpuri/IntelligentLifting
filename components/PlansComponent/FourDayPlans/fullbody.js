import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function PowerLifting() {
  return (
    <div className="overflow-hidden bg-primary">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-2xl font-medium leading-6 text-black">4 Day - Full Body</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">Number of Days</dt>
            <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">4</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">Required Experience</dt>
            <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">Beginner/Intermediate</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">Split Type</dt>
            <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">Upper, Lower, Upper, Lower</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">Plan Focus</dt>
            <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">
              The plan is perfect for people who want to build their squat, deadlift and bench, while building lots of muscle mass. This plan is more focused on muscle than strength, but don't underestimate the strength gains!            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">Description</dt>
            <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">
            This four-day plan is ideal for individuals with busy schedules. It incorporates the three primary lifts and places a significant emphasis on recovery. 
            The plan strikes a perfect balance between increasing strength and promoting muscle growth. 
            Notably, the plan does not include supersets or drop sets, making it less complicated and more straightforward. 
            It would be unwise to underestimate this plan; despite the relatively low number of sets, it is critical to train with maximum intensity and focus. 
            If executed correctly, these four days of training will lead to noticeable gains in both muscle size and strength. 
            The plan places a strong emphasis on developing aesthetically pleasing muscles such as the V-taper: wide shoulders, and back. 
            If you don't feel exhausted at the conclusion of each workout, you're not pushing yourself hard enough.
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">Download Link</dt>
            <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-base">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 w-0 flex-1 truncate">Four Day Full Body Routine</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="https://docs.google.com/spreadsheets/d/1y5RkqqA1c7p7JsTQErQzlwrkRdmNFaKQ/edit?usp=sharing&ouid=110518756502049683097&rtpof=true&sd=true" target="_blank" rel="noreferrer" className="font-medium text-indigo-600 hover:text-indigo-500">
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
