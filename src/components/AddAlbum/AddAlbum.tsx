import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { useFormik, FormikProvider } from "formik";
import { Album } from "src/global";
import { useTranslation } from "src/hooks/useTranslation";
import { addAlbumInitialValues } from "./AddAlbum.const";
import { AddAlbumForm } from "./AddAlbumForm/AddAlbumForm";
import * as yup from "yup";
import { useContext } from "react";
import { AppContextState } from "src/App/AppContext/AppContext.types";
import { AppContext } from "src/App/AppContext/AppContext";
import { addAlbum } from "src/App/AppContext/Reducers/mainReducer.helpers";
import { useState } from "react";
import { AlertMessage, AlertMessageProps } from "../AlertMessage";

export const AddAlbum = () => {
  const [showMsg, setShowMsg] = useState<AlertMessageProps>({
    message: "",
    status: 1,
  });
  const { t } = useTranslation();
  const { dispatch, state } = useContext<AppContextState>(AppContext);
  const { message, status } = showMsg;

  const validationSchema = yup.object({
    id: yup.string().required(t.required),
    artist: yup.string().required(t.required),
    title: yup.string().required(t.required),
    created: yup
      .number()
      .min(1900, t.minYear)
      .max(2030, t.maxYear)
      .required(t.required),
  });

  const formik = useFormik<Album>({
    initialValues: addAlbumInitialValues,
    validationSchema,
    onSubmit: (values) => {
      const { id, artist, title } = values;

      const idAlreadyUsed = state.list.some((album) => album.id === id);
      if (idAlreadyUsed) {
        setShowMsg({ message: t.iderror, status: 1 });
        return;
      }

      const isArtisAlreadyUsed = state.list.some(
        (album) => album.artist === artist
      );
      const isAlbumAlreadyUsed = state.list.some(
        (album) => album.title === title
      );
      if (isArtisAlreadyUsed && isAlbumAlreadyUsed) {
        setShowMsg({ message: t.isalreadysaved, status: 1 });
        return;
      }

      values.added = new Date().getTime();
      dispatch(addAlbum(values));
      formik.resetForm();
      setShowMsg({ message: t.addsuccess, status: 2 });
    },
  });

  return (
    <Grid container maxWidth={"1000px"} mx="auto">
      <Grid item xs={12} container p={3} rowGap={4}>
        <Typography variant="h5">{t.add}</Typography>
        {message && <AlertMessage message={message} status={status} />}
        <Grid item xs={12}>
          <FormikProvider value={formik}>
            <AddAlbumForm />
          </FormikProvider>
        </Grid>
      </Grid>
    </Grid>
  );
};
