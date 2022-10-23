import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import Films from '../Films';
import Header from '../Header';

export default function App() {
  return (
    <>
      <Header />
      <br />

      <Container component="main">
        <Typography gutterBottom>
          Welcome to{' '}
          <Link
            href="https://github.com/remarkablemark/react-typescript-mui-rtk-query-parcel-template"
            target="_blank"
            rel="noopener noreferrer"
          >
            React TypeScript MUI RTK Query Template
          </Link>
          !
        </Typography>

        <Typography gutterBottom>
          <Link
            href="https://studio.apollographql.com/public/star-wars-swapi/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            Star Wars GraphQL API
          </Link>
        </Typography>
        <br />

        <Films />
      </Container>
    </>
  );
}
