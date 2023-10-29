import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Button, Typography, Container, Box } from "@mui/material";

// ----------------------------------------------------------------------

const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}));

// ----------------------------------------------------------------------

export default function SiteUnderConstruction() {
  return (
    <>
      <title> unavailable </title>

      <Container>
        <StyledContent sx={{ textAlign: "center", alignItems: "center" }}>
          <Typography variant="h3" paragraph>
            Website Under Construction
          </Typography>

          <Typography sx={{ color: "text.secondary" }}>
            We're sorry, but this site is currently under construction. Please
            check back soon for updates!
          </Typography>


          <Box
            component="img"
            src="/construction.png"
            sx={{ height: 200, mx: "auto", my: { xs: 2, sm: 4 } }}
          />

        </StyledContent>
      </Container>
    </>
  );
}
