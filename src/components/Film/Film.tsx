import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface Props {
  title: string;
}

export default function Film(props: Props) {
  return (
    <ListItem disablePadding>
      <ListItemText primary={props.title} />
    </ListItem>
  );
}
