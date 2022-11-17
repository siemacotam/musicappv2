import { Alert, Grid } from "@mui/material";

// Statuses
// 1 - error
// 2 - success
// 3 - info

const pickSeverity = (status: number) => {
  switch (status) {
    case 1:
      return "error";
    case 2:
      return "success";
    case 3:
      return "warning";
    default:
      return "error";
  }
};

export interface AlertMessageProps {
  message: string;
  status: 1 | 2 | 3;
}

export const AlertMessage = ({ message, status }: AlertMessageProps) => (
  <Grid container>
    <Grid item xs={12}>
      <Alert severity={pickSeverity(status)}>{message}</Alert>
    </Grid>
  </Grid>
);
