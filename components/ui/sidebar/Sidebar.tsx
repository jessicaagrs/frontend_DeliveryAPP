import Link from "next/link";

type SidebarProps = {
    isOpen: boolean;
};

export default function Sidebar({ isOpen }: SidebarProps) {
    if (isOpen) {
        return (
            <div>
                <div>
                    <div>
                        Nome/Email
                    </div>
                    <ul>
                        <li><Link href="/Home" />Home</li>
                    </ul>
                </div>
            </div>
        );
    }

    return (<></>);
};