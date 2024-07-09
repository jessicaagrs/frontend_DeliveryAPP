import Sidebar from "@/components/ui/sidebar/Sidebar";
import { useState } from "react";

export function useSidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const showSidebar = () => {
        setIsOpen(true);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    const SidebarComponent = () => (
        <Sidebar
            isOpen={isOpen}
            handleClose={closeSidebar}
        />
    );

    return {
        showSidebar,
        closeSidebar,
        SidebarComponent,
    };
}
