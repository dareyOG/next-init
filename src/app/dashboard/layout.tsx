import '../globals.css';

function DashboardLayout({
  children,
  notifications,
  revenue,
  user,
  login
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  user: React.ReactNode;
  login: React.ReactNode;
}) {
  // const isLoggedIn = false;
  const isLoggedIn = true;

  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col">
          <div>{user}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex flex-1">{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
}

export default DashboardLayout;
