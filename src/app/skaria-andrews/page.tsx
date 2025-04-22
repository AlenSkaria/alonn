export default function SkariaPortfolioPage() {
    return (
      <main className="p-4 max-w-screen-md mx-auto">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">Hi, I'm Skaria 👋</h1>
          <p className="text-sm text-gray-600 mt-2 sm:text-base">
            A passionate developer crafting beautiful web experiences.
          </p>
        </header>
  
        {/* Projects Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Projects</h2>
  
          <div className="space-y-4">
            {/* Project Card */}
            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-indigo-600">Neighar</h3>
              <p className="text-sm text-gray-600 mt-1">
                A local community app to connect neighborhoods with language support.
              </p>
            </div>
  
            {/* Another Project Card */}
            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-indigo-600">Linkcrate</h3>
              <p className="text-sm text-gray-600 mt-1">
                A smart link-sharing platform like Linktree, built with Angular & Firebase.
              </p>
            </div>
          </div>
        </section>
  
        {/* Contact CTA */}
        <section className="mt-8 text-center">
          <p className="text-gray-700">Want to work together?</p>
          <a
            href="mailto:you@example.com"
            className="inline-block mt-2 px-6 py-2 bg-indigo-600 text-white rounded-full text-sm hover:bg-indigo-700 transition"
          >
            Contact Me
          </a>
        </section>
      </main>
    );
  }
  