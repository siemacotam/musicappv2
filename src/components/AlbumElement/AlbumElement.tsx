import {
  CardActionArea,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Album, roundData } from "src/global";
import { Stack } from "@mui/material";
import { BestButton, RemoveButton } from "src/components";
import { useTranslation } from "src/hooks/useTranslation";
import theme from "src/Theme/Theme";

export interface AlbumProps {
  album: Album;
}

export const AlbumElement = ({ album }: AlbumProps) => {
  const { id, artist, title, added, created, isFav } = album;
  const { t } = useTranslation();

  return (
    <Card
      variant="outlined"
      sx={{ bgcolor: isFav ? theme.palette.grey[100] : "#ffffff" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://picsum.photos/200/300?nocache=<?php echo microtime(); ?>"
          alt="photo"
        />
        <CardContent>
          <Stack>
            <Card variant="outlined" sx={{ p: 1, mb: 3 }}>
              <Stack>
                <Typography variant="h5" component="span" textAlign="center">
                  {title}
                </Typography>
                <Typography
                  variant="button"
                  component="span"
                  textAlign="center"
                >
                  {artist}
                </Typography>
              </Stack>
            </Card>
            <Typography variant="caption" component="span">
              {t.publication}: {created}
            </Typography>
            <Typography variant="caption" component="span">
              Id: {id}
            </Typography>
            <Typography variant="caption" component="span">
              {t.added}: {roundData(added)}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Stack direction="row" justifyContent="space-evenly" width="100%">
          <BestButton isFav={isFav} id={id} />
          <RemoveButton id={id} />
        </Stack>
      </CardActions>
    </Card>
  );
};
