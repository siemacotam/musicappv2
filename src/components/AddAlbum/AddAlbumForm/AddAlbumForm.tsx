import {
  Button,
  Stack,
  FormControlLabel,
  Checkbox,
  TextField,
} from "@mui/material";
import { useFormikContext, Form } from "formik";
import { Album } from "src/global";
import { useTranslation } from "src/hooks/useTranslation";

export const AddAlbumForm = () => {
  const { t } = useTranslation();

  const {
    values: { id, artist, created, title, isFav },
    handleChange,
    touched,
    errors,
  } = useFormikContext<Album>();

  return (
    <Form>
      <Stack rowGap={2}>
        <TextField
          fullWidth
          name="artist"
          type="text"
          label={t.artist}
          value={artist}
          onChange={handleChange}
          error={touched.artist && Boolean(errors.artist)}
          helperText={touched.artist && errors.artist}
        />
        <TextField
          fullWidth
          name="title"
          type="text"
          label={t.title}
          value={title}
          onChange={handleChange}
          error={touched.title && Boolean(errors.title)}
          helperText={touched.title && errors.title}
        />
        <TextField
          fullWidth
          name="id"
          type="number"
          label="ID"
          value={id}
          onChange={handleChange}
          error={touched.id && Boolean(errors.id)}
          helperText={touched.id && errors.id}
        />
        <TextField
          fullWidth
          name="created"
          type="number"
          label={t.created}
          value={created}
          onChange={handleChange}
          error={touched.created && Boolean(errors.created)}
          helperText={touched.created && errors.created}
        />
        <FormControlLabel
          control={
            <Checkbox name="isFav" value={isFav} onChange={handleChange} />
          }
          label={t.isFav}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          {t.save}
        </Button>
      </Stack>
    </Form>
  );
};
