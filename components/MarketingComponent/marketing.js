import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Adapts to your body',
    description:
      "Don't get a basic plan with that is made from everyone. You should get a plan that is made for you. A plan which adapts to your body and your goals. A plan where you can choose your own exercises.",
    icon: GlobeAltIcon,
  },
  {
    name: 'Specialized plans',
    description:
      "Want to specialize in glute or leg training? Get a specialized plan and make it happen.",
    icon: ScaleIcon,
  },
  {
    name: 'Created with science',
    description:
      "We use research to create our plans. Not bro-science. We have high intensity to high volume plans, and everything in between.",
    icon: BoltIcon,
  },
  {
    name: 'Incredibly cheap',
    description:
      'Stop spending so much behind cookie cutter plans. Get a plan that is tailored to you, and your goals, for insanely cheap.',
    icon: DevicePhoneMobileIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A smarter way to train</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Don't get a cookie cutter plan. Get a plan that is tailored to your goals and needs. Our plans adapt to your training and your body, and can be the difference between a plateau and a breakthrough.
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
