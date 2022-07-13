import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const About = () => {
  return (
    <Container maxWidth='md' sx={{ pt: '15px' }}>
      <Stack
        direction='column'
        justifyContent='flex-start'
        alignItems='center'
        spacing={2}
      >
        <Typography variant='h4'>About Page</Typography>
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
      </Stack>
    </Container>
  )
}

export default About
