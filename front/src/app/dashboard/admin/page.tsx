import SidebarWithHeader from "@/components/organisms/Sidebar";

const AdminDashboard = () => {
  return (
    <SidebarWithHeader
      links={[{ name: "Home", icon: { name: "FaHouse", library: "fa6" }, href: 'home' }]}
    >
      <h1>Test</h1>
    </SidebarWithHeader>
  );
};

export default AdminDashboard;
