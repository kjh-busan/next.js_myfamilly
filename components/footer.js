import Link from 'next/link';

export default function Footer(){
    return (
        <>
            <footer className="body-font">

                <div className="">
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">

                    <Link href="/">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <span className="ml-3 text-xl">김상원 가족들의 추억</span>
                        </a>
                    </Link>

                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2023 아들 김주환 제작 —
                        <a href="https://twitter.com/@picsmash7" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@picsmash</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

                    </span>
                    </div>
                </div>
                </footer>
        </>
    );
}
