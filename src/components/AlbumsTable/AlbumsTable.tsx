import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useTranslation } from "src/hooks/useTranslation";
import { useAppState } from "src/hooks/useAppState";
import { Card } from "@mui/material";
import { RemoveButton } from "../RemoveButton/RemoveButton";
import { BestButton } from "../BestButton/BestButton";
import { roundData } from "src/global";

export const AlbumsTable = () => {
  const { t } = useTranslation();
  const state = useAppState();

  const headers = ["ID", t.artist, t.title, t.added, t.created, t.isFav, ""];

  return (
    <TableContainer component={Card} variant="outlined">
      <Table size="small">
        <TableHead>
          <TableRow>
            {headers.map((title, index) => (
              <TableCell
                key={title}
                sx={{
                  textAlign: index === headers.length - 2 ? "right" : "left",
                }}
              >
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {state.list.map(({ id, title, artist, added, created, isFav }) => (
            <TableRow
              key={id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {id}
              </TableCell>
              <TableCell>{artist}</TableCell>
              <TableCell>{title}</TableCell>
              <TableCell>{roundData(added)}</TableCell>
              <TableCell>{created}</TableCell>
              <TableCell align="right">
                <BestButton isFav={isFav} id={id} />
              </TableCell>
              <TableCell align="right">
                <RemoveButton id={id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
