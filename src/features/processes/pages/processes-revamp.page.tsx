import PageWrapper from "@/components/page-wrapper";
import ProcessComparitor from "@/features/processes/components/processes.comparator";
import ProcessesInsights from "@/features/processes/components/processes.insights";
import ProcessTable from "@/features/processes/components/processes.table";
import MultiTables, { allColumns } from "@/features/processes/components/processes.tables";
import { Grid, Space, Tabs } from "@mantine/core";
import { IconTable, IconTablePlus } from "@tabler/icons-react";

const TAB_OPTIONS = {
  segmented: { value: "segmented", label: "Segmented", icon: <IconTablePlus /> },
  all: { value: "all", label: "All", icon: <IconTable /> },
};

const ProcessesPage = () => {
  return (
    <PageWrapper name="Processes">
      <Grid>
        <Grid.Col xl={12}>
          <ProcessComparitor />
        </Grid.Col>
        {/* <Grid.Col xl={3}>
          <ProcessesInsights />
        </Grid.Col> */}

        <Grid.Col span={12}>
          <Tabs defaultValue={TAB_OPTIONS.segmented.value}>
            <Tabs.List>
              <Tabs.Tab color="teal" icon={TAB_OPTIONS.segmented.icon} value={TAB_OPTIONS.segmented.value} />
              <Tabs.Tab color="red" icon={TAB_OPTIONS.all.icon} value={TAB_OPTIONS.all.value} />
            </Tabs.List>
            <Space h={20} />
            <Tabs.Panel value={TAB_OPTIONS.segmented.value}>
              <MultiTables />
            </Tabs.Panel>
            <Tabs.Panel value={TAB_OPTIONS.all.value}>
              <ProcessTable title="All Processes" columnDefs={allColumns} />
            </Tabs.Panel>
          </Tabs>
        </Grid.Col>
      </Grid>
    </PageWrapper>
  );
};

export default ProcessesPage;
