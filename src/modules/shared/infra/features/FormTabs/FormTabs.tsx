import { Box, Tab, Tabs } from '@mui/material';
import { useFormTabsPresenter } from './useFormTabsPresenter';

export function FormTabs(props: Props) {
  const { onChange, selectedChildrenIndex } = useFormTabsPresenter(props);

  return (
    <>
      <Tabs
        onChange={(_, value) => onChange(value)}
        value={selectedChildrenIndex}
        sx={{ mb: 3 }}
        centered
      >
        {props.tabs.map((tab) => (
          <Tab key={tab.label} label={tab.label} />
        ))}
      </Tabs>

      {props.tabs.map((tab, index) => (
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
  tabIndex?: number;
  onTabChange?: (index: number) => void;
};

type Tab = {
  label: string;
  children: React.ReactNode;
};
