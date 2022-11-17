import { Stack, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useTranslation } from "src/hooks/useTranslation";

export const EmptyStateComponent = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Stack direction="row" spacing={2}>
      <InfoOutlinedIcon />
      <Typography component="span" variant="h6">
        {t.empty}
      </Typography>
    </Stack>
  );
};
