export default function Hero() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-center lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to start?</span>
          <span className="block text-indigo-600">
            Schedule a meeting{' '}
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 underline underline-offset-1"
            >
              here
            </a>
          </span>
        </h2>
      </div>
    </div>
  )
}
