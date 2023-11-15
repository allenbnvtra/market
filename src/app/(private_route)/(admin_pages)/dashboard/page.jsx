import DashboardBox from "./../../../../components/DashboardBox";

const DashboardPage = () => {
  return (
    <section className="flex flex-col gap-5 items-center">
      <div>
        <div className="flex flex-col gap-5 sm:gap-1 sm:flex-row md:gap-6">
          <DashboardBox
            imageIcon="https://agents747.com/global/templates/template/build/static/media/all_players.6dbefe83.svg"
            title="Total tenants"
            amount="10"
          />

          <DashboardBox
            imageIcon="https://agents747.com/global/templates/template/build/static/media/total_bets.cc6e525d.svg"
            title="Total Paid Bills"
            amount="10,932"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-5 sm:gap-1 sm:flex-row md:gap-6">
          <DashboardBox
            imageIcon="https://agents747.com/global/templates/template/build/static/media/total_registered_players.1987a74a.svg"
            title="Total Tenants (BILLS PAID)"
            amount="7"
          />

          <DashboardBox
            imageIcon="https://agents747.com/global/templates/template/build/static/media/total_open_bets.1557cdc6.svg"
            title="Total Unpaid Bills"
            amount="3,012"
          />
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
