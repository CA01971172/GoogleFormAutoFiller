import { ReactNode } from "react";
import { DataProvider } from "./DataProvider";

export default function Providers({children}: {children: ReactNode}) {
    return (
        <DataProvider>
            {children}
        </DataProvider>
    )
}