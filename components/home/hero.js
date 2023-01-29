import Animation from "./animation";
import Link from 'next/link';

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            우리가족 추억을 기억하며
                <br className="hidden lg:inline-block"/>
                우측 전신 편마비의 다발성 경화증 환자 김주환. 포기를 모르는 남자
            </h1>
            <p className="mb-8 leading-relaxed">
            2023년 1월 11일 오전9시쯤, 일본에서 문득 어머니께 안부 전화를 해봤다. [여보세요]조차 말할 수 없을 지경에 이른 사실을 그때서야 확인했다. 아버지는 조금 위독하다는 말을 했다. 나는 바로 비행기 예약을 하기 위해서 위독하다면 1월 설연휴 전에 가는 것으로 정하고 16일행 티켓을 예약했다. 그러부터 몇시간 뒤 아버지에게 어머니 장례식장으로 이동중이라는 연락을 받았다. 그렇게 허망하게 어머니를 떠나보냈다. 그후로 남은 가족들을 추억하며 내가 할수 있는 추억과 추모를 해본다.
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
