import Loader from "@/components/ui/Loader";
import CountUp from "@/components/ui/CountUp";
import App from "@/components/ui/Test";

export default function Home() {
    return (
        <div className="w-screen h-screen font-sf text-pretty">
            <main className="flex flex-col items-center justify-center w-screen bg-black font-bold">
                <Loader />
                <div className="w-full h-screen flex items-center justify-center">
                    <div className="text-7xl w-1/2 text-center">
                        Increase your annual revenue by up to <CountUp target={40} /> with the most accurate consumer market insights.
                    </div>
                </div>

                <div className="w-full h-screen">
                    <App />
                </div>

            </main>
        </div>
    );
}
