// HomePage.tsx
"use client";

import Image from "next/image";
import { Box, Container, Button, List, ListItem, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ButtonProps } from "@mui/material/Button";

// Styled components
const StyledCode = styled("code")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? "rgba(0, 0, 0, 0.05)"
      : "rgba(255, 255, 255, 0.06)",
  padding: "2px 4px",
  borderRadius: theme.shape.borderRadius,
  fontWeight: 600,
  fontFamily: "monospace",
}));

const StyledLink = styled("a")(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  "&:hover": {
    textDecoration: "underline",
    textUnderlineOffset: "4px",
  },
}));

// Update Button types to support component prop
const DeployButton = styled(Button)<ButtonProps<"a">>(({ theme }) => ({
  borderRadius: "9999px",
  backgroundColor: theme.palette.mode === "light" ? "#000" : "#fff",
  color: theme.palette.mode === "light" ? "#fff" : "#000",
  textTransform: "none",
  padding: theme.spacing(1, 2),
  "&:hover": {
    backgroundColor: theme.palette.mode === "light" ? "#383838" : "#ccc",
  },
}));

const DocsButton = styled(Button)<ButtonProps<"a">>(({ theme }) => ({
  borderRadius: "9999px",
  border: `1px solid ${
    theme.palette.mode === "light"
      ? "rgba(0, 0, 0, 0.08)"
      : "rgba(255, 255, 255, 0.145)"
  }`,
  textTransform: "none",
  padding: theme.spacing(1, 2),
  minWidth: "176px",
  "&:hover": {
    backgroundColor: theme.palette.mode === "light" ? "#f2f2f2" : "#1a1a1a",
    border: "none",
  },
}));

function HomePage() {
  return (
    <Container>
      <Box
        sx={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateRows: "20px 1fr 20px",
          gap: 4,
          padding: { xs: 2, sm: 4 },
          paddingBottom: 5,
        }}
      >
        <Box
          component="main"
          sx={{
            gridRow: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />

          <List
            sx={{
              listStyleType: "decimal",
              fontFamily: "monospace",
              fontSize: "0.875rem",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <ListItem sx={{ display: "list-item", mb: 1 }}>
              Get started by editing <StyledCode>src/app/page.tsx</StyledCode>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Save and see your changes instantly.
            </ListItem>
          </List>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            alignItems="center"
          >
            <DeployButton
              component="a"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={
                <Image
                  className="dark:invert"
                  src="/vercel.svg"
                  alt="Vercel logomark"
                  width={20}
                  height={20}
                />
              }
            >
              Deploy now
            </DeployButton>

            <DocsButton
              component="a"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </DocsButton>
          </Stack>
        </Box>

        <Box
          component="footer"
          sx={{
            gridRow: 3,
            display: "flex",
            gap: 3,
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StyledLink
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </StyledLink>

          <StyledLink
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </StyledLink>

          <StyledLink
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </StyledLink>
        </Box>
      </Box>
    </Container>
  );
}

export default HomePage;
