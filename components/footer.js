import Footer from './footer.mdx'
import { Flex, Box, Text, Link as A } from '@theme-ui/components'
import { Flag } from 'react-feather'

export default () => (
  <Box
    as="footer"
    sx={{ bg: 'sunken', textAlign: 'center', px: 2, py: [3, 4], mt: [4, 5] }}
  >
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        p: { color: 'muted' },
        a: { color: 'accent', ':first-of-type': { fontWeight: 'bold' } }
      }}
    >
      <Footer />
    </Flex>
  </Box>
)
