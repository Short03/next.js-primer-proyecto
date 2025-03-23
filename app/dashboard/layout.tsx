import SideNav from "../ui/dashboard/sidenav";

export default function Layout (
    {children} : { children: React.ReactNode} // resive el children que es loq ue esta envolviendo
    )
{
    return(
        <div className="flex hh-screen flex-col md:flex-row md:overflow-hidden ">
            <div className="w-full flex-none md:w-64">
                <SideNav/>
            </div>
            <div className="flex-grow p-6 md:overflow-u-auto md:p-12">{children}</div>
        </div>


    )
}