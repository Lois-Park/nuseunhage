// src/pages/Home.tsx
import { Box, Typography, Button, TextField } from "@mui/material";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        background: "linear-gradient(135deg, #FDFCFB 0%, #E2D1C3 100%)",
        px: 2,
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        오늘, 어떤 도전을 시작할까요?
      </Typography>
      <TextField
        label="도전 제목을 입력하세요"
        variant="outlined"
        fullWidth
        sx={{ maxWidth: 400 }}
      />
      <Button variant="contained" size="large" sx={{ mt: 2 }}>
        ✨ Just Do It
      </Button>
    </Box>
  );
}
