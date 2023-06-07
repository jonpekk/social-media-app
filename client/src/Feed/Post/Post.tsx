import { Card, Grid, Avatar } from '@mui/material'
import { containerPadding } from '@/src/theme/utils/spacing';
import { mdBoldText, smLightText } from '@/src/theme/utils/fonts';


const PostBody = ({ children }: {
  children: React.ReactNode
}) => (
  <Grid container
    sx={{
      py: 2,
    }}
  >
    {children}
  </Grid>
);

function Post() {
  return (
    <Grid
      item
      xl={7}
      lg={7}
      md={8}
      sm={12}
      xs={12}
    >
      <Card sx={containerPadding}>
        <Grid
          container
          spacing={{
            xs: 2,
            sm: 2,
            md: 8,
            lg: 8

          }}
        >
          <Grid item xs={2} sm={2} md={1}>
            <Avatar>OP</Avatar>
          </Grid>
          <Grid item xs={9} sm={10} md={10}>
            <Grid container spacing={2} alignItems="center">
              <Grid item sx={mdBoldText}>
                Username
              </Grid>
              <Grid item sx={smLightText}>
                01/01/2000
              </Grid>
            </Grid>
            <PostBody>
              <Grid item>
                Now I need to clean this up to make sure that the components are separated in a way that makes sense
              </Grid>
            </PostBody>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  )
}

export default Post