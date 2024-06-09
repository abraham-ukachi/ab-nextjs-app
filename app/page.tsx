import Image from "next/image";
import Link from "next/link";





export default function Home() {
  return (
    <main className="flex flex-col relative w-full h-dvh items-center justify-center box-border p-6 select-none">

      {/* Container */}
      <div className="Container relative flex flex-col size-full grow overflow-auto items-left lg:items-center justify-center rounded-lg lg:rounded-xl lg:bg-white/40 lg:dark:bg-black/10 p-0 lg:p-24">
         
        <Image 
          src="/me.jpg"
          alt="Abraham UKachi"
          // className="relative rounded-full outline outline-4 outline-[#8B5000] size-12 lg:size-24"
          className="relative rounded-full size-12 my-4 lg:size-48 lg:my-8"
          width={256}
          height={256}
          priority
        />

        <Link
          className="flex w-fit hover:no-underline"
          href="https://github.com/abraham-ukachi/ab-nextjs-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Abraham Ukachi - SVG */}
          <Image
            src="/abraham-ukachi.svg"
            alt="Abraham Ukachi - SVG"
            className="dark:invert w-[140px] h-[24px] lg:w-[280px] lg:h-[48px]"
            width={560}
            height={96}
            priority
          />

        </Link>


        {/* Coming Soon - Title */}
        <h1 className="text-4xl text-[#8B5000] dark:text-[#FFB86B] font-bold my-2 animate-pulse hover:animate-none lg:text-7xl lg:uppercase lg:my-4">Coming Soon</h1>
        
        {/* Description */}
        <p className="text-base max-w-lg lg:text-xl lg:text-center">
          <span>The official web app - portfolio + AI assistant - of </span>
          <span>
            <Link 
              href="https://github.com/abraham-ukachi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group/author font-medium text-[#8B5000]/80 hover:text-[#8B5000] dark:hover:text-[#FFB86B] hover:underline decoration-dashed underline-offset-4 relative">

              {'Abraham Ukachi'}

            </Link>
          </span>

          {' '}

          <span>built with ❤️ using 
            `<Link 
              href="https://nextjs.org/docs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#8B5000] dark:hover:text-[#FFB86B] hover:underline decoration-dashed underline-offset-4">
              Next.js
            </Link>`

            {'and initially deployed on '}

            `<Link 
              href="https://vercel.com/docs/getting-started-with-vercel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#8B5000] dark:hover:text-[#FFB86B] hover:underline decoration-dashed underline-offset-4">
              Vercel
            </Link>`.
          </span>
        </p>
        


        {/* Footer */}
        <footer className="absolute bottom-0 place-self-center flex flex-col items-center justify-center w-full h-auto">
          {/* Github - Link */}
          <Link 
            href="https://github.com/abraham-ukachi/ab-nextjs-app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="my-4 opacity-20 transition-opacity hover:opacity-80 dark:invert animate-bounce hover:animate-none">

            <Image 
              src="/github-logo.svg"
              alt="Github Logo"
              className="size-8 lg:size-12"
              width={48}
              height={48}
              priority
            />

          </Link>


        </footer>
           

        <div className="absolute place-self-center z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-amber-200 after:via-yellow-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-yellow-700 before:dark:opacity-10 after:dark:from-amber-900 after:dark:via-[#FFB86B] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] -mt-24 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]">
        </div>

      </div>
      {/* End of Container */}


      {/* Copyright */}
      <p className="text-xs lg:text-sm opacity-50 mt-2 lg:mt-4">© {new Date().getFullYear()} abraham-ukachi. All rights reserved.</p>




    </main>
  );
}
