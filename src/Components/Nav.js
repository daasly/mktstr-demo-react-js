import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const pages = [
  { name: 'Main', path: '/' },
  { name: 'About', path: '/about' }
]

const Nav = () => {
  return (
    <AppBar position='static'>
      <Container maxWidth='lg'>
        <Stack direction='row' justifyContent='space-between'>
          <Stack direction='row'>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  fontWeight: 'bold'
                }}
              >
                {page.name}
              </Button>
            ))}
          </Stack>
          <Typography
            component={'a'}
            variant='h6'
            href={`tel:+13055887596`}
            sx={[
              {
                my: 2,
                color: 'white',
                display: 'block',
                fontWeight: 'bold',
                textDecoration: 'none'
              },
              {
                '&:hover': {
                  textDecoration: 'underline'
                }
              }
            ]}
          >
            (833) 681-5662
          </Typography>
        </Stack>
      </Container>
    </AppBar>
  )
}

export default Nav
