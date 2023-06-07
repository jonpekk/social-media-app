'use client'
import DangerButton from "@/src/shared/components/Buttons/DangerButton";
import PrimaryButton from "@/src/shared/components/Buttons/PrimaryButton";
import CardContainer from "@/src/shared/components/CardContainer/CardContainer";
import ThemeWrapper from "@/src/shared/ThemeWrapper/ThemeWrapper";
import { Grid, ThemeProvider, CssBaseline } from "@mui/material";
import Container from "@mui/material/Container";
import Post from "@/src/Feed/Post/Post";
import Feed from "@/src/Feed/Feed";


function Components() {
  return (
    <>
      <DangerButton>
        Danger Button
      </DangerButton>
      <PrimaryButton>
        Primary Action
      </PrimaryButton>
      <Grid item xs={12} sm={6} md={4}>
        <CardContainer>
          <Feed />
        </CardContainer>
      </Grid>
    </>
  )
}

export default Components