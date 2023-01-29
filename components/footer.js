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

                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2023 아들 우측 전신 편마비의 다발성 경화증 환자 김주환 제작 —
                        <a href="https://twitter.com/@picsmash7" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@picsmash</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

                    <a href="https://www.facebook.com/picsmash" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="48" height="48"
                        viewBox="0 0 48 48">
                        <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                    </svg>
                    </a>

                    <a href="https://twitter.com/@picsmash7" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="48" height="48"
                    viewBox="0 0 48 48">
                    <path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
                    </svg>
                    </a>

                    <a href="https://www.youtube.com/picsmash" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="48" height="48"
                    viewBox="0 0 48 48">
                    <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                    </svg>
                    </a>

                    <a href="https://steemit.com/@picsmash" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">
                    <svg width="48px" height="48px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.982 7.246a9.659 9.659 0 0 0-3.4-2.202c.721-2.12 3.277-2.892 3.277-2.892A21.632 21.632 0 0 0 8.31.29a10.14 10.14 0 0 0-5.842 3.478 9.152 9.152 0 0 0 .991 12.984c.598.512 1.934 1.308 1.958 1.349-.876 2.226-3.678 2.835-3.678 2.835a23.335 23.335 0 0 0 8.676 2.917 18.256 18.256 0 0 0 4.17.05 10.598 10.598 0 0 0 6.34-3.12 9.525 9.525 0 0 0 .058-13.538zm-1.704 12.058a8.886 8.886 0 0 1-5.137 2.381 16.265 16.265 0 0 1-3.555-.016 16.9 16.9 0 0 1-4.22-1.154 6.277 6.277 0 0 0 1.5-2.145 1.652 1.652 0 0 0-.05-1.308 6.995 6.995 0 0 1 1.426-8.077 7.26 7.26 0 0 1 10.159.057 7.324 7.324 0 0 1-.123 10.262z"/></svg>
                    </a>

                    </span>
                    </div>
                </div>
                </footer>
        </>
    );
}
