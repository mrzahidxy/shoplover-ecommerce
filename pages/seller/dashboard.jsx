import React from "react";

const Dashboard = () => {
  console.log("This is dashboard");
  return <div className="bg-red-500">dashboard</div>;
};

export default Dashboard;

Dashboard.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
