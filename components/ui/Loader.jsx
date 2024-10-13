import Image from "next/image";

const Loader = ({delaySec = 2}) => {
    return (
        <div
            className="max-h-auto overflow-y-hidden w-full h-full absolute top-0 left-0 flex items-center justify-center bg-black animate-slideUp z-50"
            style={{ animationDelay: `${delaySec}s` }}
        >
            {/* <Image src={'/logo.png'} width={200} height={200} alt="trendy-logo"/> */}
            <div className="text-9xl font-bold m-10 gradient-text gradient-animation">Trendy</div>
        </div>
    )
}
export default Loader;
