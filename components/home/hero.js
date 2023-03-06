import Animation from "./animation";
import Link from 'next/link';

export default function Hero() {
	return (
		<>
			<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
				<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
					어머니를 떠나보내며 우리가족을 추억하다.
				</h1>
				<p className="mb-8 leading-relaxed">
					2023년 1월 11일 오전9시쯤, 일본에서 지내다가 문득 어머니께 안부 전화를 해봤다. [여보세요]조차 말할 수 없을 지경에 이른 사실을 그때 확인했다. 아버지는 어머니가 위독하다는 말을 하셨다. 그래서 1월 16일행 티켓을 예매했다. 하지만 몇시간 뒤 어머니를 장례식장으로 이동중이라는 연락을 받았다. 그렇게 허망하게 어머니를 떠나보냈다. 그 이후 선산집에서 우리 가족들을 추억하며...
				</p>
			<div className="flex justify-center">
				<Link href="/projects">
					<a className="btn-project">
						우리가족 보러가기
					</a>
				</Link>
			</div>
			</div>
			<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
				<Animation/>
			</div>
		</>
	);
}
