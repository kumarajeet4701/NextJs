export default function DashboardLayout({
    children,
    users,
    revenue,
    notifications,
    login,
}: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    login: React.ReactNode;
}) {
    const isLoggedIn = true; // Assuming isLoggedIn state for demonstration

    return isLoggedIn ? (
        <>
            <div>{children}</div> {/* Main content */}
            <div style={{ display: "flex" }}>
                {/* Sidebar */}
                <div style={{ flexDirection: "column" }}>
                    <div>{users}</div> {/* Users section */}
                    <div>{revenue}</div> {/* Revenue section */}
                </div>
                {/* Notifications */}
                <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
            </div>
        </>
    ) : (
        <div>{login}</div>
        
    )
}
