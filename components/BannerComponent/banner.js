import { MegaphoneIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Banner() {
  return (
    <div className="bg-indigo-600">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg bg-indigo-800 p-2">
              <MegaphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 truncate font-medium text-white">
              <span className="md:hidden">Excited to launch Intelligent Lifting</span>
              <span className="hidden md:inline">Intelligent Lifting is launching soon, and we aim to disrupt the workout industry. Check out our vision and schedule on GitHub</span>
            </p>
          </div>
          <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="https://github.com/jburanpuri/IntelligentLifting"
              className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}