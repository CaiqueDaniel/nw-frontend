import { Tab, Tabs } from '@mui/material';
import { useFormTabsPresenter } from './useFormTabsPresenter';

export function FormTabs({ tabs }: Props) {
  const { onChange, selectedChildren, selectedChildrenIndex } =
    useFormTabsPresenter({
      children: tabs.map((tab) => tab.children),
    });

  return (
    <>
      <Tabs
        onChange={(_, value) => onChange(value)}
        value={selectedChildrenIndex}
        sx={{ mb: 3 }}
        centered
      >
        {tabs.map((tab) => (
          <Tab key={tab.label} label={tab.label} />
        ))}
      </Tabs>
      {selectedChildren}
    </>
  );
}

type Props = {
  tabs: Tab[];
};

type Tab = {
  label: string;
  children: React.ReactNode;
};
