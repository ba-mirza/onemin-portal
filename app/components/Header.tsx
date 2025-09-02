import { Button } from "./ui/button";

export default function Header() {
    return (
        <div className="m-auto md:w-[1300px] mt-8">
            <div className="flex items-center md:justify-between">
                <h1 className="uppercase text-2xl">onemin.kz</h1>
                <Button variant="destructive" className="uppercase">Получать рассылку</Button>
            </div>
            <div className="mt-2 md:w-full h-[74px] bg-[#202020] md:rounded-lg">
            </div>
        </div>
    )
}