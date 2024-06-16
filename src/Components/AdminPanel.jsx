import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import ProductCreation from "./ProductCreation";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const AdminPanel = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab 
            label="Add Products" 
            {...a11yProps(0)} 
            sx={{ color: value === 0 ? 'black' : 'white' }} 
          />
          <Tab 
            label="Your Products" 
            {...a11yProps(1)} 
            sx={{ color: value === 1 ? 'black' : 'white' }} 
          />
          <Tab 
            label="Add Coupons" 
            {...a11yProps(2)} 
            sx={{ color: value === 2 ? 'black' : 'white' }} 
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ProductCreation />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </>
  );
};

export default AdminPanel;
