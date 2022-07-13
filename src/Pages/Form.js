import { useContext, useState } from 'react'
import axios from 'axios'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import LoadingButton from '@mui/lab/LoadingButton'
import Box from '@mui/material/Box'

import { TaggingContext } from '../Utilities/Tagging'

const Form = () => {
  const [loading, setLoading] = useState(false)
  const { session } = useContext(TaggingContext)

  const baseUrl = 'https://us-central1-mktstr-dev.cloudfunctions.net'
  const path = '/lead'
  const body = {
    source: session.source,
    session: session.session,
    name: 'John Doe',
    phone: '3055555555',
    email: 'john@marketst.app',
    formResponses: [
      { answer: 'Yes', position: 0, question: 'Is this the first questions?' },
      { answer: 'No', position: 1, question: 'Is this the third questions?' }
    ]
  }

  const handleSubmit = async (url, body) => {
    setLoading(true)

    await axios
      .post(url, body)
      .then((response) =>
        alert('Lead Created\n' + JSON.stringify(response.data))
      )
      .catch((err) => console.error(err))

    setLoading(false)
  }

  return (
    <Container maxWidth='md' sx={{ pt: '15px' }}>
      <Stack
        direction='column'
        justifyContent='flex-start'
        alignItems='center'
        spacing={2}
      >
        <Typography variant='h4'>Form Page</Typography>
        <Stack
          direction='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          spacing={2}
        >
          <Typography variant='h6' sx={{ fontWeight: '900' }}>
            URL
          </Typography>
          <Typography variant='body1'>{baseUrl + path}</Typography>
          <Typography variant='h6' sx={{ fontWeight: '900' }}>
            Method
          </Typography>
          <Typography variant='body1'>POST</Typography>
          <Typography variant='h6' sx={{ fontWeight: '900' }}>
            Required
          </Typography>
          <Box component={'ul'}>
            <Typography component={'li'} variant='body1'>
              source
            </Typography>
            <Typography component={'li'} variant='body1'>
              phone or email
            </Typography>
          </Box>
          <Typography variant='h6' sx={{ fontWeight: '900' }}>
            Body
          </Typography>
          <Typography component={'pre'} variant='body1'>
            {JSON.stringify(body, undefined, 2)}
          </Typography>
        </Stack>
        <LoadingButton
          loading={loading}
          variant='contained'
          size='large'
          sx={{ maxWidth: '200px' }}
          onClick={() => handleSubmit(baseUrl + path, body)}
        >
          Submit
        </LoadingButton>
      </Stack>
    </Container>
  )
}

export default Form
