import styled from "@emotion/styled";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import Box from "@mui/material/Box";
import BasicImageWrapperUI from "../Div/BasicImageWrapper.presenter";
import BasicImgUI from "../Img/BasicImg.presenter";

export default function TabsUI(props: any) {
  return (
    <>
      <Box
        sx={{
          width: "70%",
          typography: "body1",
          marginTop: "5%",
          borderBottom: "1px solid gray",
          borderTop: "1px solid ",
        }}
      >
        <TabContext value={props.value}>
          <Box sx={{ borderBottom: 3, borderColor: "divider", width: "100%" }}>
            <TabList
              sx={{ width: "100%" }}
              onChange={props.handleChange}
              aria-label="lab API tabs example"
              variant="scrollable"
              scrollButtons="auto"
            >
              {props.MainCategorydata?.fetchProductCategory?.map((el: any) => (
                <Tab
                  id={el.name}
                  label={el.name}
                  value={el.name}
                  sx={{ width: "20%" }}
                />
              ))}
            </TabList>
          </Box>

          <div
            id="TabPanelDiv"
            style={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            {props.SubCategorydata?.fetchProductSubCategory?.map((el: any) => {
              if (props.value === el.productCategory.name)
                return (
                  <TabPanel
                    value={props.value}
                    sx={{
                      width: "20%",

                      display: "flex",

                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div>{el.name}</div>
                  </TabPanel>
                );
            })}
          </div>
        </TabContext>
      </Box>
    </>
  );
}
