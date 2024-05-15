import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} 
        
        className="button">
          No
        </button>
        <Button sx={{
          backgroundColor: 'green', // Background color
          color: 'white',           // Text color
          '&:hover': {
            backgroundColor: 'darkgreen' // Background color on hover
          }
        }} onClick={onConfirm} variant="contained">Yes</Button>

      </div>
    </div>
  );
}
