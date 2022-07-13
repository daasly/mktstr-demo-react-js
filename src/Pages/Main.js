import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

import { TaggingContext } from '../Utilities/Tagging'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
}

const Main = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const { initTagging } = useContext(TaggingContext)

  useEffect(() => {
    if (open) initTagging()
  }, [open, initTagging])

  return (
    <Container maxWidth='md' sx={{ pt: '15px' }}>
      <Stack
        direction='column'
        justifyContent='flex-start'
        alignItems='center'
        spacing={2}
      >
        <Typography variant='h4'>Main Page</Typography>
        <Typography component={'p'} sx={{ p: '25px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          efficitur blandit libero, quis hendrerit tellus lacinia eu. Integer
          elit turpis, molestie in semper vel, vehicula sit amet eros. Aliquam
          erat volutpat. Mauris vestibulum lectus odio, sed gravida felis
          pretium nec. Nulla elementum faucibus lorem vitae tempor. Praesent vel
          euismod purus. Phasellus luctus non massa ut aliquet. Quisque
          hendrerit libero nisl, at auctor justo congue et. Cras vitae
          pellentesque sem. Pellentesque porttitor turpis id posuere faucibus er{' '}
          <Typography
            component={'span'}
            className={'mktstr_ph'}
            sx={{ fontWeight: '900' }}
          >
            (833) 681-5662
          </Typography>
          . Vivamus imperdiet ligula eget arcu facilisis, sed consequat magna
          luctus. Sed finibus, ipsum ac imperdiet molestie, augue mi vestibulum
          augue, sed maximus enim velit vel quam. Duis ut malesuada nibh. Nulla
          bibendum a neque sed pharetra. Sed ut facilisis dolor, nec hendrerit
          ex. Etiam ornare in nibh in venenatis.
        </Typography>
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={2}
        >
          <Button
            variant='contained'
            size='large'
            sx={{ maxWidth: '200px' }}
            onClick={handleOpen}
          >
            Modal Example
          </Button>
          <Button
            variant='contained'
            size='large'
            sx={{ maxWidth: '200px' }}
            component={Link}
            to={'/form'}
          >
            Form Example
          </Button>
        </Stack>

        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Stack
              direction='column'
              justifyContent='flex-start'
              alignItems='center'
              spacing={2}
            >
              <Typography variant='h6'>Call Today</Typography>
              <Typography
                variant='h4'
                component={'a'}
                href={`tel:+18336815662`}
                sx={[
                  {
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
          </Box>
        </Modal>
      </Stack>
    </Container>
  )
}

export default Main
