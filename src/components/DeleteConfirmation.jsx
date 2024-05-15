import { ButtonGroup } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export default function DeleteConfirmation({ onConfirm, onCancel }) {

  return (
    <div id="delete-confirmation">
      <Typography variant='h5' gutterBottom>Are you sure?</Typography>
      <Typography variant='string'>Do you really want to remove this place?</Typography>
      <div id="confirmation-actions">
        <ButtonGroup >
        <Button 
        variant='contained'
        onClick={onCancel} 
          sx={{
            backgroundColor: '#5d0909', // Background color
            color: 'white',           // Text color
            '&:hover': {
              backgroundColor: '#3F0C01' // Background color on hover
            }
          }} 
        >
          No
        </Button>
        <Button 
        sx={{
          backgroundColor: 'green', // Background color
          color: 'white',           // Text color
          '&:hover': {
            backgroundColor: 'darkgreen' // Background color on hover
          }
        }} onClick={onConfirm} variant="contained">Yes</Button>
        </ButtonGroup>
        

      </div>
    </div>
  );
}
