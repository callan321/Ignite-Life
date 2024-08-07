import {address, email, hours, phone} from "../config.ts";
import BlueLink from "../components/BlueLink.tsx";

export default function Footer() {
    return (
        <footer className="bg-white w-full flex flex-col justify-center items-center">
            <div className="lg:w-3/4">
                <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex items-center justify-center w-56 h-56 overflow-hidden">

                        <img
                            src="/slogan.png"
                            alt="Ignite Life Slogan"
                            style={{
                                transform: 'scale(1.5)',
                            }}
                        />

                    </div>
                    <div className="flex-col flex w-full pl-8">
                        <div className="space-y-0.5">
                            {hours.map((item) => (
                                <div key={item.day} className="text-xs text-left">
                                    <div className="font-medium">{item.day}</div>
                                    <div>{item.hours}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-col flex w-full pl-8">
                        <div className="flex flex-col text-xs space-y-2">
                            <h3 className="font-medium text-sm">Contact details</h3>
                            <BlueLink name={phone.phone} href={phone.href} text={'P'}/>
                            <BlueLink name={email.email} href={email.href} text={'E'}/>

                            <div className="space-y-1">
                                <p>{address.street}</p>
                                <p>{`${address.city}, ${address.state}`}</p>
                                <p>
                                    <BlueLink href={address.href} name={'Get Directions'}/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col flex w-full pl-8">
                        <div className="flex flex-col text-xs space-y-2">
                            <h3 className="font-medium text-sm">Newsletter</h3>
                            <p>Coming Soon...</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-16 w-full">
                <p className="text-center text-xs leading-5 text-gray-500">
                    &copy; Ignite Life Bowen Therapy
                </p>
            </div>
        </footer>
    );
}


