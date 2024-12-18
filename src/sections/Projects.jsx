const Projects = () => {
  return (
    <section id="projects" className="w-full px-4 sm:px-6 md:px-10">
      <h1 className="text-4xl text-center font-subheader mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto max-w-screen-lg">
        {/* Card 1 */}
        <a
          href=""
          className="border border-white/30 rounded-lg flex flex-col justify-between bg-white/20 backdrop-blur-[2px] shadow-xl
          hover:scale-105 hover:translate-y-[-10px] transition-all duration-300 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          <video
            src="./assets/videos/portfolio.mp4"
            alt="Portfolio Demo"
            className="h-48 w-full object-cover rounded-t-lg border-b border-white/30 opacity-90"
            autoPlay
            loop
            muted
          />
          <div className="p-4 flex-grow">
            <h3 className="text-2xl font-subheader">Personal Portfolio</h3>
            <p className="text-base font-body font-extralight">
              This is my personal portfolio, where I showcase my projects and
              skills.
            </p>
          </div>
          <div className="p-3">
            <div className="flex flex-wrap gap-2">
              <span className="font-body bg-green/50 text-foreground px-2 py-1 rounded-md text-xs">React</span>
              <span className="font-body bg-green/50 text-foreground px-2 py-1 rounded-md text-xs">Tailwind CSS</span>
              <span className="font-body bg-green/50 text-foreground px-2 py-1 rounded-md text-xs">JavaScript</span>
            </div>
          </div>
        </a>

        <a
          href="https://github.com/johnwaugh1/Y86-Simulator"
          className="border border-white/30 rounded-lg flex flex-col justify-between bg-white/20 backdrop-blur-[2px] shadow-xl
          hover:scale-105 hover:translate-y-[-10px] transition-all duration-300 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./assets/images/y86.jpg"
            alt="Portfolio"
            className="h-48 w-full object-cover rounded-t-lg border-b border-white/30 opacity-90"
            style={{ objectPosition: "50% 40%" }}
          />
          <div className="p-4 flex-grow">
            <h3 className="text-2xl font-subheader">Y86 ISA Simulator</h3>
            <p className="text-base font-body font-extralight">
              A Y86 ISA simulator written in C/C++. This was a project in which
              myself and a friend wrote a working simulation of a Y86
              microprocessor.
            </p>
          </div>
          <div className="p-3">
            <div className="flex flex-wrap gap-2">
              <span className="font-body bg-green/50 text-foreground px-2 py-1 rounded-md text-xs">C</span>
              <span className="font-body bg-green/50 text-foreground px-2 py-1 rounded-md text-xs">C++</span>
              <span className="font-body bg-green/50 text-foreground px-2 py-1 rounded-md text-xs">Y86 Assembly</span>
            </div>
          </div>
        </a>

        <a
          href="https://github.com/johnwaugh1/Typed-Lambda-Interpreter"
          className="border border-white/30 rounded-lg flex flex-col justify-between bg-white/20 backdrop-blur-[2px] shadow-xl
          hover:scale-105 hover:translate-y-[-10px] transition-all duration-300 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./assets/images/lambdacalc.jpg"
            alt="Typed Lambda Interpreter"
            className="h-48 w-full object-cover rounded-t-lg border-b border-white/30 opacity-90"
          />
          <div className="p-4 flex-grow">
            <h3 className="text-2xl font-subheader">Typed Lambda Interpreter</h3>
            <p className="text-base font-body font-extralight">
              A small project which interprets a typed lambda calculus language
              similar to PCF in Haskell.
            </p>
          </div>
          <div className="p-3">
            <div className="flex flex-wrap gap-2">
              <span className="font-body bg-green/50 text-foreground px-2 py-1 rounded-md text-xs">Haskell</span>
            </div>
          </div>
        </a>

        <a
          href="https://github.com/johnwaugh1/CS3430-Database-System"
          className="border border-white/30 rounded-lg flex flex-col justify-between bg-white/20 backdrop-blur-[2px] shadow-xl
          hover:scale-105 hover:translate-y-[-10px] transition-all duration-300 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./assets/images/database.jpg"
            alt="Database System"
            className="h-48 w-full object-cover rounded-t-lg border-b border-white/30 opacity-90"
          />
          <div className="p-4 flex-grow">
            <h3 className="text-2xl font-subheader">Database System</h3>
            <p className="text-base font-body font-extralight">
              A database management system designed for a fictional company.
            </p>
          </div>
          <div className="p-3">
            <div className="flex flex-wrap gap-2">
              <span className="font-body bg-green/50 text-foreground px-2 py-1 rounded-md text-xs">MySQL</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
