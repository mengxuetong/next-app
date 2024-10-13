export default function AuthLayout({ children }: { children: React.ReactNode}) {
    return (
        <div className="bg-blue-600">
            {children}
        </div>
    )
}