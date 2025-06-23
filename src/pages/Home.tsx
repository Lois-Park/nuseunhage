// src/pages/Home.tsx
/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { Box, Typography, Button, TextField, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

// 배경 그라데이션
const gradientAnimation = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

const gradientStyle = css`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-45deg, #ff9a9e, #fad0c4, #fbc2eb, #a6c1ee);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 10s ease infinite;
`;

// 텍스트 애니메이션
// 텍스트를 문자 단위로 나누기
const title = "Nuseunhage";
const letters = title.split("");

const letterAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
    },
  }),
};

// Emotion 스타일
const containerStyle = css`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;  
  background-size: 400% 400%;
  animation: gradientXY 10s ease infinite;
  @keyframes gradientXY {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
`;

const letterStyle = css`
  display: inline-block;
  font-size: 2.5rem;
  font-weight: light;  
  color: white;  
`;

export default function Home() {
  return (      
    
    <motion.div css={gradientStyle}>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{        
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,        
          px: 2,
        }}
      >
        {/* <Typography variant="h1" fontFamily="Quicksand" fontWeight="light" color="primary">
          Nuseunhage
        </Typography> */}

        <div css={containerStyle}>
          <Typography component="h1" fontFamily="Quicksand" fontWeight="light" sx={{ display: "flex" }}>
            {letters.map((char, i) => (
              <motion.span
                key={i}
                css={letterStyle}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterAnimation}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </Typography>
        </div>
        <Typography variant="h6">
          Season1
        </Typography>
        <TextField
          label="도전 제목을 입력하세요"
          variant="outlined"
          fullWidth
          sx={{ maxWidth: 400 }}
        />
        <Button variant="contained" size="large" sx={{ mt: 2 }}>
          Just Do It
        </Button>
      </Box>
    </motion.div>  
  );
}