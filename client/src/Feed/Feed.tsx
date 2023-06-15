'use client'
import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material/styles";
import { lightThemeColors } from '@/src/theme/utils/themeColors';
import Post from "./Post/Post";
import { Grid, Typography } from '@mui/material'
import { PostData } from "@/types/post";

const {
  primaryWhite
} = lightThemeColors

const feedTheme = createTheme({
  palette: {
    background: {
      default: primaryWhite,
      paper: primaryWhite
    }
  }
})

function Feed({ posts }: { posts: PostData[] }) {

  return (
    <>
      <ThemeProvider theme={feedTheme}>
        <Grid
          container
          spacing={1}
          justifyContent="center"
          py={2}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2">
              Your Feed
            </Typography>
          </Grid>
          {
            posts.map(post => {
              return (
                <Post data={post} key={post.id} />
              )
            })
          }
        </Grid>
      </ThemeProvider>
    </>
  )
}

export default Feed