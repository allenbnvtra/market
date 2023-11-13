import History from "@/components/History";
import TenantInfoBox from "@/components/TenantInfoBox";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <TenantInfoBox />
      <History />
    </div>
  );
};

export default page;