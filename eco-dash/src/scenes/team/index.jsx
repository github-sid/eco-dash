import {Box, Typography, useTheme} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { AdminPanelSettingsOutlinedIcon } from "@mui/icons-material/AdminPanelSettingsOutlined"
import { LockOpenOutlinedIcon } from "@mui/icons-material/LockOpenOutlined"
import { SecurityOutlinedIcon } from "@mui/icons-material/SecurityOutlined"
import Header from "../../components/Header";
import { mockDataScope2,DataSummar, mockDataTeam } from "../../data/mockData";
import { NoEncryptionTwoTone } from "@mui/icons-material";

const Team = () =>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);

    const columns=[
        { field: "id", headerName: "ID" },
        {
          field: "name",
          headerName: "Name",
          flex: 1,
          cellClassName: "name-column--cell",
        },
        {
          field: "age",
          headerName: "Age",
          type: "number",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "phone",
          headerName: "Phone Number",
          flex: 1,
        },
        {
          field: "email",
          headerName: "Email",
          flex: 1,
        },]
//         { field: 'datatype', headerName: 'DataType', flex:1},
//         { field: 'unit', headerName: 'Unit',flex:1 , cellClassName:"name-column--cell"},
//         { field: 'amount', headerName: 'Amount', flex:1, type:"number",align:"left"},
// ,
//     ]

    return(
        <Box m="20px">
            <Header title="TEAM" subtitle="Managing the Team Members" />
            <Box m="40px 0 0 0" height="75vh" sx={{
                "& .muiDataGrid-root":{
                    border:"none",
                },
                "& .muiDataGrid-cell":{
                    borderBottom:"none",
                },
                "& .name-column--cell":{
                    color: colors.greenAccent[300]
                },
                "& .MuiDataGrid-columnHeaders":{
                    backgroundColor: colors.blueAccent[700],
                    borderBottom:"none"
                },
                "& .MuiDataGrid-virtualScroller":{
                    backgroundColor: colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700],
                  },
                  "& .MuiCheckbox-root": {
                    color: `${colors.greenAccent[200]} !important`,
                  },
            }}
            >
               <DataGrid 
               rows={mockDataTeam}
               columns={columns}
               getRowId={(row) => row.id}
               />
            </Box>

           
        </Box>
    )
}


export default Team;