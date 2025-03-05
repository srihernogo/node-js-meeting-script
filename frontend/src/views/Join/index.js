import {
  Box,
  Button,
  Card,
  Container,
  Typography,
  useTheme,
} from '@mui/material';
import {
  makeStyles,
} from '@mui/styles';
import { OpenInNew } from '@mui/icons-material';
import Common from '../../common';
import config from '../../config';
import LocalVideo from './LocalVideo';
import MicrophoneToggle from './MicrophoneToggle';
import CameraToggle from './CameraToggle';
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import JoinButton from './JoinButton';
import info from '../../version.json';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    flex: 1,
  },
}));

function Join() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Common.Page
      className={classes.root}
      title={`Join | ${config.appTitle}`}
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
        sx={{ paddingTop: 36, paddingBottom: 36 }}
      >
        <Container maxWidth="xs">
          <Card>
            <Box display="flex" flexDirection="column" alignItems="center" p={3}>
              <Box>
                <Typography
                  variant="h3"
                  component="p"
                  textAlign="center"
                  style={{ color: theme.palette.primary.deep }}
                  sx={{ fontFamily: 'KaushanScript', fontSize: 32 }}
                >
                  {config.appTitle}
                </Typography>
              </Box>
              <Box mt={1}>
                <Typography
                  variant="h6"
                  component="p"
                  style={{ color: theme.palette.primary.deep, textAlign: 'center' }}
                >
                  Meeting Script with Audio and Video via getUserMedia - React, Node.js, Mediasoup
                </Typography>
              </Box>
              {config.demo && (
                <Box width="60%" display="flex" pt={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    href="https://codecanyon.net/user/honeyside/portfolio"
                    target="_blank"
                    size="small"
                    endIcon={<OpenInNew />}
                  >
                    Buy on CodeCanyon
                  </Button>
                </Box>
              )}
              <NameInput />
              <EmailInput />
              <LocalVideo />
              <Box display="flex" pt={3}>
                <MicrophoneToggle />
                <CameraToggle />
              </Box>
              {config.demo && (
                <Box mt={3}>
                  <Typography
                    variant="h6"
                    component="p"
                    style={{ color: theme.palette.primary.deep, textAlign: 'center' }}
                  >
                    Warning: this is a demo. There might be people you do not know in the meeting.
                    Be careful.
                  </Typography>
                </Box>
              )}
              <JoinButton />
            </Box>
          </Card>
        </Container>
        <Box mt={1}>
          <Typography
            variant="caption"
            component="p"
            style={{ color: theme.palette.text.secondary, textAlign: 'center' }}
          >
            2022 &copy;
            {' v'}
            {info.version}
            {' ('}
            {info.build}
            )
          </Typography>
        </Box>
      </Box>
    </Common.Page>
  );
}

export default Join;
