import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function NavTabs({ value, onChange }) {

  return (
    <Tabs value={value} onChange={onChange} variant="fullWidth" centered>
      <Tab label="Тестовое задание" />
      <Tab label="Дополнительные ссылки" />
    </Tabs>
  );
}
