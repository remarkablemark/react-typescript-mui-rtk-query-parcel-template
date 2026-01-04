import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

import { useGetFilmsQuery } from '../../services/films';
import Film from '../Film';

export default function Films() {
  const { data, isError, isLoading } = useGetFilmsQuery();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return (
      <Typography>There was an error. Please refresh and try again.</Typography>
    );
  }

  return (
    <List
      subheader={
        <Typography component="h1" variant="h4" gutterBottom>
          Star Wars Films
        </Typography>
      }
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    >
      {data?.map((film) => (
        <Film key={film.id} title={film.title} />
      ))}
    </List>
  );
}
