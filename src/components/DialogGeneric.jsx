import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const DialogGeneric = ({
  openDialog = false,
  handleCloseDialog,
  dialogTitleText = "",
  dialogDescriptionText = "",
  btnCloseText = "Chiudi",
  btnConfirmText = "Conferma",
  handleConfirmDialog,
}) => {
  return (
    <Dialog open={openDialog} onClose={handleCloseDialog}>
      <DialogTitle id="alert-dialog-title">{dialogTitleText}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {dialogDescriptionText}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog}>{btnCloseText}</Button>
        <Button onClick={handleConfirmDialog} autoFocus>
          {btnConfirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogGeneric;
