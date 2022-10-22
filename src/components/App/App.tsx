import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import Header from '../Header';

export default function App() {
  return (
    <>
      <Header />
      <br />

      <Container component="main">
        <Typography>
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
      </Container>
    </>
  );
}
