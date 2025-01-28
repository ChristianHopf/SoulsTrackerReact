// import React from 'react'
import Header from "../components/layout/Header";
import InputRow from "../components/input/InputRow";
import UserInfo from "../components/stats/UserInfo";

function StatsPage() {
  return (
    <div className="min-h-screen w-full bg-bg-dark">
      <Header />
      <div className="container m-auto">
        <InputRow />
        <div className="flex flex-col gap-4 max-w-6xl mx-auto py-4">
          <UserInfo />
        </div>
      </div>
    </div>
  );
}

export default StatsPage;
