import { Typography } from "@mui/material";

export default function Places({ title, places, fallbackText, onSelectPlace }) {
  return (
    <section className="places-category">
      <Typography variant="h5" align="center" gutterBottom>{title}</Typography>
      {places.length === 0 && <Typography variant="body1" align='center'>{fallbackText}</Typography>}
      {places.length > 0 && (
        <ul className="places">
          {places.map((place) => (
            <li key={place.id} className="place-item">
              <button onClick={() => onSelectPlace(place.id)}>
                <img src={place.image.src} alt={place.image.alt} />
                <h3>{place.title}</h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
