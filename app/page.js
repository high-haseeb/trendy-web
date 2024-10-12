import Image from 'next/image';

export default function Home() {
    return (
        <div className="w-screen h-screen font-sf">
            <main className="flex flex-col items-center justify-center w-full h-full">
                <Image src={'/logo.png'} height={200} width={200} alt='trendy-logo' className='mix-blend-screen'/>
                <div className="text-9xl font-bold m-10">Trendy</div>
                <div className="text-3xl font-normal w-1/3 text-center">Increase your annual revenue by up to <span className="font-bold">40%</span> with the most accurate consumer market insights</div>
            </main>
        </div>
    );
}
