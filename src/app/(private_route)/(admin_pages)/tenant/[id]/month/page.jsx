import MonthlyTable from "./../../../../../../components/MonthlyTable";

const TenantInfoPage = ({ params }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <MonthlyTable myparam={params.id} />
    </div>
  );
};

export default TenantInfoPage;
