import { Grid } from "@mui/material";
import { AlbumElement } from "src/components";
import { AlbumsTable } from "src/components/AlbumsTable/AlbumsTable";
import { Album, View, views } from "src/global";

export const showContent = (view: View, list: Album[]) => {
  switch (view) {
    case views.grid:
      return (
        <Grid container>
          {list.map((album) => (
            <Grid key={album.id} item xs={12} md={3} p={1}>
              <AlbumElement album={album} />
            </Grid>
          ))}
        </Grid>
      );

    case views.column:
      return <AlbumsTable />;
    default:
      return null;
  }
};
