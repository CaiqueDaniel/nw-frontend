import { Box, Tab, Tabs } from '@mui/material';
import { useFormTabsPresenter } from './useFormTabsPresenter';

export function FormTabs({ tabs }: Props) {
  const { onChange, selectedChildrenIndex } = useFormTabsPresenter();

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

      {tabs.map((tab, index) => (
        <Box
          key={tab.label}
          display={index === selectedChildrenIndex ? '' : 'none'}
        >
          {tab.children}
        </Box>
      ))}
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
