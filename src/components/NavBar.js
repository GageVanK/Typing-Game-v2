import { Link } from 'react-router-dom';
import {
    createStyles,
    Header,
    Group,
    Button,
    Text,
    Divider,
    Box,
    Burger,
    Drawer,
    ScrollArea,
  } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
  import {
  } from '@tabler/icons';
  import ThemeButton from '../components/ThemeButton'


  const useStyles = createStyles((theme) => ({
    link: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      textDecoration: 'none',
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontWeight: 500,
      fontSize: theme.fontSizes.sm,
  
      [theme.fn.smallerThan('sm')]: {
        height: 42,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      },
  
      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      }),
    },
  
    subLink: {
      width: '100%',
      padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
      borderRadius: theme.radius.md,
  
      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      }),
  
      '&:active': theme.activeStyles,
    },
  
    dropdownFooter: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      margin: -theme.spacing.md,
      marginTop: theme.spacing.sm,
      padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
      paddingBottom: theme.spacing.xl,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },
  
    hiddenMobile: {
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
  
    hiddenDesktop: {
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
  }));
  
 
  //Docs for this NavBar from Mantine UI Header Components - https://ui.mantine.dev/category/headers
  //Add BoilerPlate and adjust for your project. Super easy!
  export default function NavBar() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const { classes, theme } = useStyles();
  
    return (
      <Box pb={5}>
        <Header height={60} px="md">
          <Group position="apart" sx={{ height: '100%' }}>
            <Text component={Link} to='/' sx={{ fontWeight: 'bold', fontSize: 22, lineHeight: 1.4 }}>Typing React Game</Text>
  
          
            <ThemeButton/>
              
              
            
  
            <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
          </Group>
        </Header>
  
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Typing React Game"
          className={classes.hiddenDesktop}
          zIndex={1000000}
        >
          <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
            <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
  
            <Link to="/" className={classes.link}>
              Home 
            </Link>
            <Link to="/highScores" className={classes.link}>
              High Scores
            </Link>
  
            <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
  
            <Group position="center" grow pb="xl" px="md">
                <ThemeButton/>
              <Button variant="default">Log in</Button>
            
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    );
  }
